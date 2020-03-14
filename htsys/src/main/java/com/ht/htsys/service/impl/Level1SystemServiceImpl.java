package com.ht.htsys.service.impl;

import com.ht.htsys.dao.Level1SystemMapper;
import com.ht.htsys.pojo.Level1System;
import com.ht.htsys.service.Level1SystemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class Level1SystemServiceImpl implements Level1SystemService {
    @Autowired
    private Level1SystemMapper level1SystemMapper;

    @Override
    public List<Level1System> selectAllLevel1System() {
        return level1SystemMapper.selectAllLevel1System();
    }

    @Override
    public int countHtByMap(Map map) {
        return level1SystemMapper.countHtByMap(map);
    }

    @Override
    public List<Level1System> getOnePageInfo(Map map) {
        return level1SystemMapper.getOnePageInfo(map);
    }
}
