package com.gec.gmall.manage.service;

import com.gec.gmall.manage.bean.PmsProductImage;
import com.gec.gmall.manage.bean.PmsProductInfo;
import com.gec.gmall.manage.bean.PmsProductSaleAttr;
import com.gec.gmall.manage.bean.PmsSkuInfo;

import java.util.List;

public interface SpuService {
    public List<PmsProductInfo> spuList(String catalog3Id);

    public String saveSpuInfo(PmsProductInfo pmsProductInfo);

    public List<PmsProductSaleAttr> spuSaleAttrList(String spuId);

    public List<PmsProductImage> spuImageList(String spuId);

    public List<PmsProductSaleAttr> spuSaleAttrListCheckBySku(String skuId);

    public List<PmsProductSaleAttr> spuSaleAttrListCheckBySkuBySql(String spuId,String skuId);

    public List<PmsSkuInfo> selectSkuSaleAttrValueListBySpuId(String spuId);
}
