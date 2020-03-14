package com.gec.gmall.user.service;

import com.gec.gmall.user.bean.UmsMember ;

import java.util.List;

public interface UmsMemberService {

    //查询所有会员
    List<UmsMember> getAllUmsMember();

    //新增会员信息
    int insertUmsMember(UmsMember umsMember);

    //查询会员信息
    UmsMember getUmsMember(UmsMember umsMember);

    //修改会员
    int updateUmsMember(UmsMember umsMember);

    //删除会员
    int deleteUmsMember(UmsMember umsMember);

}
