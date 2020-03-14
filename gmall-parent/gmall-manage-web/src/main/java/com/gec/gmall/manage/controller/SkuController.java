package com.gec.gmall.manage.controller;

import com.alibaba.dubbo.config.annotation.Reference;
import com.gec.gmall.manage.bean.PmsSkuInfo;
import com.gec.gmall.manage.service.SkuService;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class SkuController {

    @Reference
    private SkuService skuService;
    //定义保存sku的请求方法
    @RequestMapping("/saveSkuInfo")
    @ResponseBody
    public String saveSkuInfo(@RequestBody PmsSkuInfo
                                      pmsSkuInfo)
    {
        System.out.println(pmsSkuInfo);
        return skuService.saveSkuInfo(pmsSkuInfo);
    }
}
