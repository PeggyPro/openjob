package io.openjob.worker.delay;

import io.openjob.common.response.ServerHeartbeatSystemResponse;
import io.openjob.worker.init.WorkerConfig;
import lombok.extern.slf4j.Slf4j;

import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicLong;

/**
 * @author stelin swoft@qq.com
 * @since 1.0.0
 */
@Slf4j
public class DelayManager {

    /**
     * Delay task master.
     */
    private final DelayTaskMaster delayTaskMaster;

    /**
     * Delay version.
     */
    private final AtomicLong delayVersion = new AtomicLong(0);

    /**
     * Initialize status
     */
    private final AtomicBoolean isInit = new AtomicBoolean(false);

    /**
     * Delay starter.
     */
    public DelayManager() {
        this.delayTaskMaster = new DelayTaskMaster();
    }

    /**
     * Init
     */
    public void init() {
        // Already initialized
        if (this.isInit.get()) {
            return;
        }

        if (WorkerConfig.getDelayEnable()) {
            this.delayTaskMaster.init();

            // Delay task manager.
            DelayTaskManager.INSTANCE.init();
        }

        // Initialized
        this.isInit.set(true);
    }

    /**
     * Refresh
     */
    public void refresh(ServerHeartbeatSystemResponse systemResponse) {
        // Ignore version for refresh.
        if (this.delayVersion.get() >= systemResponse.getClusterDelayVersion()) {
            return;
        }

        // Refresh delay task master.
        this.delayTaskMaster.refresh();

        // Refresh delay task container pool for config.

        // Update delay version.
        this.delayVersion.set(systemResponse.getClusterDelayVersion());
        log.info("Delay refresh success!{}", systemResponse);
    }

    /**
     * Stop
     */
    public void stop() {
        if (!WorkerConfig.getDelayEnable()) {
            return;
        }

        // Stop  delay master.
        this.delayTaskMaster.stop();

        // Stop task container.
        DelayTaskContainerPool.stop();

        // Delay task manager.
        DelayTaskManager.INSTANCE.stop();
    }
}
