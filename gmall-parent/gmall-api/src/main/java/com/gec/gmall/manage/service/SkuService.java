package com.gec.gmall.manage.service;

import com.gec.gmall.manage.bean.PmsSkuInfo;

public interface SkuService {
    public String saveSkuInfo(PmsSkuInfo pmsSkuInfo);

    public PmsSkuInfo getSkuInfoById(String skuId);
}
