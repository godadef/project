package com.ht.htsys.dao;

import com.ht.htsys.pojo.User;

import java.util.List;
import java.util.Map;

public interface UserMapper {
    int deleteByPrimaryKey(Integer userid);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(Integer userid);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);

    List<User> selectByUser(User user);

    int countUserByMap(Map map);

    List<User> getOnePageInfo(Map map);
}