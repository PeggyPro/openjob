package io.openjob.server.admin.request.user;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.List;

/**
 * @author inhere
 * @date 2022-11-15 14:16:53
 * @since 1.0.0
 */
@Data
@ApiModel(value = "AdminRuleUpdateRequest", description = "AdminRule update request")
public class AdminRuleUpdateRequest {

    @ApiModelProperty(value = "PK")
    private Long id;

    @ApiModelProperty(value = "Rule name")
    private String name;

    @ApiModelProperty(value = "Description")
    private String desc;

    @ApiModelProperty(value = "Menu ids for rule. JSON array")
    private List<Long> menus;

    @ApiModelProperty(value = "Permissions ids for rule. JSON array")
    private List<Long> perms;

    @ApiModelProperty(value = "Is Admin. 1=yes 2=no")
    private Integer admin;

    @ApiModelProperty(value = "Delete status. 1=yes 2=no")
    private Integer deleted;

    @ApiModelProperty(value = "Delete time")
    private Long deleteTime;

    @ApiModelProperty(value = "Update time")
    private Long updateTime;

    @ApiModelProperty(value = "Create time")
    private Long createTime;
}
