package com.gec.gmall.manage.controller;

import com.alibaba.dubbo.config.annotation.Reference;
import com.gec.gmall.manage.bean.PmsBaseSaleAttr;
import com.gec.gmall.manage.service.BaseSaleAttrService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class BaseSaleAttrController {
    @Reference
    private BaseSaleAttrService baseSaleAttrService;

    @RequestMapping("/baseSaleAttrList")
    public List<PmsBaseSaleAttr> baseSaleAttrList() {
        return baseSaleAttrService.baseSaleAttrList();
    }
}
