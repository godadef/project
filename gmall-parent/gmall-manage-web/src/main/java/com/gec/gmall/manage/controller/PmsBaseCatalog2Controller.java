package com.gec.gmall.manage.controller;


import com.alibaba.dubbo.config.annotation.Reference;
import com.gec.gmall.manage.bean.PmsBaseCatalog2;
import com.gec.gmall.manage.service.PmsBaseCatalog2Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class PmsBaseCatalog2Controller {

    @Reference
    private PmsBaseCatalog2Service pmsBaseCatalog2Service;

    @RequestMapping("/getCatalog2")
    public List<PmsBaseCatalog2> getCatalog1(String catalog1Id){
        return pmsBaseCatalog2Service.getPmsBaseCatalog2ByPmsCatalog1Id(catalog1Id);
    }
}
