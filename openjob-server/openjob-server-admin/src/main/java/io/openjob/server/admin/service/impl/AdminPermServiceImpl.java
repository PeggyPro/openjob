package io.openjob.server.admin.service.impl;

import io.openjob.common.constant.CommonConstant;
import io.openjob.common.util.CommonUtil;
import io.openjob.server.admin.request.perm.AdminPermissionMenusRequest;
import io.openjob.server.admin.service.AdminPermService;
import io.openjob.server.admin.vo.part.MenuItemVO;
import io.openjob.server.admin.vo.part.MenuMetaVO;
import io.openjob.server.admin.vo.perm.AdminPermissionMenusVO;
import io.openjob.server.common.util.BeanMapperUtil;
import io.openjob.server.repository.constant.PermissionTypeEnum;
import io.openjob.server.repository.dao.AdminPermissionDAO;
import io.openjob.server.repository.dao.AdminRoleDAO;
import io.openjob.server.repository.dao.AdminUserDAO;
import io.openjob.server.repository.entity.AdminPermission;
import io.openjob.server.repository.entity.AdminRole;
import io.openjob.server.repository.entity.AdminUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.atomic.AtomicBoolean;

/**
 * @author inhere
 * @since 1.0.0
 */
@Service
public class AdminPermServiceImpl implements AdminPermService {

    private final AdminRoleDAO adminRoleDAO;
    private final AdminUserDAO adminUserDAO;
    private final AdminPermissionDAO adminPermissionDAO;


    @Autowired
    public AdminPermServiceImpl(AdminPermissionDAO adminPermissionDAO, AdminRoleDAO adminRoleDAO, AdminUserDAO adminUserDAO) {
        this.adminPermissionDAO = adminPermissionDAO;
        this.adminRoleDAO = adminRoleDAO;
        this.adminUserDAO = adminUserDAO;
    }

    @Override
    public AdminPermissionMenusVO getMenus(AdminPermissionMenusRequest request) {
        AdminUser user = this.adminUserDAO.getById(request.getUid());
        List<AdminRole> roles = this.adminRoleDAO.getByIds(user.getRoleIdsByJson());

        // Menu ids.
        AtomicBoolean isAdmin = new AtomicBoolean(false);
        Set<Long> menuIds = new HashSet<>();
        roles.forEach(r -> {
            if (CommonUtil.isTrue(r.getAdmin())) {
                isAdmin.set(true);
                return;
            }
            menuIds.addAll(r.getMenuIdsByJson());
        });

        //Menu list
        List<AdminPermission> permissionList;
        if (isAdmin.get()) {
            permissionList = this.adminPermissionDAO.getPermissionList(PermissionTypeEnum.MENU);
        } else {
            permissionList = this.adminPermissionDAO.getByIds(new ArrayList<>(menuIds));
        }

        permissionList.sort(Comparator.comparing(AdminPermission::getId));
        List<MenuItemVO> menuItemList = this.formatTreeMenus(permissionList);
        AdminPermissionMenusVO adminPermissionMenusVO = new AdminPermissionMenusVO();
        adminPermissionMenusVO.setList(menuItemList);
        return adminPermissionMenusVO;
    }

    private List<MenuItemVO> formatTreeMenus(List<AdminPermission> dtoList) {
        Map<Long, MenuItemVO> nodeList = new HashMap<>(dtoList.size());
        List<MenuItemVO> menuVos = new ArrayList<>();

        for (AdminPermission dataRecord : dtoList) {
            MenuItemVO node = new MenuItemVO();
            node.setId(dataRecord.getId());
            node.setName(dataRecord.getName());
            node.setPath(dataRecord.getPath());
            node.setComponent(dataRecord.getMetaByJson().getComponent());

            MenuMetaVO menuMetaVO = BeanMapperUtil.map(dataRecord.getMetaByJson(), MenuMetaVO.class);
            menuMetaVO.setIsHide(CommonUtil.isTrue(dataRecord.getHidden()));
            node.setMeta(menuMetaVO);

            // init sub menus
            List<MenuItemVO> temp = new ArrayList<>();
            node.setChildren(temp);

            nodeList.put(node.getId(), node);
        }

        for (AdminPermission dataRecord : dtoList) {
            MenuItemVO vo = nodeList.get(dataRecord.getId());
            if (CommonConstant.LONG_ZERO.equals(dataRecord.getPid())) {
                menuVos.add(vo);
            } else {
                nodeList.get(dataRecord.getPid()).getChildren().add(vo);
            }
        }

        return menuVos;
    }
}

