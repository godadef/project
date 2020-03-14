package com.ht.htsys.dao;

import com.ht.htsys.pojo.HtMode;

import java.util.List;
import java.util.Map;

public interface HtModeMapper {
    int deleteByPrimaryKey(Integer modeid);

    int insert(HtMode record);

    int insertSelective(HtMode record);

    HtMode selectByPrimaryKey(Integer modeid);

    int updateByPrimaryKeySelective(HtMode record);

    int updateByPrimaryKey(HtMode record);

    List<HtMode> selectAllHtMode();

    List<HtMode> selectByHtMode(HtMode htMode);

    int countHtModeByMap(Map map);

    List<HtMode> getOnePageInfo(Map map);
}