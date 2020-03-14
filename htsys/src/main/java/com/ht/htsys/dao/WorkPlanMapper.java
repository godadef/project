package com.ht.htsys.dao;

import com.ht.htsys.pojo.WorkPlan;

import java.util.List;

public interface WorkPlanMapper {
    List<WorkPlan> selectWorkPlanByLevel1Id(String level1SystemId);
}
