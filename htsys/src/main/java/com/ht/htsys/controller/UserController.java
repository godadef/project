package com.ht.htsys.controller;

import com.ht.htsys.pojo.User;
import com.ht.htsys.service.UserService;
import com.ht.htsys.utils.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 用户数据接口
 */
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    /**
     * 说明：根据userid得到User用户对象
     * @param userid
     * @return
     */
    @RequestMapping("/selectByPrimaryKey")
    public User selectByPrimaryKey(int userid){
        return userService.selectByPrimaryKey(userid);
    }

    /**
     * 根据user对象模糊查询出用户对象数据
     * @param user 查询条件
     * @return
     */
    @RequestMapping(value = "/selectByUser")
    @ResponseBody
    public List<User> selectByUser(@RequestBody User user){
        return userService.selectByUser(user);
    }

    /**
     * 分页：根据条件第几页、order和查询条件user,得到Page对象，即得到当前页数据
     * @return  Page对象，属性有：
     *                      int currentPage;//当前页码  前端传进来的
     *                      int pageSize=2;//每页大小（每页记录条数）
     * 	                    int count;//按条件查询出的总记录数
     * 	                    int totalPages;//总页数
     *                      List<User> list; //每页的记录详细信息
     */
    @RequestMapping(value = "/getOnePageInfo" , method = RequestMethod.GET)
    @ResponseBody
    public Page<User> getOnePageInfo(String userName,String phone,String tag, String page,int limit){
        Page<User> onePageData = new Page<>();

        onePageData.setCurrentPage(page);
        onePageData.setPageSize(limit);

        Map map = new HashMap();
        map.put("userName",userName);
        map.put("phone",phone);
        map.put("tag",tag);
        if(page!=null){
            map.put("startLimitPos",(Integer.parseInt(onePageData.getCurrentPage())-1)*onePageData.getPageSize());
        }else {
            map.put("startLimitPos",0);
        }
        map.put("pageSize",onePageData.getPageSize());
        int count = userService.countUserByMap(map);
        List<User> list = userService.getOnePageInfo(map);
        onePageData.setCount(count);
        onePageData.setList(list);
        return onePageData;
    }

}
