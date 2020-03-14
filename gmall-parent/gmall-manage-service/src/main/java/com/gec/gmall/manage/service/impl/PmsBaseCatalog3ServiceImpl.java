package com.gec.gmall.manage.service.impl;

import com.gec.gmall.manage.bean.PmsBaseCatalog2;
import com.gec.gmall.manage.bean.PmsBaseCatalog3;
import com.gec.gmall.manage.dao.PmsBaseCatalog3Mapper;
import com.gec.gmall.manage.service.PmsBaseCatalog3Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@com.alibaba.dubbo.config.annotation.Service
public class PmsBaseCatalog3ServiceImpl implements PmsBaseCatalog3Service {

    @Autowired
    private PmsBaseCatalog3Mapper pmsBaseCatalog3Mapper;

    @Override
    public List<PmsBaseCatalog3> getPmsBaseCatalog3ByPmsCatalog2Id(String catalog2Id) {
        PmsBaseCatalog3 pmsBaseCatalog3 = new PmsBaseCatalog3();
        pmsBaseCatalog3.setCatalog2Id(catalog2Id);
        return pmsBaseCatalog3Mapper.select(pmsBaseCatalog3);
    }
}
