package com.ht.htsys.dao;

import com.ht.htsys.pojo.Level1System;

import java.util.List;
import java.util.Map;

public interface Level1SystemMapper {
    List<Level1System> selectAllLevel1System();

    int countHtByMap(Map map);

    List<Level1System> getOnePageInfo(Map map);

    Level1System selectByPrimaryKey(String level1SystemId);
}
