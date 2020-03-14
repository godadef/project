package com.gec.gmall.manage.service.impl;

import com.gec.gmall.manage.bean.PmsBaseCatalog1;
import com.gec.gmall.manage.bean.PmsBaseCatalog2;
import com.gec.gmall.manage.dao.PmsBaseCatalog1Mapper;
import com.gec.gmall.manage.dao.PmsBaseCatalog2Mapper;
import com.gec.gmall.manage.service.PmsBaseCatalog1Service;
import com.gec.gmall.manage.service.PmsBaseCatalog2Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@com.alibaba.dubbo.config.annotation.Service
public class PmsBaseCatalog2ServiceImpl implements PmsBaseCatalog2Service {

    @Autowired
    private PmsBaseCatalog2Mapper pmsBaseCatalog2Mapper;

    @Override
    public List<PmsBaseCatalog2> getPmsBaseCatalog2ByPmsCatalog1Id(String catalog1Id) {
        PmsBaseCatalog2 pmsBaseCatalog2 = new PmsBaseCatalog2();
        pmsBaseCatalog2.setCatalog1Id(catalog1Id);
        return pmsBaseCatalog2Mapper.select(pmsBaseCatalog2);
    }
}
