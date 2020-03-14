package com.ht.htsys.dao;

import com.ht.htsys.pojo.Admin;

import java.util.List;
import java.util.Map;

public interface AdminMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Admin record);

    int insertSelective(Admin record);

    Admin selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(Admin record);

    int updateByPrimaryKey(Admin record);

    List<Admin> selectAllAdmin();

    List<Admin> selectByAdmin(Admin admin);

    int countAdminByLoginId(String loginId);

    int countAdmin(Admin admin);

    int countAdminByMap(Map map);

    List<Admin> getOnePageInfo(Map map);

    Admin selectAdminByAdmin(Admin admin);
}