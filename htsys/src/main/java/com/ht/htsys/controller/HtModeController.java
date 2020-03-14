package com.ht.htsys.controller;

import com.ht.htsys.pojo.HtMode;
import com.ht.htsys.service.HtModeService;
import com.ht.htsys.utils.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 表单模板接口
 */
@RestController
@RequestMapping("/htMode")
public class HtModeController {

    @Autowired HtModeService htModeService;

    /**
     * 说明：根据modeid得到HtMode合同对象
     * @param modeid
     * @return
     */
    @RequestMapping("/selectByPrimaryKey")
    public HtMode selectByPrimaryKey(int modeid){
        return htModeService.selectByPrimaryKey(modeid);
    }

    /**
     * 根据htMode合同对象得到合同数据List<HtMode>
     * @param htMode
     * @return
     */
    @RequestMapping(value = "/selectByHtMode")
    @ResponseBody
    public List<HtMode> selectByHtMode(@RequestBody HtMode htMode){
        return htModeService.selectByHtMode(htMode);
    }

    /**
     * 获得全部合同数据
     * @return
     */
    @RequestMapping("/selectAllHtMode")
    public List<HtMode> selectAllHtMode(){
        return htModeService.selectAllHtMode();
    }

    /**
     * 插入htMode合同对象
     * @param htMode
     * @return  返回"success"，添加合同成功，否则添加失败
     */
    @RequestMapping(value = "/insertSelective")
    @ResponseBody
    public String insertSelective(@RequestBody HtMode htMode){
        return htModeService.insertSelective(htMode);
    }

    /**
     * 根据modeid删除合同记录
     * @param modeid
     * @return  返回"success"，删除合同成功，否则删除失败
     */
    @RequestMapping("/deleteByPrimaryKey")
    public String deleteByPrimaryKey(int modeid){
        return htModeService.deleteByPrimaryKey(modeid);
    }

    /**
     * 修改htMode合同对象
     * @param htMode
     * @return  返回"success"，修改合同成功，否则修改失败
     */
    @RequestMapping(value = "/updateByPrimaryKeySelective")
    @ResponseBody
    public String updateByPrimaryKeySelective(@RequestBody HtMode htMode,String modelName){
        htMode.setModename(modelName);
        System.out.println(htModeService.updateByPrimaryKeySelective(htMode));
        return htModeService.updateByPrimaryKeySelective(htMode);
    }

    /**
     * 分页：根据条件第几页和查询条件htMode,得到Page对象，即得到当前页数据
     * @return  Page对象，属性有：
     *                      int currentPage;//当前页码  前端传进来的
     *                      int pageSize=2;//每页大小（每页记录条数）
     * 	                    int count;//按条件查询出的总记录数
     * 	                    int totalPages;//总页数
     *                      List<HtMode> list; //每页的记录详细信息
     */
    @RequestMapping(value = "/getOnePageInfo" , method = RequestMethod.GET)
    @ResponseBody
    public Page<HtMode> getOnePageInfo(String modeId,String modeName, String page,int limit){
        Page<HtMode> onePageData = new Page<>();

        onePageData.setCurrentPage(page);
        onePageData.setPageSize(limit);

        Map map = new HashMap();
        map.put("modeId",modeId);
        map.put("modeName",modeName);
        if(page!=null){
            map.put("startLimitPos",(Integer.parseInt(onePageData.getCurrentPage())-1)*onePageData.getPageSize());
        }else {
            map.put("startLimitPos",0);
        }
        map.put("pageSize",onePageData.getPageSize());
        int count = htModeService.countHtModeByMap(map);
        List<HtMode> list = htModeService.getOnePageInfo(map);
        onePageData.setCount(count);
        onePageData.setList(list);
        return onePageData;
    }


}
