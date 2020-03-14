package com.gec.gmall.user.controller;

import com.alibaba.dubbo.config.annotation.Reference;
import com.gec.gmall.user.bean.UmsMember;
import com.gec.gmall.user.service.UmsMemberService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UmsmemberCotnroller {

    @Reference
    private UmsMemberService umsMemberService;

    @RequestMapping("/getUmsMemberAllList")
    public List<UmsMember> getUmsMemberAllList()
    {
        return umsMemberService.getAllUmsMember();
    }

    @RequestMapping("/insertUmsMember")
    public int insertUmsMember()
    {
        UmsMember umsMember = new UmsMember();
        umsMember.setUsername("momo");
        umsMember.setPassword("111111");
        return umsMemberService.insertUmsMember(umsMember);
    }

    @RequestMapping("/getUmsMember")
    public UmsMember getUmsMember()
    {
        UmsMember umsMember = new UmsMember();
        umsMember.setUsername("momo");
        return umsMemberService.getUmsMember(umsMember);
    }

    @RequestMapping("/updateUmsMember")
    public int updateUmsMember()
    {
        UmsMember umsMember = new UmsMember();
        umsMember.setId("12");
        umsMember.setPassword("222222");
        return umsMemberService.updateUmsMember(umsMember);
    }

    @RequestMapping("/deleteUmsMember")
    public int deleteUmsMember()
    {
        UmsMember umsMember = new UmsMember();
        umsMember.setId("12");
        return umsMemberService.deleteUmsMember(umsMember);
    }
}