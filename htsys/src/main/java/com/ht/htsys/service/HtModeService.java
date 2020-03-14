package com.ht.htsys.service;

import com.ht.htsys.pojo.HtMode;

import java.util.List;
import java.util.Map;

public interface HtModeService {
    HtMode selectByPrimaryKey(Integer modeid);

    String deleteByPrimaryKey(Integer modeid);

    List<HtMode> selectAllHtMode();

    List<HtMode> selectByHtMode(HtMode htMode);

    String insertSelective(HtMode record);

    String updateByPrimaryKeySelective(HtMode record);

    int countHtModeByMap(Map map);

    List<HtMode> getOnePageInfo(Map map);
}
