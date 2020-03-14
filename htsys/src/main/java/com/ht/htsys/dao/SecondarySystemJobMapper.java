package com.ht.htsys.dao;

import com.ht.htsys.pojo.SecondarySystemJob;

import java.util.List;
import java.util.Map;

public interface SecondarySystemJobMapper {

    List<SecondarySystemJob> selectjobByLevel1SystemIdAndtypeId(Map dataMap);
}
