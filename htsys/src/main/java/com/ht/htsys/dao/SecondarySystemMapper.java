package com.ht.htsys.dao;

import com.ht.htsys.pojo.SecondarySystem;

import java.util.List;

public interface SecondarySystemMapper {
    List<SecondarySystem> selectSys2ByLevel1SystemId(String level1SystemId);


}
