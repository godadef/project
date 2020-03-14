package com.gec.gmall.manage.service.impl;

import com.gec.gmall.manage.bean.PmsBaseCatalog1;
import com.gec.gmall.manage.dao.PmsBaseCatalog1Mapper;
import com.gec.gmall.manage.service.PmsBaseCatalog1Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@com.alibaba.dubbo.config.annotation.Service
public class PmsBaseCatalog1ServiceImpl implements PmsBaseCatalog1Service {

    @Autowired
    private PmsBaseCatalog1Mapper pmsBaseCatalog1Mapper;

    @Override
    public List<PmsBaseCatalog1> getAllPmsBaseCatalog1() {
        return pmsBaseCatalog1Mapper.selectAll();
    }
}
