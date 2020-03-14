package com.gec.gmall.manage.controller;

import com.alibaba.dubbo.config.annotation.Reference;
import com.gec.gmall.manage.bean.PmsProductImage;
import com.gec.gmall.manage.bean.PmsProductInfo;
import com.gec.gmall.manage.bean.PmsProductSaleAttr;
import com.gec.gmall.manage.bean.PmsSkuInfo;
import com.gec.gmall.manage.service.SpuService;
import com.gec.gmall.manage.utils.PmsUploadUtil;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@CrossOrigin
public class SpuController {

    @Reference
    private SpuService spuService;

    @RequestMapping("/spuList")
    public List<PmsProductInfo> spuList(String catalog3Id) {
        return spuService.spuList(catalog3Id);
    }

    @RequestMapping("/saveSpuInfo")
    public String saveSpuInfo(@RequestBody PmsProductInfo pmsProductInfo) {
        return spuService.saveSpuInfo(pmsProductInfo);
    }

    @RequestMapping("/fileUpload")
    public String fileUpload(@RequestParam("file") MultipartFile multipartFile){
        System.out.println(PmsUploadUtil.uploadImage(multipartFile));
        return PmsUploadUtil.uploadImage(multipartFile);
    }

    @RequestMapping("/spuImageList")
    public List<PmsProductImage> spuImageList(String spuId)
    {
        return spuService.spuImageList(spuId);
    }

    @RequestMapping("/spuSaleAttrList")
    public List<PmsProductSaleAttr> spuSaleAttrList(String spuId)
    {
        return spuService.spuSaleAttrList(spuId);
    }



}
