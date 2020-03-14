package com.ht.htsys.controller;

import com.ht.htsys.pojo.Level1System;
import com.ht.htsys.pojo.SecondarySystem;
import com.ht.htsys.pojo.WorkPlan;
import com.ht.htsys.service.HtService;
import com.ht.htsys.service.Level1SystemService;
import com.ht.htsys.utils.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/ht")
public class HtController {
    @Autowired
    private Level1SystemService level1SystemService;

    @Autowired
    private HtService htService;

    @RequestMapping("/selectAllLevel1System")
    public List<Level1System> selectAllLevel1System() {
        return level1SystemService.selectAllLevel1System();
    }

    /**
     * 分页：根据条件第几页和查询条件level1System,得到Page对象，即得到当前页数据
     * @return  Page对象，属性有：
     *                      int currentPage;//当前页码  前端传进来的
     *                      int pageSize=2;//每页大小（每页记录条数）
     * 	                    int count;//按条件查询出的总记录数
     * 	                    int totalPages;//总页数
     *                      List<Level1System> list; //每页的记录详细信息
     */
    @RequestMapping(value = "/getOnePageInfo" , method = RequestMethod.GET)
    @ResponseBody
    public Page<Level1System> getOnePageInfo(String customerName,String start,String end,String projectName , String page,int limit,String state){
        Page<Level1System> onePageData = new Page<>();

        //String currentPage = (String)request.getParameter("currentPage");
        onePageData.setCurrentPage(page);
        onePageData.setPageSize(limit);

        System.out.println(start);
        System.out.println(end);
        System.out.println("搜索的项目名projectName："+projectName);
        System.out.println("搜索的当前页currentPage："+page);
        Map map = new HashMap();
        map.put("projectName",projectName);
        map.put("customerName",null);
        if(page!=null){
            map.put("startLimitPos",(Integer.parseInt(onePageData.getCurrentPage())-1)*onePageData.getPageSize());
        }else {
            map.put("startLimitPos",0);
        }

        DateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        Date startDate = null;
        Date endDate = null;
        if (start != null && end != null && !start.equals("") && !end.equals("")) {
            try {
                startDate = format.parse(start);
                endDate = format.parse(end);
            } catch (ParseException e) {
                e.printStackTrace();
            }
        }

        map.put("startDate",start);
        map.put("endDate",end);
        map.put("state",state);
        map.put("pageSize",onePageData.getPageSize());
        int count = level1SystemService.countHtByMap(map);
        List<Level1System> list = level1SystemService.getOnePageInfo(map);
        onePageData.setCount(count);
        onePageData.setList(list);
        System.out.println("结束接口");
        return onePageData;
    }

    @RequestMapping("/getHt")
    public Map getHt(){
        String level1SystemId = "34";
        List<WorkPlan> workPlanList = htService.selectWorkPlanByLevel1Id(level1SystemId);
        Level1System level1System = htService.selectByPrimaryKey(level1SystemId);
        List<SecondarySystem>  secondarySystemList = htService.selectSys2ByLevel1SystemId(level1SystemId);
        Map System2jobMap = htService.selectSystem2jobByLevel1SystemId(level1SystemId);
        Map map = new HashMap();
        map.put("code",100);
        Map data = new HashMap();
        data.put("WorkPlan",workPlanList);
        data.put("System1",level1System);
        data.put("System2job",System2jobMap);
        data.put("System2fun",secondarySystemList);
        map.put("data",data);
        map.put("msg","success");
        return map;
    }




}
