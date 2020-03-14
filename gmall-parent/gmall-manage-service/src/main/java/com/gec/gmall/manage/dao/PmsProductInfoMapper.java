package com.gec.gmall.manage.dao;

import com.gec.gmall.manage.bean.PmsBaseAttrValue;
import com.gec.gmall.manage.bean.PmsProductInfo;
import com.gec.gmall.manage.bean.PmsProductSaleAttr;
import com.gec.gmall.manage.bean.PmsSkuInfo;
import org.apache.ibatis.annotations.Param;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

public interface PmsProductInfoMapper extends Mapper<PmsProductInfo> {
    public List<PmsProductSaleAttr> spuSaleAttrListCheckBySkuBySql(@Param("productId") String productId, @Param("skuId") String skuId);
    public List<PmsSkuInfo> selectSkuSaleAttrValueListBySpuId(String spuId);
}
