package io.openjob.server.admin.request.notify;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.util.List;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

/**
 * @author inhere
 * @date 2022-11-15 14:19:58
 * @since 1.0.0
 */
@Data
@ApiModel(value = "NotifyGroupListRequest", description = "NotifyGroup page list request")
public class NotifyGroupListRequest {

    @ApiModelProperty(value = "List page.")
    private Integer page = 1;

    @ApiModelProperty(value = "List size. default 10")
    private Integer size = 10;

}

