package com.gec.gmall.manage.service.impl;

import com.gec.gmall.manage.bean.*;
import com.gec.gmall.manage.dao.*;
import com.gec.gmall.manage.service.SpuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@com.alibaba.dubbo.config.annotation.Service
public class SpuServiceImpl implements SpuService {
    @Autowired
    private PmsProductInfoMapper pmsProductInfoMapper;

    @Autowired
    private PmsProductSaleAttrMapper pmsProductSaleAttrMapper;

    @Autowired
    private PmsProductSaleAttrValueMapper pmsProductSaleAttrValueMapper;

    @Autowired
    private PmsProductImageMapper pmsProductImageMapper;

    @Autowired
    private PmsSkuInfoMapper pmsSkuInfoMapper;

    @Autowired
    private PmsSkuSaleAttrValueMapper pmsSkuSaleAttrValueMapper;

    @Override
    public List<PmsProductInfo> spuList(String catalog3Id) {
        PmsProductInfo pmsProductInfo = new PmsProductInfo();
        pmsProductInfo.setCatalog3Id(catalog3Id);
        return pmsProductInfoMapper.select(pmsProductInfo);
    }

    @Transactional
    @Override
    public String saveSpuInfo(PmsProductInfo pmsProductInfo) {

        pmsProductInfoMapper.insertSelective(pmsProductInfo);

        //实现spu的图片保存功能
        for (PmsProductImage pmsProductImage : pmsProductInfo.getSpuImageList()) {
            //将spu的主键赋值到productimage的product_id的字段
            pmsProductImage.setProductId(pmsProductInfo.getId());
            pmsProductImageMapper.insertSelective(pmsProductImage);
        }

        for (PmsProductSaleAttr pmsProductSaleAttr : pmsProductInfo.getSpuSaleAttrList()) {
            pmsProductSaleAttr.setProductId(pmsProductInfo.getId());
            pmsProductSaleAttrMapper.insertSelective(pmsProductSaleAttr);

            for (PmsProductSaleAttrValue pmsProductSaleAttrValue : pmsProductSaleAttr.getSpuSaleAttrValueList()) {
                pmsProductSaleAttrValue.setProductId(pmsProductInfo.getId());
                pmsProductSaleAttrValueMapper.insertSelective(pmsProductSaleAttrValue);
            }

        }

        return "success";
    }

    //根据spuId，获取对应的spu配置那些销售属性及对应的值
    @Override
    public List<PmsProductSaleAttr> spuSaleAttrList(String spuId) {
        List<PmsProductSaleAttr> pmsProductSaleAttrList=new ArrayList<>();

        //根据spuid，获取对应的销售属性列表
        PmsProductSaleAttr pmsProductSaleAttr=new PmsProductSaleAttr();
        pmsProductSaleAttr.setProductId(spuId);

        for (PmsProductSaleAttr productSaleAttr : pmsProductSaleAttrMapper.select(pmsProductSaleAttr)) {
            //根据spuId和销售属性ID，获取对应的销售属性值列表
            PmsProductSaleAttrValue pmsProductSaleAttrValue=new PmsProductSaleAttrValue();
            pmsProductSaleAttrValue.setProductId(spuId);
            pmsProductSaleAttrValue.setSaleAttrId(productSaleAttr.getSaleAttrId());
            productSaleAttr.setSpuSaleAttrValueList(pmsProductSaleAttrValueMapper.select(pmsProductSaleAttrValue));
            pmsProductSaleAttrList.add(productSaleAttr);
        }
        return pmsProductSaleAttrList;
    }

    @Override
    public List<PmsProductImage> spuImageList(String spuId) {
        PmsProductImage pmsProductImage=new PmsProductImage();
        pmsProductImage.setProductId(spuId);
        return pmsProductImageMapper.select(pmsProductImage);
    }

    @Override
    public List<PmsProductSaleAttr> spuSaleAttrListCheckBySku(String skuId) {
        //根据skuId，获取skuId对应spuId的值
        //select * from pms_sku_info where id=skuId;
        PmsSkuInfo inPmsSkuInfo=new PmsSkuInfo();
        inPmsSkuInfo.setId(skuId);
        //可以获取spuId
        String productId=pmsSkuInfoMapper.selectOne(inPmsSkuInfo).getSpuId();
        //根据spuId，获取对应的销售属性列表
        List<PmsProductSaleAttr> pmsProductSaleAttrList=spuSaleAttrList(productId);
        for (PmsProductSaleAttr pmsProductSaleAttr : pmsProductSaleAttrList) {
            List<PmsProductSaleAttrValue> outPmsProductSaleAttrValueList=new ArrayList<>();
            //spu所对应的销售属性ID
            String spuSaleAttrId=pmsProductSaleAttr.getSaleAttrId();
            for (PmsProductSaleAttrValue pmsProductSaleAttrValue : pmsProductSaleAttr.getSpuSaleAttrValueList()) {
                PmsSkuSaleAttrValue pmsSkuSaleAttrValue=new PmsSkuSaleAttrValue();
                pmsSkuSaleAttrValue.setSkuId(skuId);
                pmsSkuSaleAttrValue.setSaleAttrId(spuSaleAttrId);
                pmsSkuSaleAttrValue.setSaleAttrValueId(pmsProductSaleAttrValue.getId());
                //select * from pms_sku_sale_attr_value where sku_id=xxx and sale_attr_id=xxx and sale_attr_value_id=xxx
                List<PmsSkuSaleAttrValue> pmsSkuSaleAttrValueList=pmsSkuSaleAttrValueMapper.select(pmsSkuSaleAttrValue);
                //判断sku是否选中spu的销售属性值，如果选中，则pmsSkuSaleAttrValueList的集合个数肯定>0，为此对isChecked赋值为1，否则赋值为0
                if(pmsSkuSaleAttrValueList!=null && pmsSkuSaleAttrValueList.size()>0)
                {
                    pmsProductSaleAttrValue.setIsChecked("1");
                }else {
                    pmsProductSaleAttrValue.setIsChecked("0");
                }
                outPmsProductSaleAttrValueList.add(pmsProductSaleAttrValue);
            }
            pmsProductSaleAttr.setSpuSaleAttrValueList(outPmsProductSaleAttrValueList);
        }
        return pmsProductSaleAttrList;
    }

    @Override
    public List<PmsProductSaleAttr> spuSaleAttrListCheckBySkuBySql(String spuId, String skuId) {
        List<PmsProductSaleAttr> pmsProductSaleAttrList=pmsProductInfoMapper.spuSaleAttrListCheckBySkuBySql(spuId,skuId);
        return pmsProductSaleAttrList;
    }

    @Override
    public List<PmsSkuInfo>
    selectSkuSaleAttrValueListBySpuId(String spuId) {
        return pmsProductInfoMapper.selectSkuSaleAttrValueListBySpuId(spuId);
    }


}
