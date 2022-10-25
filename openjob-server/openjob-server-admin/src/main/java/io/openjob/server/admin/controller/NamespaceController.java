package io.openjob.server.admin.controller;

import io.openjob.common.response.Result;
import io.openjob.server.admin.request.AddNamespaceRequest;
import io.openjob.server.admin.request.ListNamespaceRequest;
import io.openjob.server.admin.request.UpdateNamespaceRequest;
import io.openjob.server.admin.vo.AddNamespaceVO;
import io.openjob.server.admin.vo.ListNamespaceVO;
import io.openjob.server.admin.vo.UpdateNamespaceVO;
import io.openjob.server.admin.service.NamespaceService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

/**
 * @author stelin <swoft@qq.com>
 * @since 1.0.0
 */
@Api(value = "namespace", tags = "namespace")
@RestController
@RequestMapping("/admin/namespace")
public class NamespaceController {
    private final NamespaceService namespaceService;

    @Autowired
    public NamespaceController(NamespaceService namespaceService) {
        this.namespaceService = namespaceService;
    }

    @PostMapping("/add")
    public Result<AddNamespaceVO> add(@Valid @RequestBody AddNamespaceRequest addRequest) {
        return Result.success(this.namespaceService.add(addRequest));
    }

    @PostMapping("/update")
    public Result<UpdateNamespaceVO> update(@Valid @RequestBody UpdateNamespaceRequest updateRequest) {
        return Result.success(this.namespaceService.update(updateRequest));
    }

    @PostMapping("/list")
    public Result<ListNamespaceVO> list(@Valid @RequestBody ListNamespaceRequest listRequest) {
        return Result.success(this.namespaceService.list(listRequest));
    }
}