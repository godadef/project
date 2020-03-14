package com.ht.htsys.service.impl;

import com.ht.htsys.dao.UserMapper;
import com.ht.htsys.pojo.User;
import com.ht.htsys.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;


    @Override
    public List<User> selectByUser(User user) {
        return userMapper.selectByUser(user);
    }

    @Override
    public int countUserByMap(Map map) {
        return userMapper.countUserByMap(map);
    }

    @Override
    public List<User> getOnePageInfo(Map map) {
        return userMapper.getOnePageInfo(map);
    }

    @Override
    public User selectByPrimaryKey(Integer userid) {
        return userMapper.selectByPrimaryKey(userid);
    }
}
