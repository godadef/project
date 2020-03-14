package com.ht.htsys.service;

import com.ht.htsys.pojo.User;

import java.util.List;
import java.util.Map;

public interface UserService {
    List<User> selectByUser(User user);

    int countUserByMap(Map map);

    List<User> getOnePageInfo(Map map);

    User selectByPrimaryKey(Integer userid);

}
