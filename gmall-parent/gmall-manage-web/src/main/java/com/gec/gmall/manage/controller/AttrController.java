package com.gec.gmall.manage.controller;

import com.alibaba.dubbo.config.annotation.Reference;
import com.gec.gmall.manage.bean.PmsBaseAttrInfo;
import com.gec.gmall.manage.bean.PmsBaseAttrValue;
import com.gec.gmall.manage.service.AttrService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class AttrController {
    @Reference
    private AttrService attrService;

    @RequestMapping("/attrInfoList")
    public List<PmsBaseAttrInfo> attrInfoList(String catalog3Id)
    {
        List<PmsBaseAttrInfo> pmsBaseAttrInfoList=attrService.attrInfoListByCatalog3Id(catalog3Id);
        return pmsBaseAttrInfoList;
    }

    @RequestMapping("/saveAttrInfo")
    public String saveAttrInfo(@RequestBody PmsBaseAttrInfo pmsBaseAttrInfo)
    {
        attrService.saveAttrInfo(pmsBaseAttrInfo);
        return "success";
    }

    @RequestMapping("/getAttrValueList")
    public List<PmsBaseAttrValue> getAttrValueListByAttrId(String attrId){
        return attrService.getAttrValueListByAttrId(attrId);
    }
}
