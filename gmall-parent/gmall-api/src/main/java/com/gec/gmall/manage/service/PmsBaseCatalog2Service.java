package com.gec.gmall.manage.service;

import com.gec.gmall.manage.bean.PmsBaseCatalog2;

import java.util.List;

public interface PmsBaseCatalog2Service {
    //查询所有一级产品
    List<PmsBaseCatalog2> getPmsBaseCatalog2ByPmsCatalog1Id(String catalog1Id);
}
