package io.openjob.server.repository.entity;

import com.vladmihalcea.hibernate.type.json.JsonType;
import lombok.Data;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Job admin rules
 *
 * @author inhere
 * @date 2022-11-07
 */
@Data
@Entity
@Table(name = "admin_rule")
@TypeDef(name = "json", typeClass = JsonType.class)
public class AdminRule {

    /**
     * PK
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * Rule name
     */
    @Column(name = "name")
    private String name;

    /**
     * Description
     */
    @Column(name = "desc")
    private String desc;

    /**
     * Menu ids for rule. JSON array
     */
    @Type(type = "json")
    @Column(name = "menus", columnDefinition = "json")
    private List<Long> menus;

    /**
     * Menu ids for rule. JSON array
     */
    @Type(type = "json")
    @Column(name = "perms", columnDefinition = "json")
    private List<Long> perms;

    /**
     * Is Admin. 1=yes 2=no
     */
    @Column(name = "admin")
    private Integer admin;

    /**
     * Delete status. 1=yes 2=no
     */
    @Column(name = "deleted")
    private Integer deleted;

    /**
     * Delete time
     */
    @Column(name = "delete_time")
    private Integer deleteTime;

    /**
     * Update time
     */
    @Column(name = "update_time")
    private Integer updateTime;

    /**
     * Create time
     */
    @Column(name = "create_time")
    private Integer createTime;
}
