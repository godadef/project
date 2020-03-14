package com.gec.gmall.manage.service.impl;

import com.gec.gmall.manage.bean.PmsSkuAttrValue;
import com.gec.gmall.manage.bean.PmsSkuImage;
import com.gec.gmall.manage.bean.PmsSkuInfo;
import com.gec.gmall.manage.bean.PmsSkuSaleAttrValue;
import com.gec.gmall.manage.dao.PmsSkuAttrValueMapper;
import com.gec.gmall.manage.dao.PmsSkuImageMapper;
import com.gec.gmall.manage.dao.PmsSkuInfoMapper;
import com.gec.gmall.manage.dao.PmsSkuSaleAttrValueMapper;
import com.gec.gmall.manage.service.SkuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@com.alibaba.dubbo.config.annotation.Service
public class SkuServiceImpl implements SkuService {
    @Autowired
    private PmsSkuInfoMapper pmsSkuInfoMapper;
    @Autowired
    private PmsSkuAttrValueMapper pmsSkuAttrValueMapper;
    @Autowired
    private PmsSkuSaleAttrValueMapper pmsSkuSaleAttrValueMapper;
    @Autowired
    private PmsSkuImageMapper pmsSkuImageMapper;

    @Transactional
    @Override
    public String saveSkuInfo(PmsSkuInfo pmsSkuInfo) {
        //sku主表数据的保存
        pmsSkuInfoMapper.insertSelective(pmsSkuInfo);
        //sku对应配置平台属性值表的保存
        for (PmsSkuAttrValue pmsSkuAttrValue : pmsSkuInfo.getSkuAttrValueList()) {
            //关联sku的id外键
            pmsSkuAttrValue.setSkuId(pmsSkuInfo.getId());
            pmsSkuAttrValueMapper.insertSelective(pmsSkuAttrValue);
        }
        //sku对应配置销售属性值表的保存
        for (PmsSkuSaleAttrValue pmsSkuSaleAttrValue : pmsSkuInfo.getSkuSaleAttrValueList()) {
            pmsSkuSaleAttrValue.setSkuId(pmsSkuInfo.getId());
            pmsSkuSaleAttrValueMapper.insertSelective(pmsSkuSaleAttrValue);
        }
        //sku对应图片表的数据保存
        for (PmsSkuImage pmsSkuImage : pmsSkuInfo.getSkuImageList()) {
            pmsSkuImage.setSkuId(pmsSkuInfo.getId());
            pmsSkuImageMapper.insertSelective(pmsSkuImage);
        }
        return "success";
    }

    @Override
    public PmsSkuInfo getSkuInfoById(String skuId) {
        PmsSkuInfo inPmsSkuInfo=new PmsSkuInfo();
        inPmsSkuInfo.setId(skuId);
        PmsSkuInfo pmsSkuInfo=pmsSkuInfoMapper.selectOne(inPmsSkuInfo);
        //获取sku对应的图片列表
        PmsSkuImage pmsSkuImage=new PmsSkuImage();
        pmsSkuImage.setSkuId(skuId);
        pmsSkuInfo.setSkuImageList(pmsSkuImageMapper.select(pmsSkuImage));
        return pmsSkuInfo;

    }
}

