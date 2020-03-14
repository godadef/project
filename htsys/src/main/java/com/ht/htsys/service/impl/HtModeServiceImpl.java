package com.ht.htsys.service.impl;

import com.ht.htsys.dao.HtModeMapper;
import com.ht.htsys.pojo.HtMode;
import com.ht.htsys.service.HtModeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class HtModeServiceImpl implements HtModeService {

    @Autowired
    private HtModeMapper htModeMapper;
    @Override
    public HtMode selectByPrimaryKey(Integer modeid) {
        return htModeMapper.selectByPrimaryKey(modeid);
    }

    @Override
    public String deleteByPrimaryKey(Integer modeid) {
        if(htModeMapper.deleteByPrimaryKey(modeid)==1){
            return "success";
        }else {
            return "error";
        }
    }

    @Override
    public List<HtMode> selectAllHtMode() {
        return htModeMapper.selectAllHtMode();
    }

    @Override
    public List<HtMode> selectByHtMode(HtMode htMode) {
        return htModeMapper.selectByHtMode(htMode);
    }

    @Override
    public String insertSelective(HtMode record) {
        if(htModeMapper.insertSelective(record)==1){
            return "success";
        }else {
            return "error";
        }
    }

    @Override
    public String updateByPrimaryKeySelective(HtMode record) {
        if(htModeMapper.updateByPrimaryKeySelective(record)==1){
            return "success";
        }else {
            return "error";
        }
    }

    @Override
    public int countHtModeByMap(Map map) {
        return htModeMapper.countHtModeByMap(map);
    }

    @Override
    public List<HtMode> getOnePageInfo(Map map) {
        return htModeMapper.getOnePageInfo(map);
    }


}
