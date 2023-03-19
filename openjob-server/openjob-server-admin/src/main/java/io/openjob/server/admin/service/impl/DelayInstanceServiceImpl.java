package io.openjob.server.admin.service.impl;

import io.openjob.common.constant.CommonConstant;
import io.openjob.server.admin.request.delay.DeleteDelayInstanceRequest;
import io.openjob.server.admin.request.delay.ListDelayInstanceRequest;
import io.openjob.server.admin.request.delay.StopDelayInstanceRequest;
import io.openjob.server.admin.service.DelayInstanceService;
import io.openjob.server.admin.vo.delay.DeleteDelayInstanceVO;
import io.openjob.server.admin.vo.delay.ListDelayInstanceVO;
import io.openjob.server.admin.vo.delay.StopDelayInstanceVO;
import io.openjob.server.common.dto.PageDTO;
import io.openjob.server.common.util.BeanMapperUtil;
import io.openjob.server.common.util.PageUtil;
import io.openjob.server.common.vo.PageVO;
import io.openjob.server.repository.dao.AppDAO;
import io.openjob.server.repository.dao.DelayInstanceDAO;
import io.openjob.server.repository.dto.DelayInstancePageDTO;
import io.openjob.server.repository.entity.App;
import io.openjob.server.repository.entity.DelayInstance;
import io.openjob.server.scheduler.dto.DelayInstanceDeleteRequestDTO;
import io.openjob.server.scheduler.dto.DelayInstanceStopRequestDTO;
import io.openjob.server.scheduler.scheduler.DelayInstanceScheduler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

/**
 * @author stelin <swoft@qq.com>
 * @since 1.0.0
 */
@Service
public class DelayInstanceServiceImpl implements DelayInstanceService {
    private final AppDAO appDAO;
    private final DelayInstanceDAO delayInstanceDAO;
    private final DelayInstanceScheduler delayInstanceScheduler;

    @Autowired
    public DelayInstanceServiceImpl(AppDAO appDAO, DelayInstanceDAO delayInstanceDAO, DelayInstanceScheduler delayInstanceScheduler) {
        this.appDAO = appDAO;
        this.delayInstanceDAO = delayInstanceDAO;
        this.delayInstanceScheduler = delayInstanceScheduler;
    }

    @Override
    public PageVO<ListDelayInstanceVO> pageList(ListDelayInstanceRequest request) {
        DelayInstancePageDTO delayInstancePageDTO = BeanMapperUtil.map(request, DelayInstancePageDTO.class);
        PageDTO<DelayInstance> pageDTO = this.delayInstanceDAO.pageList(delayInstancePageDTO);

        // App list.
        List<Long> appIds = pageDTO.getList().stream()
                .map(DelayInstance::getAppId).distinct().collect(Collectors.toList());
        Map<Long, App> appMap = this.appDAO.getByIds(appIds).stream()
                .collect(Collectors.toMap(App::getId, a -> a));


        return PageUtil.convert(pageDTO, ds -> {
            ListDelayInstanceVO listDelayInstanceVO = BeanMapperUtil.map(ds, ListDelayInstanceVO.class);
            App app = appMap.get(ds.getAppId());
            if (Objects.nonNull(app)){
                listDelayInstanceVO.setAppName(app.getName());
            }
            return listDelayInstanceVO;
        });
    }

    @Override
    public DeleteDelayInstanceVO delete(DeleteDelayInstanceRequest request) {
        DelayInstanceDeleteRequestDTO delayInstanceDeleteRequestDTO = new DelayInstanceDeleteRequestDTO();
        delayInstanceDeleteRequestDTO.setTaskId(request.getTaskId());
        this.delayInstanceScheduler.delete(delayInstanceDeleteRequestDTO);

        // Update deleted
        this.delayInstanceDAO.updateDeleted(request.getTaskId(), CommonConstant.YES);
        return new DeleteDelayInstanceVO();
    }

    @Override
    public StopDelayInstanceVO stop(StopDelayInstanceRequest request) {
        DelayInstanceStopRequestDTO delayInstanceStopRequestDTO = new DelayInstanceStopRequestDTO();
        delayInstanceStopRequestDTO.setTaskId(request.getTaskId());
        this.delayInstanceScheduler.stop(delayInstanceStopRequestDTO);

        // Update status
        return new StopDelayInstanceVO();
    }
}
