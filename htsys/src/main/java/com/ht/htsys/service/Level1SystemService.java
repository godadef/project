package com.ht.htsys.service;

import com.ht.htsys.pojo.Level1System;

import java.util.List;
import java.util.Map;

public interface Level1SystemService {
    List<Level1System> selectAllLevel1System();

    int countHtByMap(Map map);

    List<Level1System> getOnePageInfo(Map map);
}
