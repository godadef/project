package com.gec.gmall.manage.service;

import com.gec.gmall.manage.bean.PmsBaseCatalog2;
import com.gec.gmall.manage.bean.PmsBaseCatalog3;

import java.util.List;

public interface PmsBaseCatalog3Service {
    //查询所有一级产品
    List<PmsBaseCatalog3> getPmsBaseCatalog3ByPmsCatalog2Id(String catalog2Id);
}
