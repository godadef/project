package com.gec.gmall.item.controller;

import com.alibaba.dubbo.config.annotation.Reference;
import com.alibaba.fastjson.JSON;
import com.gec.gmall.manage.bean.PmsSkuInfo;
import com.gec.gmall.manage.bean.PmsSkuSaleAttrValue;
import com.gec.gmall.manage.service.SkuService;
import com.gec.gmall.manage.service.SpuService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.HashMap;
import java.util.List;

@Controller
public class ItemController {

    @Reference
    private SkuService skuService;
    @Reference
    private SpuService spuService;

    //http://xxxx:8084/117.html
    //http://xxxx:8084/118.html
    @RequestMapping("{skuId}.html")
    public String item(@PathVariable String skuId,Model model)
    {
        System.out.println("skuId="+skuId);
        PmsSkuInfo pmsSkuInfo=skuService.getSkuInfoById(skuId);
        model.addAttribute("skuInfo",pmsSkuInfo);
        //spuSaleAttrListCheckBySku
        //model.addAttribute("spuSaleAttrListCheckBySku",spuService.spuSaleAttrListCheckBySku(skuId));

        model.addAttribute("spuSaleAttrListCheckBySku",spuService.spuSaleAttrListCheckBySkuBySql(pmsSkuInfo.getSpuId(),skuId));

        //定义一个HashMap的对象
        HashMap<String,String> skuSaleAttrMap=new HashMap<>();
        List<PmsSkuInfo> pmsSkuInfoList=spuService.selectSkuSaleAttrValueListBySpuId(pmsSkuInfo.getSpuId());
        System.out.println("pmsSkuInfoList="+pmsSkuInfoList);
        // 生成：[{"240|245|":"108","239|243|":"106","239|244|":"107"}]格式
        for (PmsSkuInfo skuInfo : pmsSkuInfoList) {
            String k="";
            String v="";
            //sku对应的销售属性值ID，作为key:240|245|
            for (PmsSkuSaleAttrValue pmsSkuSaleAttrValue : skuInfo.getSkuSaleAttrValueList()) {
                k+=pmsSkuSaleAttrValue.getSaleAttrValueId()+"|";
            }
            v=skuInfo.getId();
            skuSaleAttrMap.put(k,v);
        }
        System.out.println(skuSaleAttrMap);
        //将skuSaleAttrMap对象转换成json的数据格式
        String skuSaleAttrHashJsonStr= JSON.toJSONString(skuSaleAttrMap);
        System.out.println("skuSaleAttrHashJsonStr="+skuSaleAttrHashJsonStr);
        model.addAttribute("skuSaleAttrHashJsonStr",skuSaleAttrHashJsonStr);

        return "item";
    }

}
