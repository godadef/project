package com.gec.gmall.manage.service.impl;

import com.gec.gmall.manage.bean.PmsBaseSaleAttr;
import com.gec.gmall.manage.dao.PmsBaseSaleAttrMapper;
import com.gec.gmall.manage.service.BaseSaleAttrService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@com.alibaba.dubbo.config.annotation.Service
public class BaseSaleAttrServiceImpl implements BaseSaleAttrService {
    @Autowired
    private PmsBaseSaleAttrMapper pmsBaseSaleAttrMapper;

    @Override
    public List<PmsBaseSaleAttr> baseSaleAttrList() {
        return pmsBaseSaleAttrMapper.selectAll();
    }
}
