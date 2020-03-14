package com.ht.htsys.controller;

import com.ht.htsys.pojo.Admin;
import com.ht.htsys.service.AdminService;
import com.ht.htsys.utils.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 运营（管理员）账号管理接口
 */
@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private AdminService adminService;

    /**
     * 根据id查询Admin对象信息
     * @param id
     * @return
     */
    @RequestMapping("/selectByPrimaryKey")
    @ResponseBody
    public Admin selectByPrimaryKey(String id) {
        System.out.println(id);
        System.out.println(adminService.selectByPrimaryKey(id));
        return adminService.selectByPrimaryKey(id);
    }

    /**
     * 根据条件查询账号
     * @return
     */
    @RequestMapping("/selectByAdmin")
    @ResponseBody
    public List<Admin> selectByAdmin() {
        Admin admin = new Admin();
        return adminService.selectByAdmin(admin);
    }

    /**
     * 查询所有的账号
     * @return
     */
    @RequestMapping("/selectAllAdmin")
    @ResponseBody
    public List<Admin> selectAllAdmin() {
        return adminService.selectAllAdmin();
    }

    /**
     * 登录功能
     * @param admin
     * @return 返回"success"，登录成功；返回"error"，登录失败
     */
    @RequestMapping("/login")
    @ResponseBody
    public String login(@RequestBody Admin admin, HttpSession session, HttpServletResponse response){
        if(adminService.login(admin).equals("success")){
            session.setAttribute("admin",admin);
            admin = adminService.selectAdminByAdmin(admin);
            return admin.getPermission()+"_"+admin.getId();
        }
        return adminService.login(admin);
    }

    /**
     * 插入运营（管理员）账号
     * @param admin
     * @return 字符串如下：
     *      "添加失败，登录名已被注册"或
     *      "添加运营账号成功"或
     *      "添加运营账号失败"
     */
    @RequestMapping(value = "/insertSelective")
    @ResponseBody
    public String insertSelective(@RequestBody Admin admin){
        return adminService.insertSelective(admin);
    }

    /**
     * 根据id删除记录
     * @param id
     * @return 返回"success"，删除运营账号成功，否则删除运营账号失败
     */
    @RequestMapping("/deleteByPrimaryKey")
    @ResponseBody
    public String deleteByPrimaryKey(int id) {
        return adminService.deleteByPrimaryKey(id);
    }

    /**
     * 修改Admin对象
     * @return 返回"success"，修改运营账号成功，否则修改运营账号失败
     */
    @RequestMapping(value = "/updatePasswordByPrimaryKeySelective")
    @ResponseBody
    public String updatePasswordByPrimaryKeySelective(String id,String newpwd,String oldpwd) {
        Admin admin = adminService.selectByPrimaryKey(id);
        System.out.println(oldpwd);
        if(oldpwd.equals(admin.getPassword())){
            admin.setUpdateDate(new Date());
            admin.setPassword(newpwd);
        }else {
            return "error";
        }
        return adminService.updateByPrimaryKeySelective(admin);
    }

    @RequestMapping(value = "/updateByPrimaryKeySelective")
    @ResponseBody
    public String updateByPrimaryKeySelective(@RequestBody Admin admin) {
        return adminService.updateByPrimaryKeySelective(admin);
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
    public Page<Admin> getOnePageInfo(String loginId, String userName, String phone, String page, int limit){
        Page<Admin> onePageData = new Page<>();

        onePageData.setCurrentPage(page);
        onePageData.setPageSize(limit);

        Map map = new HashMap();
        map.put("loginId",loginId);
        map.put("userName",userName);
        map.put("phone",phone);
        if(page!=null){
            map.put("startLimitPos",(Integer.parseInt(onePageData.getCurrentPage())-1)*onePageData.getPageSize());
        }else {
            map.put("startLimitPos",0);
        }
        map.put("pageSize",onePageData.getPageSize());
        int count = adminService.countAdminByMap(map);
        List<Admin> list = adminService.getOnePageInfo(map);
        onePageData.setCount(count);
        onePageData.setList(list);
        return onePageData;
    }

}
