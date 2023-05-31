package io.openjob.server.admin.service.impl;

import io.openjob.common.constant.InstanceStatusEnum;
import io.openjob.common.util.DateUtil;
import io.openjob.server.admin.request.home.DelayChartRequest;
import io.openjob.server.admin.request.home.DelayPercentageRequest;
import io.openjob.server.admin.request.home.JobChartRequest;
import io.openjob.server.admin.request.home.JobPercentageRequest;
import io.openjob.server.admin.request.home.SystemDataRequest;
import io.openjob.server.admin.request.home.TaskDataRequest;
import io.openjob.server.admin.service.HomeService;
import io.openjob.server.admin.vo.home.DataItemVO;
import io.openjob.server.admin.vo.home.DelayChartVO;
import io.openjob.server.admin.vo.home.DelayPercentageVO;
import io.openjob.server.admin.vo.home.JobChartVO;
import io.openjob.server.admin.vo.home.JobPercentageVO;
import io.openjob.server.admin.vo.home.SystemDataVO;
import io.openjob.server.admin.vo.home.TaskDataVO;
import io.openjob.server.repository.constant.ServerStatusEnum;
import io.openjob.server.repository.constant.WorkerStatusEnum;
import io.openjob.server.repository.dao.AppDAO;
import io.openjob.server.repository.dao.DelayDAO;
import io.openjob.server.repository.dao.DelayInstanceDAO;
import io.openjob.server.repository.dao.JobDAO;
import io.openjob.server.repository.dao.JobInstanceDAO;
import io.openjob.server.repository.dao.JobSlotsDAO;
import io.openjob.server.repository.dao.ServerDAO;
import io.openjob.server.repository.dao.WorkerDAO;
import io.openjob.server.repository.dto.GroupCountDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.List;
import java.util.concurrent.TimeUnit;

/**
 * @author stelin swoft@qq.com
 * @since 1.0.2
 */
@Service
public class HomeServiceImpl implements HomeService {
    private final JobDAO jobDAO;
    private final JobInstanceDAO jobInstanceDAO;
    private final DelayDAO delayDAO;
    private final DelayInstanceDAO delayInstanceDAO;
    private final AppDAO appDAO;
    private final ServerDAO serverDAO;
    private final JobSlotsDAO jobSlotsDAO;
    private final WorkerDAO workerDAO;

    @Autowired
    public HomeServiceImpl(
            JobDAO jobDAO,
            JobInstanceDAO jobInstanceDAO,
            DelayDAO delayDAO,
            DelayInstanceDAO delayInstanceDAO,
            AppDAO appDAO,
            ServerDAO serverDAO,
            JobSlotsDAO jobSlotsDAO,
            WorkerDAO workerDAO) {
        this.jobDAO = jobDAO;
        this.jobInstanceDAO = jobInstanceDAO;
        this.delayDAO = delayDAO;
        this.delayInstanceDAO = delayInstanceDAO;
        this.appDAO = appDAO;
        this.serverDAO = serverDAO;
        this.jobSlotsDAO = jobSlotsDAO;
        this.workerDAO = workerDAO;
    }

    @Override
    public TaskDataVO taskData(TaskDataRequest taskDataRequest) {
        TaskDataVO taskDataVO = new TaskDataVO();
        Long namespaceId = taskDataRequest.getNamespaceId();
        Long zeroTimestamp = DateUtil.getZeroTimestamp();
        Long timestamp = DateUtil.timestamp();

        // Job
        Long jobTotal = this.jobDAO.countByNamespace(namespaceId);
        Long jobNew = this.jobDAO.countByNamespaceAndCreateTime(namespaceId, zeroTimestamp, timestamp);
        taskDataVO.setJob(new DataItemVO(jobTotal, jobNew));

        // Job Instance
        Long jobInstanceTotal = this.jobInstanceDAO.countTotalByNamespace(namespaceId);
        Long jobInstanceNew = this.jobInstanceDAO.countTotalByNamespaceAndCreateTime(namespaceId, zeroTimestamp, timestamp, null);
        taskDataVO.setJobInstance(new DataItemVO(jobInstanceTotal, jobInstanceNew));

        //Delay
        Long delayTotal = this.delayDAO.countByNamespace(namespaceId);
        Long delayNew = this.delayDAO.countByNamespaceAndCreateTime(namespaceId, zeroTimestamp, timestamp);
        taskDataVO.setDelay(new DataItemVO(delayTotal, delayNew));

        //DelaInstance
        Long delayInstanceTotal = this.delayInstanceDAO.countTotalByNamespace(namespaceId);
        Long delayInstanceNew = this.delayInstanceDAO.countTotalByNamespaceAndCreateTime(namespaceId, zeroTimestamp, timestamp, null);
        taskDataVO.setDelayInstance(new DataItemVO(delayInstanceTotal, delayInstanceNew));
        return taskDataVO;
    }

    @Override
    public SystemDataVO systemData(SystemDataRequest systemDataRequest) {
        SystemDataVO systemDataVO = new SystemDataVO();
        Long namespaceId = systemDataRequest.getNamespaceId();

        // App
        Long appTotal = this.appDAO.countByNamespaceId(namespaceId);
        systemDataVO.setApp(new DataItemVO(appTotal, 0L));

        // Server
        Long serverTotal = this.serverDAO.countByStatus(ServerStatusEnum.OK.getStatus());
        systemDataVO.setServer(new DataItemVO(serverTotal, 0L));

        // Worker
        Long workerTotal = this.workerDAO.countByNamespaceIdAndStatus(namespaceId, WorkerStatusEnum.ONLINE.getStatus());
        systemDataVO.setWorker(new DataItemVO(workerTotal, 0L));

        // Slots
        Long slotsTotal = this.jobSlotsDAO.countByAll();
        systemDataVO.setSlot(new DataItemVO(slotsTotal, 0L));
        return systemDataVO;
    }

    @Override
    public JobChartVO jobChart(JobChartRequest jobChartRequest) {
        if (this.isQueryByDay(jobChartRequest.getBeginTime(), jobChartRequest.getEndTime())) {
            List<GroupCountDTO> successGroup = this.jobInstanceDAO.countByNamespaceGroupByHourTime(
                    jobChartRequest.getNamespaceId(), jobChartRequest.getBeginTime(), jobChartRequest.getEndTime(), InstanceStatusEnum.SUCCESS.getStatus());
            List<GroupCountDTO> failGroup = this.jobInstanceDAO.countByNamespaceGroupByHourTime(
                    jobChartRequest.getNamespaceId(), jobChartRequest.getBeginTime(), jobChartRequest.getEndTime(), InstanceStatusEnum.SUCCESS.getStatus());
        } else {
            List<GroupCountDTO> successGroup = this.jobInstanceDAO.countByNamespaceGroupByDateTime(
                    jobChartRequest.getNamespaceId(), jobChartRequest.getBeginTime(), jobChartRequest.getEndTime(), InstanceStatusEnum.SUCCESS.getStatus());
            List<GroupCountDTO> failGroup = this.jobInstanceDAO.countByNamespaceGroupByDateTime(
                    jobChartRequest.getNamespaceId(), jobChartRequest.getBeginTime(), jobChartRequest.getEndTime(), InstanceStatusEnum.SUCCESS.getStatus());
        }
        return null;
    }


    @Override
    public DelayChartVO delayChart(DelayChartRequest DelayChartRequest) {
        return null;
    }

    private Boolean isQueryByDay(Long beginTime, Long endTime) {
        return (endTime - beginTime) % TimeUnit.DAYS.toSeconds(1) >= 3;
    }
}
