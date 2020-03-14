package com.ht.htsys.service;

import com.ht.htsys.pojo.Level1System;
import com.ht.htsys.pojo.SecondarySystem;
import com.ht.htsys.pojo.WorkPlan;

import java.util.List;
import java.util.Map;

public interface HtService {
    List<WorkPlan> selectWorkPlanByLevel1Id(String level1SystemId);

    Level1System selectByPrimaryKey(String level1SystemId);

    List<SecondarySystem> selectSys2ByLevel1SystemId(String level1SystemId);

    Map selectSystem2jobByLevel1SystemId(String level1SystemId);
}
