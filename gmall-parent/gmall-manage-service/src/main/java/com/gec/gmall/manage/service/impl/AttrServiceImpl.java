package com.gec.gmall.manage.service.impl;

import com.gec.gmall.manage.bean.PmsBaseAttrInfo;
import com.gec.gmall.manage.bean.PmsBaseAttrValue;
import com.gec.gmall.manage.dao.PmsBaseAttrInfoMapper;
import com.gec.gmall.manage.dao.PmsBaseAttrValueMapper;
import com.gec.gmall.manage.service.AttrService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tk.mybatis.mapper.entity.Example;

import java.util.ArrayList;
import java.util.List;


@Service
@com.alibaba.dubbo.config.annotation.Service
public class AttrServiceImpl implements AttrService {
    @Autowired
    private PmsBaseAttrInfoMapper pmsBaseAttrInfoMapper;
    @Autowired
    private PmsBaseAttrValueMapper pmsBaseAttrValueMapper;

    @Override
    public List<PmsBaseAttrInfo> attrInfoListByCatalog3Id(String catalog3Id) {
        List<PmsBaseAttrInfo> pmsBaseAttrInfoList=new ArrayList<>();

        //根据商品三级类别id，获取对应的平台属性主表内容
        PmsBaseAttrInfo pmsBaseAttrInfo=new PmsBaseAttrInfo();
        pmsBaseAttrInfo.setCatalog3Id(catalog3Id);

        for (PmsBaseAttrInfo baseAttrInfo : pmsBaseAttrInfoMapper.select(pmsBaseAttrInfo)) {
            //根据平台属性id，获取对应那些属性值
            PmsBaseAttrValue pmsBaseAttrValue=new PmsBaseAttrValue();
            pmsBaseAttrValue.setAttrId(baseAttrInfo.getId());
            List<PmsBaseAttrValue> pmsBaseAttrValueList =pmsBaseAttrValueMapper.select(pmsBaseAttrValue);
            baseAttrInfo.setAttrValueList(pmsBaseAttrValueList);
            pmsBaseAttrInfoList.add(baseAttrInfo);
        }
        return pmsBaseAttrInfoList;
    }



    @Transactional
    @Override
    public String saveAttrInfo(PmsBaseAttrInfo pmsBaseAttrInfo) {
        String id = pmsBaseAttrInfo.getId();
        if(StringUtils.isBlank(id)){
            //保存属性名主表的数据
            pmsBaseAttrInfoMapper.insertSelective(pmsBaseAttrInfo);
            //保存属性名所对应的属性值的数据表
            List<PmsBaseAttrValue> pmsBaseAttrValueList=pmsBaseAttrInfo.getAttrValueList();
            for (PmsBaseAttrValue pmsBaseAttrValue : pmsBaseAttrValueList) {
                pmsBaseAttrValue.setAttrId(pmsBaseAttrInfo.getId());
                pmsBaseAttrValueMapper.insertSelective(pmsBaseAttrValue);
            }
        }else {
            Example example = new Example(PmsBaseAttrInfo.class);
            example.createCriteria().andEqualTo("id",pmsBaseAttrInfo.getId());
            pmsBaseAttrInfoMapper.updateByExampleSelective(pmsBaseAttrInfo,example);

            PmsBaseAttrValue deletePmsBaseAttrValue = new PmsBaseAttrValue();
            deletePmsBaseAttrValue.setAttrId(id);
            pmsBaseAttrValueMapper.delete(deletePmsBaseAttrValue);

            //保存属性名所对应的属性值的数据表
            List<PmsBaseAttrValue> pmsBaseAttrValueList=pmsBaseAttrInfo.getAttrValueList();
            for (PmsBaseAttrValue pmsBaseAttrValue : pmsBaseAttrValueList) {
                pmsBaseAttrValue.setAttrId(id);
                pmsBaseAttrValueMapper.insertSelective(pmsBaseAttrValue);
            }
        }
        return "success";
    }

    @Override
    public List<PmsBaseAttrValue> getAttrValueListByAttrId(String attrId) {
        //select * from pms_base_attr_value where attr_id=attrId;
        PmsBaseAttrValue pmsBaseAttrValue=new PmsBaseAttrValue();
        pmsBaseAttrValue.setAttrId(attrId);
        return pmsBaseAttrValueMapper.select(pmsBaseAttrValue);
    }
}
