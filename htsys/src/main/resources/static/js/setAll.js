function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
var peopleMsg_1 = 0;
var peopleMsg_1_cpjl = 0;
var peopleMsg_1_xqfx = 0;
var peopleMsg_2 = 0;
var peopleMsg_2_cpjl = 0;
var peopleMsg_2_yyjg = 0;
var peopleMsg_2_jcpt = 0;
var peopleMsg_2_khd = 0;
var peopleMsg_2_qd = 0;
var peopleMsg_2_ui = 0;
var peopleMsg_3 = 0;
var peopleMsg_3_java = 0;
var peopleMsg_3_az = 0;
var peopleMsg_3_pg = 0;
var peopleMsg_3_c = 0;
var peopleMsg_3_qd = 0;
var peopleMsg_4 = 0;
var peopleMsg_5 = 0;
var peopleMsg_6 = 0;
var peopleMsg_7 = 0;
var peopleMsg_8 = 0;
layui.use(['form','code','laydate'], function(){
    var laydate = layui.laydate;
    //执行一个laydate实例
    laydate.render({
      elem: '#deadline' //指定元素
  });
    form = layui.form;
    layui.code();
    $('#site').xcity('','','');

    var a=GetRequest();
    var tableId = a['tableId'];

    //初始化:接收数据
    if(tableId){
        $.ajax({
            url: "../update",   //有tableId说明已经插入过了
            type: "POST",
            dataType: "json",
            data: {
                "level1SystemId": tableId,
            },
            success: function(res) {
                form.val('firstTable', {
                    "tableId": level1SystemId,
                    "modeId": modeId,
                    "projectName": projectName,
                    "businessName": customerName,
                    "chiefName": headName,
                    "chiefPhone": headPhone,
                    "chiefEmail": headEmail,
                    "deadline": deliveryTime,
                    "content": deliverables,
                    "method": deliveryWay
                });
                var areaArr = res.deliverPlace.split('-');
                $('#site').xcity(areaArr[0], areaArr[1], areaArr[2]);
                $('#street').val(areaArr[3]);
                for(let i = 0; i < res.data.length; i++){
                    switch(res.data[i].site){
                        case 1 : {
                            peopleMsg_1++;
                            switch(res.data[i].typeId){
                                case 1 : peopleMsg_1_cpjl++; break;
                                case 2 : peopleMsg_1_xqfx; break;
                            }
                        }; break;
                        case 2 : {
                            peopleMsg_2++;
                            switch(res.data[i].typeId){
                                case 1 : peopleMsg_2_cpjl++; break;
                                case 3 : peopleMsg_2_yyjg++; break;
                                case 4 : peopleMsg_2_jcpt++; break;
                                case 5 : peopleMsg_2_khd++; break;
                                case 6 : peopleMsg_2_qd++; break;
                                case 7 : peopleMsg_2_ui++; break;
                            }
                        }; break;
                        case 3 : {
                            peopleMsg_3++;
                            switch(res.data[i].typeId){
                                case 8  : peopleMsg_3_java++; break;
                                case 9  : peopleMsg_3_az++; break;
                                case 10 : peopleMsg_3_pg++; break;
                                case 11 : peopleMsg_3_c++; break;
                                case 12 : peopleMsg_3_qd++; break;
                            }
                        }; break;
                        case 4 : {
                            peopleMsg_4++;
                        }; break;
                        case 5 : {
                            peopleMsg_5++;
                        }; break;
                        case 6 : {
                            peopleMsg_6++;
                        }; break;
                        case 7 : {
                            peopleMsg_7++;
                        }; break;
                        case 8 : {
                            peopleMsg_8++;
                        }; break;
                    }
                }
            },
            error:function(){
                alert("加载数据失败");
                var area = "四川-自贡市-贡井区-xx地址"
                form.val('firstTable', {
                    "tableId": tableId,
                    "projectName":"1",
                    "businessName":"2",
                    "chiefName":"3",
                    "chiefPhone":"13829705490",
                    "chiefEmail":"543368109@qq.com",
                    "deadline":"2020-02-03",
                    "content":"网站",
                    "method":"光盘"
                });
                var areaArr = area.split('-');
                $('#site').xcity(areaArr[0], areaArr[1], areaArr[2]);
                $('#street').val(areaArr[3]);
            }
        });
    }
});
window.onload = function(){  
    var tbody = document.getElementById('tbMain');  
    for(var i = 0; i < 8; i++){ //遍历一下json数据
        var trow = getDataRow(per[i]); //定义一个方法,返回tr数据  
        tbody.appendChild(trow);  
    }   
}        
function getDataRow(site){  
    var row = document.createElement('tr'); //创建行  
    var idCell = document.createElement('td'); //创建第一列id  
    idCell.innerHTML = h.id; //填充数据  
    row.appendChild(idCell); //加入行  ，下面类似  
     
    var nameCell = document.createElement('td');//创建第二列name  
    nameCell.innerHTML = h.name;  
    row.appendChild(nameCell);  
      
    var jobCell = document.createElement('td');//创建第三列job  
    jobCell.innerHTML = h.job;  
    row.appendChild(jobCell);  
      
    //到这里，json中的数据已经添加到表格中，下面为每行末尾添加删除按钮  
      
    var delCell = document.createElement('td');//创建第四列，操作列  
    row.appendChild(delCell);  
    var btnDel = document.createElement('input'); //创建一个input控件  
    btnDel.setAttribute('type','button'); //type="button"   
    
    return row; //返回tr数据      
}