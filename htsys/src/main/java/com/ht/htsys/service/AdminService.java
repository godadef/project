package com.ht.htsys.service;

import com.ht.htsys.pojo.Admin;

import java.util.List;
import java.util.Map;

public interface AdminService {
    String insertSelective(Admin record);

    List<Admin> selectAllAdmin();

    List<Admin> selectByAdmin(Admin admin);

    String deleteByPrimaryKey(Integer id);

    Admin selectByPrimaryKey(String id);

    String updateByPrimaryKeySelective(Admin record);

    String login(Admin admin);

    int countAdminByMap(Map map);

    List<Admin> getOnePageInfo(Map map);

    Admin selectAdminByAdmin(Admin admin);
}
