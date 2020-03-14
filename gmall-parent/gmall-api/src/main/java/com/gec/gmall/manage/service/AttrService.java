package com.gec.gmall.manage.service;

import com.gec.gmall.manage.bean.PmsBaseAttrInfo;
import com.gec.gmall.manage.bean.PmsBaseAttrValue;

import java.util.List;

public interface AttrService {

    //根据所选中的三级类别ID，获取对应的平台属性列表
    public List<PmsBaseAttrInfo> attrInfoListByCatalog3Id(String catalog3Id);

    // 实现属性平台保存
    //a、保存属性名主表内容
    //b、保存属性名所对应的属性值表内容
    public String saveAttrInfo(PmsBaseAttrInfo pmsBaseAttrInfo);

    //根据attr的id，获取属性平台所对应的数据值
    public List<PmsBaseAttrValue> getAttrValueListByAttrId(String attrId);


}
