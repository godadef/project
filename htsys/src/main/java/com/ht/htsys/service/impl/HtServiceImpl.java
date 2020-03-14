package com.ht.htsys.service.impl;

import com.ht.htsys.dao.Level1SystemMapper;
import com.ht.htsys.dao.SecondarySystemJobMapper;
import com.ht.htsys.dao.SecondarySystemMapper;
import com.ht.htsys.dao.WorkPlanMapper;
import com.ht.htsys.pojo.Level1System;
import com.ht.htsys.pojo.SecondarySystem;
import com.ht.htsys.pojo.SecondarySystemJob;
import com.ht.htsys.pojo.WorkPlan;
import com.ht.htsys.service.HtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class HtServiceImpl implements HtService {

    @Autowired
    private WorkPlanMapper workPlanMapper;

    @Autowired
    private Level1SystemMapper level1SystemMapper;

    @Autowired
    private SecondarySystemMapper secondarySystemMapper;

    @Autowired
    private SecondarySystemJobMapper secondarySystemJobMapper;


    @Override
    public List<WorkPlan> selectWorkPlanByLevel1Id(String level1SystemId) {
        return workPlanMapper.selectWorkPlanByLevel1Id(level1SystemId);
    }

    @Override
    public Level1System selectByPrimaryKey(String level1SystemId) {
        return level1SystemMapper.selectByPrimaryKey(level1SystemId);
    }

    @Override
    public List<SecondarySystem> selectSys2ByLevel1SystemId(String level1SystemId) {
        return secondarySystemMapper.selectSys2ByLevel1SystemId(level1SystemId);
    }

    @Override
    public Map selectSystem2jobByLevel1SystemId(String level1SystemId) {
        Map map = new HashMap();
        String[] typeIds = {"1","2","3","41","42","43","44","45"};
        Map dataMap = new HashMap();
        for (String typeId : typeIds) {
            dataMap.put("typeId",typeId);
            dataMap.put("level1SystemId",level1SystemId);
            List<SecondarySystemJob> jobs = secondarySystemJobMapper.selectjobByLevel1SystemIdAndtypeId(dataMap);
            map.put(typeId,jobs);
        }
        return map;
    }
}
