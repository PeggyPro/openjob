package io.openjob.server.cluster.message;

import lombok.Data;

import java.io.Serializable;

/**
 * @author stelin <swoft@qq.com>
 * @since 1.0.0
 */
@Data
public class Join implements Serializable {
    private Long serverId;
    private String ip;
    private String akkaAddress;
}
