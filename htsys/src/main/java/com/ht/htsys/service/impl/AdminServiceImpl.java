package com.ht.htsys.service.impl;

import com.ht.htsys.dao.AdminMapper;
import com.ht.htsys.pojo.Admin;
import com.ht.htsys.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Map;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminMapper adminMapper;

    @Override
    public String insertSelective(Admin record) {
        int count = adminMapper.countAdminByLoginId(record.getLoginId());
        if(count>0){
            return "error1";//账号已存在错误
        }else {
            record.setCreateTime(new Date());
            int flag = adminMapper.insertSelective(record);
            if(flag>0){
                return "success";
            }
        }
        return "error2";//其他错误
    }

    @Override
    public List<Admin> selectAllAdmin() {
        return adminMapper.selectAllAdmin();
    }

    @Override
    public List<Admin> selectByAdmin(Admin admin) {
        return adminMapper.selectByAdmin(admin);
    }

    @Override
    public String deleteByPrimaryKey(Integer id) {
        if(adminMapper.deleteByPrimaryKey(id)==1){
            return "success";
        }else {
            return "error";
        }
    }

    @Override
    public Admin selectByPrimaryKey(String id) {
        return adminMapper.selectByPrimaryKey(id);
    }

    @Override
    public String updateByPrimaryKeySelective(Admin record) {
        if(adminMapper.updateByPrimaryKeySelective(record)==1){
            return "success";
        }else {
            return "error";
        }
    }

    @Override
    public String login(Admin admin) {
        if(adminMapper.countAdmin(admin)==1){
            return "success";
        }else {
            return "error";
        }
    }

    @Override
    public int countAdminByMap(Map map) {
        return adminMapper.countAdminByMap(map);
    }

    @Override
    public List<Admin> getOnePageInfo(Map map) {
        return adminMapper.getOnePageInfo(map);
    }

    @Override
    public Admin selectAdminByAdmin(Admin admin) {
        return adminMapper.selectAdminByAdmin(admin);
    }
}
