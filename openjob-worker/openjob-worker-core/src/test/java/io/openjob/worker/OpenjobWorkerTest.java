package io.openjob.worker;

import org.junit.jupiter.api.Test;

/**
 * @author stelin <swoft@qq.com>
 * @since 1.0.0
 */
public class OpenjobWorkerTest {
    @Test
    public void testStart() {
        OpenjobWorker openjobWorker = new OpenjobWorker();
        openjobWorker.init();
    }
}