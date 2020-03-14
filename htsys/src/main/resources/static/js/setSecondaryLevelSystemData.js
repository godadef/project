function SecondarySystemDataStore(typeId) {
    console.log('postData.........typeId='+typeId);
    var a=GetRequest();
    var tableId=a['tableId'];
    var jsonArr = [ {
        "site": 1,
        "number":   isEmpty($('#pm_num').val()),
        "money":    isEmpty($('#pm_money_per_day').val()),
        "planDay" : isEmpty($('#pm_plan_day').val()),
        "totalDay": isEmpty($('#pm_total_day').val())
    }, {
        "site": 2,
        "number":   isEmpty($('#jszx_num').val()),
        "money":    isEmpty($('#jszx_money_per_day').val()),
        "planDay" : isEmpty($('#jszx_plan_day').val()),
        "totalDay": isEmpty($('#jszx_total_day').val())
    }, {
        "site": 3,
        "number":   isEmpty($('#app_designer_num').val()),
        "money":    isEmpty($('#app_designer_money_per_day').val()),
        "planDay" : isEmpty($('#app_designer_plan_day').val()),
        "totalDay": isEmpty($('#app_designer_total_day').val())
    }, {
        "site": 4,
        "number":   isEmpty($('#platform_designer_num').val()),
        "money":    isEmpty($('#platform_designer_money_per_day').val()),
        "planDay" : isEmpty($('#platform_designer_plan_day').val()),
        "totalDay": isEmpty($('#platform_designer_total_day').val())
    }, {
        "site": 5,
        "number":   isEmpty($('#client_designer_num').val()),
        "money":    isEmpty($('#client_designer_money_per_day').val()),
        "planDay" : isEmpty($('#client_designer_plan_day').val()),
        "totalDay": isEmpty($('#client_designer_total_day').val())
    }, {
        "site": 6,
        "number":   isEmpty($('#web_designer_num').val()),
        "money":    isEmpty($('#web_designer_money_per_day').val()),
        "planDay" : isEmpty($('#web_designer_plan_day').val()),
        "totalDay": isEmpty($('#web_designer_total_day').val())
    }, {
        "site": 7,
        "number":   isEmpty($('#ui_designer_num').val()),
        "money":    isEmpty($('#ui_designer_money_per_day').val()),
        "planDay" : isEmpty($('#ui_designer_plan_day').val()),
        "totalDay": isEmpty($('#ui_designer_total_day').val())
    }, {
        "site": 8,
        "number":   isEmpty($('#java_designer_num').val()),
        "money":    isEmpty($('#java_designer_money_per_day').val()),
        "planDay" : isEmpty($('#java_designer_plan_day').val()),
        "totalDay": isEmpty($('#java_designer_total_day').val())
    }, {
        "site": 9,
        "number":   isEmpty($('#andriod_designer_num').val()),
        "money":    isEmpty($('#andriod_designer_money_per_day').val()),
        "planDay" : isEmpty($('#andriod_designer_plan_day').val()),
        "totalDay": isEmpty($('#andriod_designer_total_day').val())
    }, {
        "site": 10,
        "number":   isEmpty($('#web_designer_2_num').val()),
        "money":    isEmpty($('#web_designer_2_money_per_day').val()),
        "planDay" : isEmpty($('#web_designer_2_plan_day').val()),
        "totalDay": isEmpty($('#web_designer_2_total_day').val())
    }, {
        "site": 11,
        "number":   isEmpty($('#App_designer_num').val()),
        "money":    isEmpty($('#App_designer_money_per_day').val()),
        "planDay" : isEmpty($('#App_designer_plan_day').val()),
        "totalDay": isEmpty($('#App_designer_total_day').val())
    }, {
        "site": 12,
        "number":   isEmpty($('#C_designer_num').val()),
        "money":    isEmpty($('#C_designer_money_per_day').val()),
        "planDay" : isEmpty($('#C_designer_plan_day').val()),
        "totalDay": isEmpty($('#C_designer_total_day').val())
    }, {
        "site": 13,
        "number":   isEmpty($('#test_num').val()),
        "money":    isEmpty($('#test_money_per_day').val()),
        "planDay" : isEmpty($('#test_plan_day').val()),
        "totalDay": isEmpty($('#test_total_day').val())
    }];
    console.log(JSON.stringify(jsonArr));
    $.ajax({
        type:'post',
        dataType: "json",
        url:"../user/center",
        data:{
            'tableId': tableId,
            'typeId': typeId,
            'job': JSON.stringify(jsonArr)
        },
        success:function(res){
            alert("保存成功");
        },
        error:function(){
            alert("保存失败");
        }
    });
}

function initData(tableId, typeId, status){
    alert('initData.........');
    $.ajax({
        type:'post',
        dataType: "json",
        url:"../user/center",
        data:{
            'tableId': tableId,
            'typeId': typeId
        },
        success:function(res){
            alert("加载数据");
            //console.log(res);
            var info = res.data;
            setData(info,status);
        },
        error:function(){
            alert("加载数据失败");
            testData(status);
        }
    });
}
function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    console.log(url);
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
function setData(info,status){
    $('#pm_num').val(info.pmNum);//测试用
    $('#jszx_num').val(info.jszxNum);//测试用
    $('#app_designer_num').val(info.appDesignerNum);//测试用
    $('#platform_designer_num').val(info.platformDesignerNum);
    $('#client_designer_num').val(info.clientDesignerNum);//测试用
    $('#web_designer_num').val(info.webDesignerNum);//测试用
    $('#ui_designer_num').val(info.uiDesignerNum);//测试用
    $('#andriod_designer_num').val(info.andriodDesignerNum);//测试用
    $('#java_designer_num').val(info.javaDesignerNum);//测试用
    $('#App_designer_num').val(info.AppDesignerNum);//测试用
    $('#web_designer_2_num').val(info.webDesigner2Num);//测试用
    $('#C_designer_num').val(info.CDesignerNum);//测试用
    $('#test_num').val(info.testNum);//测试用
    setTimeout(
        function(){
            var evtObj = document.createEvent('UIEvents');
            evtObj.initUIEvent('input', true, true, window, 1 );
            setPmData(info);
            setJszxData(info);
            setappDesignerData(info);
            setPlatformDesignerData(info);
            setClientDesignerData(info);
            setCDesignerData(info);
            setWebDesignerData(info);
            setUiDesignerData(info);
            setAndriodDesignerData(info);
            setWebDesigner2Data(info);
            setAppDesignerData(info);
            setTestData(info);
            setDisabled(status);
    });
}
function setPmData(info){
    document.querySelector("#pm_num").dispatchEvent(evtObj);
    if($('#pm_money').length > 0)  {
        $('#pm_money_per_day').val(info.pmMoneyPerDay);
        $('#pm_total_day').val(info.pmTotalDay);
        $('#pm_plan_day').val(info.pmPlanDay);
    }
}
function setJszxData(info){
    document.querySelector("#jszx_num").dispatchEvent(evtObj);
    if($('#jszx_money').length > 0)  {
        $('#jszx_money_per_day').val(info.jszxMoneyPerDay);
        $('#jszx_total_day').val(info.jszxTotalDay);
        $('#jszx_plan_day').val(info.jszxPlanDay);
    }
}
function setappDesignerData(info){
    document.querySelector("#app_designer_num").dispatchEvent(evtObj);
    if($('#app_designer_money').length > 0)  {
        $('#app_designer_money_per_day').val(info.appDesignerMoneyPerDay);
        $('#app_designer_total_day').val(info.appDesignerTotalDay);
        $('#app_designer_plan_day').val(info.appDesignerPlanDay);
    }
}
function setPlatformDesignerData(info){
    document.querySelector("#platform_designer_num").dispatchEvent(evtObj);
    if($('#platform_designer_money').length > 0)  {
        $('#platform_designer_money_per_day').val(info.platformDesignerMoneyPerDay);
        $('#platform_designer_total_day').val(info.platformDesignerTotalDay);
        $('#platform_designer_plan_day').val(info.platformDesignerPlanDay);
    }
}
function setClientDesignerData(info){
    document.querySelector("#client_designer_num").dispatchEvent(evtObj);
    if($('#client_designer_money').length > 0)  {
        $('#client_designer_money_per_day').val(info.clientDesignerMoneyPerDay);
        $('#client_designer_total_day').val(info.clientDesignerTotalDay);
        $('#client_designer_plan_day').val(info.clientDesignerPlanDay);
    }
}
function setCDesignerData(info){
    document.querySelector("#C_designer_num").dispatchEvent(evtObj);
    if($('#C_designer_money').length > 0)  {
        $('#C_designer_money_per_day').val(info.cDesignerMoneyPerDay);
        $('#C_designer_total_day').val(info.cDesignerTotalDay);
        $('#C_designer_plan_day').val(info.cDesignerPlanDay);
    }
}
function setWebDesignerData(info){
    document.querySelector("#web_designer_num").dispatchEvent(evtObj);
    if($('#web_designer_money').length > 0)  {
        $('#web_designer_money_per_day').val(info.webDesignerMoneyPerDay);
        $('#web_designer_total_day').val(info.webDesignerTotalDay);
        $('#web_designer_plan_day').val(info.webDesignerPlanDay);
    }
}
function setUiDesignerData(info){
    document.querySelector("#ui_designer_num").dispatchEvent(evtObj);
    if($('#ui_designer_money').length > 0)  {
        $('#ui_designer_money_per_day').val(info.uiDesignerMoneyPerDay);
        $('#ui_designer_total_day').val(info.uiDesignerTotalDay);
        $('#ui_designer_plan_day').val(info.uiDesignerPlanDay);
    }
}
function setJavaDesignerData(info){
    document.querySelector("#java_designer_num").dispatchEvent(evtObj);
    if($('#java_designer_money').length > 0)  {
        $('#java_designer_money_per_day').val(info.javaDesignerMoneyPerDay);
        $('#java_designer_total_day').val(info.javaDesignerTotalDay);
        $('#java_designer_plan_day').val(info.javaDesignerPlanDay);
    }
}
function setAndriodDesignerData(info){
    document.querySelector("#andriod_designer_num").dispatchEvent(evtObj);
    if($('#andriod_designer_money').length > 0)  {
        $('#andriod_designer_money_per_day').val(info.andriodDesignerMoneyPerDay);
        $('#andriod_designer_total_day').val(info.andriodDesignerTotalDay);
        $('#andriod_designer_plan_day').val(info.andriodDesignerPlanDay);
    }
}
function setWebDesigner2Data(info){
    document.querySelector("#web_designer_2_num").dispatchEvent(evtObj);
    if($('#web_designer_2_money').length > 0)  {
        $('#web_designer_2_money_per_day').val(info.webDesigner2MoneyPerDay);
        $('#web_designer_2_total_day').val(info.webDesigner2TotalDay);
        $('#web_designer_2_plan_day').val(info.webDesigner2PlanDay);
    }
}
function setAppDesignerData(info){
    document.querySelector("#App_designer_num").dispatchEvent(evtObj);
    if($('#App_designer_money').length > 0)  {
        $('#App_designer_money_per_day').val(info.AppDesignerMoneyPerDay);
        $('#App_designer_total_day').val(info.AppDesignerTotalDay);
        $('#App_designer_plan_day').val(info.AppDesignerPlanDay);
    }
}

function seTestData(info){
    document.querySelector("#test_num").dispatchEvent(evtObj);
    if($('#test_money').length > 0)  {
        $('#test_money_per_day').val(info.testMoneyPerDay);
        $('#test_total_day').val(info.testTotalDay);
        $('#test_plan_day').val(info.testPlanDay);
    }
}

function setDisabled(status){
    //console.log('setDisabled='+id);
    if(status==1) {
        //alert('设置禁用....');
        $('#button_store').hide();
        $('#pm_num').attr("disabled","disabled");
        $('#pm_money_per_day').attr("disabled","disabled");
        $('#pm_total_day').attr("disabled","disabled");
        $('#pm_plan_day').attr("disabled","disabled");
        $('#jszx_num').attr("disabled","disabled");
        $('#jszx_money_per_day').attr("disabled","disabled");
        $('#jszx_total_day').attr("disabled","disabled");
        $('#jszx_plan_day').attr("disabled","disabled");
        $('#app_designer_num').attr("disabled","disabled");
        $('#app_designer_money_per_day').attr("disabled","disabled");
        $('#app_designer_total_day').attr("disabled","disabled");
        $('#app_designer_plan_day').attr("disabled","disabled");
        $('#platform_designer_num').attr("disabled","disabled");
        $('#platform_designer_money_per_day').attr("disabled","disabled");
        $('#platform_designer_total_day').attr("disabled","disabled");
        $('#platform_designer_plan_day').attr("disabled","disabled");
        $('#client_designer_num').attr("disabled","disabled");
        $('#client_designer_money_per_day').attr("disabled","disabled");
        $('#client_designer_total_day').attr("disabled","disabled");
        $('#client_designer_plan_day').attr("disabled","disabled");
        $('#web_designer_num').attr("disabled","disabled");
        $('#web_designer_money_per_day').attr("disabled","disabled");
        $('#web_designer_total_day').attr("disabled","disabled");
        $('#web_designer_plan_day').attr("disabled","disabled");
        $('#ui_designer_num').attr("disabled","disabled");
        $('#ui_designer_money_per_day').attr("disabled","disabled");
        $('#ui_designer_total_day').attr("disabled","disabled");
        $('#ui_designer_plan_day').attr("disabled","disabled");
        $('#java_designer_num').attr("disabled","disabled");
        $('#java_designer_money_per_day').attr("disabled","disabled");
        $('#java_designer_total_day').attr("disabled","disabled");
        $('#java_designer_plan_day').attr("disabled","disabled");
        $('#App_designer_num').attr("disabled","disabled");
        $('#App_designer_money_per_day').attr("disabled","disabled");
        $('#App_designer_total_day').attr("disabled","disabled");
        $('#App_designer_plan_day').attr("disabled","disabled");
        $('#andriod_designer_num').attr("disabled","disabled");
        $('#andriod_designer_money_per_day').attr("disabled","disabled");
        $('#andriod_designer_total_day').attr("disabled","disabled");
        $('#andriod_designer_plan_day').attr("disabled","disabled");
        $('#C_designer_num').attr("disabled","disabled");
        $('#C_designer_money_per_day').attr("disabled","disabled");
        $('#C_designer_total_day').attr("disabled","disabled");
        $('#C_designer_plan_day').attr("disabled","disabled");
        $('#web_designer_2_num').attr("disabled","disabled");
        $('#web_designer_2_money_per_day').attr("disabled","disabled");
        $('#web_designer_2_total_day').attr("disabled","disabled");
        $('#web_designer_2_plan_day').attr("disabled","disabled");
        $('#test_num').attr("disabled","disabled");
        $('#test_money_per_day').attr("disabled","disabled");
        $('#test_total_day').attr("disabled","disabled");
        $('#test_plan_day').attr("disabled","disabled");
    }
}

function setMode(){
    $('#pm_num').bind('input propertychange',function() {
        var text = $('input[name="pm_num"]').val();
        if(text > 0 ) {
            if($('#pm_money').length <= 0){
                //console.log(text);
                $("<div class='layui-form-item' id='pm_money'><label for='username' class='layui-form-label'>每日单价</label> <div class='layui-input-inline'><input name='pm_money' type='number' min='0' placeholder='请输入每日单价' id='pm_money_per_day' autocomplete='off' class='layui-input'></div></div>"+
                    "<div class='layui-form-item' id='pm_plan'><label for='username' class='layui-form-label'>实施计划安排人日</label><div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计划人日' id='pm_plan_day' name='pm_plan_day' autocomplete='off' class='layui-input'></div></div>" +
                    "<div class='layui-form-item' id='pm_total'><label for='username' class='layui-form-label'>财务计价不含税人日</label><div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计价人日' id='pm_total_day' name='pm_total_day' autocomplete='off' class='layui-input'></div></div>").appendTo($('#pm_add'));
            }
            //console.log($('#pm_money').length);
        } else {
            if($('#pm_money').length > 0){
                $('#pm_money').remove();
                $('#pm_total').remove();
                $('#pm_plan').remove();
            }
        }});

        $('#jszx_num').bind('input propertychange',function() {
            var text = $('input[name="jszx_num"]').val();
            if(text > 0 ) {
                if($('#jszx_money').length <= 0){
                    //console.log(text);
                    $("<div class='layui-form-item' id='jszx_money'><label for='username' class='layui-form-label'>每日单价</label> <div class='layui-input-inline'><input name='jszx_money' type='number' min='0' placeholder='请输入每日单价' id='jszx_money_per_day' autocomplete='off' class='layui-input'></div></div>"+
                        "<div class='layui-form-item' id='jszx_plan'><label for='username' class='layui-form-label'>实施计划安排人日</label><div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计划人日' id='jszx_plan_day' name='jszx_plan_day' autocomplete='off' class='layui-input'></div></div>" +
                        "<div class='layui-form-item' id='jszx_total'><label for='username' class='layui-form-label'>财务计价不含税人日</label><div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计价人日' id='jszx_total_day' name='jszx_total_day' autocomplete='off' class='layui-input'></div></div>").appendTo($('#jszx_add'));
                }
                //console.log($('#jszx_money').length);
            } else {
                if($('#jszx_money').length > 0){
                    $('#jszx_money').remove();
                    $('#jszx_total').remove();
                    $('#jszx_plan').remove();
                }
            }});

        $('#app_designer_num').bind('input propertychange',function() {
            var text = $('input[name="app_designer_num"]').val();
            if(text > 0 ) {
                if($('#app_designer_money').length <= 0){
                    //console.log(text);
                    $("<div class='layui-form-item' id='app_designer_money'><label for='username' class='layui-form-label'>每日单价</label> <div class='layui-input-inline'><input name='app_designer_money' type='number' min='0' placeholder='请输入每日单价' id='app_designer_money_per_day' autocomplete='off' class='layui-input'></div></div>"+
                        "<div class='layui-form-item' id='app_designer_plan'><label for='username' class='layui-form-label'>实施计划安排人日</label><div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计划人日' id='app_designer_plan_day' name='app_designer_plan_day' autocomplete='off' class='layui-input'></div></div>" +
                        "<div class='layui-form-item' id='app_designer_total'><label for='username' class='layui-form-label'>财务计价不含税人日</label><div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计价人日' id='app_designer_total_day' name='app_designer_total_day' autocomplete='off' class='layui-input'></div></div>").appendTo($('#app_designer_add'));
                }
                //console.log($('#app_designer_money').length);
            } else {
                if($('#app_designer_money').length > 0){
                    $('#app_designer_money').remove();
                    $('#app_designer_total').remove();
                    $('#app_designer_plan').remove();
                }
            }});

        $('#platform_designer_num').bind('input propertychange',function() {
            var text = $('input[name="platform_designer_num"]').val();
            if(text > 0 ) {
                if($('#platform_designer_money').length <= 0){
                    //console.log(text);
                    $("<div class='layui-form-item' id='platform_designer_money'><label for='username' class='layui-form-label'>每日单价</label> <div class='layui-input-inline'><input name='platform_designer_money' type='number' min='0' placeholder='请输入每日单价' id='platform_designer_money_per_day' autocomplete='off' class='layui-input'></div></div>"+
                        "<div class='layui-form-item' id='platform_designer_plan'><label for='username' class='layui-form-label'>实施计划安排人日</label><div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计划人日' id='platform_designer_plan_day' name='platform_designer_plan_day' autocomplete='off' class='layui-input'></div></div>" +
                        "<div class='layui-form-item' id='platform_designer_total'><label for='username' class='layui-form-label'>财务计价不含税人日</label><div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计价人日' id='platform_designer_total_day' name='platform_designer_total_day' autocomplete='off' class='layui-input'></div></div>").appendTo($('#platform_designer_add'));
                }
                //console.log($('#platform_designer_money').length);
            } else {
                if($('#platform_designer_money').length > 0){
                    $('#platform_designer_money').remove();
                    $('#platform_designer_total').remove();
                    $('#platform_designer_plan').remove();
                }
            }});

        $('#client_designer_num').bind('input propertychange',function() {
            var text = $('input[name="client_designer_num"]').val();
            if(text > 0 ) {
                if($('#client_designer_money').length <= 0){
                    //console.log(text);
                    $("<div class='layui-form-item' id='client_designer_money'><label for='username' class='layui-form-label'>每日单价</label> <div class='layui-input-inline'><input name='client_designer_money' type='number' min='0' placeholder='请输入每日单价' id='client_designer_money_per_day' autocomplete='off' class='layui-input'></div></div>"+
                        "<div class='layui-form-item' id='client_designer_plan'><label for='username' class='layui-form-label'>实施计划安排人日</label><div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计划人日' id='client_designer_plan_day' name='client_designer_plan_day' autocomplete='off' class='layui-input'></div></div>" +
                        "<div class='layui-form-item' id='client_designer_total'><label for='username' class='layui-form-label'>财务计价不含税人日</label><div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计价人日' id='client_designer_total_day' name='client_designer_total_day' autocomplete='off' class='layui-input'></div></div>").appendTo($('#client_designer_add'));
                }
                //console.log($('#client_designer_money').length);
            } else {
                if($('#client_designer_money').length > 0){
                    $('#client_designer_money').remove();
                    $('#client_designer_total').remove();
                    $('#client_designer_plan').remove();
                }
            }});

        $('#web_designer_num').bind('input propertychange',function() {
            var text = $('input[name="web_designer_num"]').val();
            if(text > 0 ) {
                if($('#web_designer_money').length <= 0){
                    //console.log(text);
                    $("<div class='layui-form-item' id='web_designer_money'><label for='username' class='layui-form-label'>每日单价</label> <div class='layui-input-inline'><input name='web_designer_money' type='number' min='0' placeholder='请输入每日单价' id='web_designer_money_per_day' autocomplete='off' class='layui-input'></div></div>"+
                        "<div class='layui-form-item' id='web_designer_plan'><label for='username' class='layui-form-label'>实施计划安排人日</label><div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计划人日' id='web_designer_plan_day' name='web_designer_plan_day' autocomplete='off' class='layui-input'></div></div>" +
                        "<div class='layui-form-item' id='web_designer_total'><label for='username' class='layui-form-label'>财务计价不含税人日</label><div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计价人日' id='web_designer_total_day' name='web_designer_total_day' autocomplete='off' class='layui-input'></div></div>").appendTo($('#web_designer_add'));
                }
                //console.log($('#web_designer_money').length);
            } else {
                if($('#web_designer_money').length > 0){
                    $('#web_designer_money').remove();
                    $('#web_designer_total').remove();
                    $('#web_designer_plan').remove();
                }
            }});

        $('#ui_designer_num').bind('input propertychange',function() {
            var text = $('input[name="ui_designer_num"]').val();
            if(text > 0 ) {
                if($('#ui_designer_money').length <= 0){
                    //console.log(text);
                    $("<div class='layui-form-item' id='ui_designer_money'><label for='username' class='layui-form-label'>每日单价</label> <div class='layui-input-inline'><input name='ui_designer_money' type='number' min='0' placeholder='请输入每日单价' id='ui_designer_money_per_day' autocomplete='off' class='layui-input'></div></div>"+
                        "<div class='layui-form-item' id='ui_designer_plan'><label for='username' class='layui-form-label'>实施计划安排人日</label><div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计划人日' id='ui_designer_plan_day' name='ui_designer_plan_day' autocomplete='off' class='layui-input'></div></div>" +
                        "<div class='layui-form-item' id='ui_designer_total'><label for='username' class='layui-form-label'>财务计价不含税人日</label><div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计价人日' id='ui_designer_total_day' name='ui_designer_total_day' autocomplete='off' class='layui-input'></div></div>").appendTo($('#ui_designer_add'));
                }
                //console.log($('#ui_designer_money').length);
            } else {
                if($('#ui_designer_money').length > 0){
                    $('#ui_designer_money').remove();
                    $('#ui_designer_total').remove();
                    $('#ui_designer_plan').remove();
                }
            }});

        $('#java_designer_num').bind('input propertychange',function() {
            var text = $('input[name="java_designer_num"]').val();
            if(text > 0 ) {
                if($('#java_designer_money').length <= 0){
                    //console.log(text);
                    $("<div class='layui-form-item' id='java_designer_money'><label for='username' class='layui-form-label'>每日单价</label> <div class='layui-input-inline'><input name='java_designer_money' type='number' min='0' placeholder='请输入每日单价' id='java_designer_money_per_day' autocomplete='off' class='layui-input'></div></div>"+
                        "<div class='layui-form-item' id='java_designer_plan'><label for='username' class='layui-form-label'>实施计划安排人日</label><div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计划人日' id='java_designer_plan_day' name='java_designer_plan_day' autocomplete='off' class='layui-input'></div></div>" +
                        "<div class='layui-form-item' id='java_designer_total'><label for='username' class='layui-form-label'>财务计价不含税人日</label><div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计价人日' id='java_designer_total_day' name='java_designer_total_day' autocomplete='off' class='layui-input'></div></div>").appendTo($('#java_designer_add'));
                }
                //console.log($('#java_designer_money').length);
            } else {
                if($('#java_designer_money').length > 0){
                    $('#java_designer_money').remove();
                    $('#java_designer_total').remove();
                    $('#java_designer_plan').remove();
                }
            }});

        $('#andriod_designer_num').bind('input propertychange',function() {
            var text = $('input[name="andriod_designer_num"]').val();
            if(text > 0 ) {
                if($('#andriod_designer_money').length <= 0){
                    //console.log(text);
                    $("<div class='layui-form-item' id='andriod_designer_money'><label for='username' class='layui-form-label'>每日单价</label> <div class='layui-input-inline'><input name='andriod_designer_money' type='number' min='0' placeholder='请输入每日单价' id='andriod_designer_money_per_day' autocomplete='off' class='layui-input'></div></div>"+
                        "<div class='layui-form-item' id='andriod_designer_plan'><label for='username' class='layui-form-label'>实施计划安排人日</label><div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计划人日' id='andriod_designer_plan_day' name='andriod_designer_plan_day' autocomplete='off' class='layui-input'></div></div>" +
                        "<div class='layui-form-item' id='andriod_designer_total'><label for='username' class='layui-form-label'>财务计价不含税人日</label><div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计价人日' id='andriod_designer_total_day' name='andriod_designer_total_day' autocomplete='off' class='layui-input'></div></div>").appendTo($('#andriod_designer_add'));
                }
                //console.log($('#andriod_designer_money').length);
            } else {
                if($('#andriod_designer_money').length > 0){
                    $('#andriod_designer_money').remove();
                    $('#andriod_designer_total').remove();
                    $('#andriod_designer_plan').remove();
                }
            }});

        $('#App_designer_num').bind('input propertychange',function() {
            var text = $('input[name="App_designer_num"]').val();
            if(text > 0 ) {
                if($('#App_designer_money').length <= 0){
                    //console.log(text);
                    $("<div class='layui-form-item' id='App_designer_money'><label for='username' class='layui-form-label'>每日单价</label> <div class='layui-input-inline'><input name='App_designer_money' type='number' min='0' placeholder='请输入每日单价' id='App_designer_money_per_day' autocomplete='off' class='layui-input'></div></div>"+
                        "<div class='layui-form-item' id='App_designer_plan'><label for='username' class='layui-form-label'>实施计划安排人日</label><div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计划人日' id='App_designer_plan_day' name='App_designer_plan_day' autocomplete='off' class='layui-input'></div></div>" +
                        "<div class='layui-form-item' id='App_designer_total'><label for='username' class='layui-form-label'>财务计价不含税人日</label><div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计价人日' id='App_designer_total_day' name='App_designer_total_day' autocomplete='off' class='layui-input'></div></div>").appendTo($('#App_designer_add'));
                }
                //console.log($('#App_designer_money').length);
            } else {
                if($('#App_designer_money').length > 0){
                    $('#App_designer_money').remove();
                    $('#App_designer_total').remove();
                    $('#App_designer_plan').remove();
                }
            }});

        $('#C_designer_num').bind('input propertychange',function() {
            var text = $('input[name="C_designer_num"]').val();
            if(text > 0 ) {
                if($('#C_designer_money').length <= 0){
                    //console.log(text);
                    $("<div class='layui-form-item' id='C_designer_money'><label for='username' class='layui-form-label'>每日单价</label> <div class='layui-input-inline'><input name='C_designer_money' type='number' min='0' placeholder='请输入每日单价' id='C_designer_money_per_day' autocomplete='off' class='layui-input'></div></div>"+
                        "<div class='layui-form-item' id='C_designer_plan'><label for='username' class='layui-form-label'>实施计划安排人日</label><div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计划人日' id='C_designer_plan_day' name='C_designer_plan_day' autocomplete='off' class='layui-input'></div></div>" +
                        "<div class='layui-form-item' id='C_designer_total'><label for='username' class='layui-form-label'>财务计价不含税人日</label><div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计价人日' id='C_designer_total_day' name='C_designer_total_day' autocomplete='off' class='layui-input'></div></div>").appendTo($('#C_designer_add'));
                }
                //console.log($('#C_designer_money').length);
            } else {
                if($('#C_designer_money').length > 0){
                    $('#C_designer_money').remove();
                    $('#C_designer_total').remove();
                    $('#C_designer_plan').remove();
                }
            }});

        $('#web_designer_2_num').bind('input propertychange',function() {
            var text = $('input[name="web_designer_2_num"]').val();
            if(text > 0 ) {
                if($('#web_designer_2_money').length <= 0){
                    //console.log(text);
                    $("<div class='layui-form-item' id='web_designer_2_money'><label for='username' class='layui-form-label'>每日单价</label> <div class='layui-input-inline'><input name='web_designer_2_money' type='number' min='0' placeholder='请输入每日单价' id='web_designer_2_money_per_day' autocomplete='off' class='layui-input'></div></div>"+
                        "<div class='layui-form-item' id='web_designer_2_plan'><label for='username' class='layui-form-label'>实施计划安排人日</label><div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计划人日' id='web_designer_2_plan_day' name='web_designer_2_plan_day' autocomplete='off' class='layui-input'></div></div>" +
                        "<div class='layui-form-item' id='web_designer_2_total'><label for='username' class='layui-form-label'>财务计价不含税人日</label><div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计价人日' id='web_designer_2_total_day' name='web_designer_2_total_day' autocomplete='off' class='layui-input'></div></div>").appendTo($('#web_designer_2_add'));
                }
                //console.log($('#web_designer_2_money').length);
            } else {
                if($('#web_designer_2_money').length > 0){
                    $('#web_designer_2_money').remove();
                    $('#web_designer_2_total').remove();
                    $('#web_designer_2_plan').remove();
                }
            }});

        $('#test_num').bind('input propertychange',function() {
            var text = $('input[name="test_num"]').val();
            if(text > 0 ) {
                if($('#test_money').length <= 0){
                    //console.log(text);
                    $("<div class='layui-form-item' id='test_money'><label for='username' class='layui-form-label'>每日单价</label> <div class='layui-input-inline'><input name='test_money' type='number' min='0' placeholder='请输入每日单价' id='test_money_per_day' autocomplete='off' class='layui-input'></div></div>"+
                        "<div class='layui-form-item' id='test_plan'><label for='username' class='layui-form-label'>实施计划安排人日</label><div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计划人日' id='test_plan_day' name='test_plan_day' autocomplete='off' class='layui-input'></div></div>" +
                        "<div class='layui-form-item' id='test_total'><label for='username' class='layui-form-label'>财务计价不含税人日</label><div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计价人日' id='test_total_day' name='test_total_day' autocomplete='off' class='layui-input'></div></div>").appendTo($('#test_add'));
                }
                //console.log($('#test_money').length);
            } else {
                if($('#test_money').length > 0){
                    $('#test_money').remove();
                    $('#test_total').remove();
                    $('#test_plan').remove();
                }
            }});
}
function isEmpty(val){
    if(val == null || val == undefined || val == ''){
        return null;
    } else {
        return val;
    }
}
function testData(status){
    $('#pm_num').val(1);//测试用
    $('#jszx_num').val(1);//测试用
    $('#app_designer_num').val(1);//测试用
    $('#platform_designer_num').val(1);
    $('#client_designer_num').val(1);//测试用
    $('#web_designer_num').val(1);//测试用
    $('#ui_designer_num').val(1);//测试用
    $('#andriod_designer_num').val(1);//测试用
    $('#java_designer_num').val(1);//测试用
    $('#App_designer_num').val(1);//测试用
    $('#web_designer_2_num').val(1);//测试用
    $('#C_designer_num').val(1);//测试用
    $('#test_num').val(1);//测试用
    setTimeout(
        function(){
            var evtObj = document.createEvent('UIEvents');
            evtObj.initUIEvent('input', true, true, window, 1 );
            document.querySelector("#pm_num").dispatchEvent(evtObj);
            if($('#pm_money').length > 0)  {
                $('#pm_money_per_day').val(1);
                $('#pm_total_day').val(11);
                $('#pm_plan_day').val(111);
            }
            document.querySelector("#jszx_num").dispatchEvent(evtObj);
            if($('#jszx_money').length > 0)  {
                $('#jszx_money_per_day').val(2);
                $('#jszx_total_day').val(22);
                $('#jszx_plan_day').val(222);
            }
            document.querySelector("#app_designer_num").dispatchEvent(evtObj);
            if($('#app_designer_money').length > 0)  {
                $('#app_designer_money_per_day').val(3);
                $('#app_designer_total_day').val(33);
                $('#app_designer_plan_day').val(333);
            }
            document.querySelector("#platform_designer_num").dispatchEvent(evtObj);
            if($('#platform_designer_money').length > 0)  {
                $('#platform_designer_money_per_day').val(4);
                $('#platform_designer_total_day').val(44);
                $('#platform_designer_plan_day').val(444);
            }
            document.querySelector("#client_designer_num").dispatchEvent(evtObj);
            if($('#client_designer_money').length > 0)  {
                $('#client_designer_money_per_day').val(5);
                $('#client_designer_total_day').val(55);
                $('#client_designer_plan_day').val(555);
            }
            document.querySelector("#C_designer_num").dispatchEvent(evtObj);
            if($('#C_designer_money').length > 0)  {
                $('#C_designer_money_per_day').val(6);
                $('#C_designer_total_day').val(66);
                $('#C_designer_plan_day').val(666);
            }
            document.querySelector("#web_designer_num").dispatchEvent(evtObj);
            if($('#web_designer_money').length > 0)  {
                $('#web_designer_money_per_day').val(7);
                $('#web_designer_total_day').val(77);
                $('#web_designer_plan_day').val(777);
            }
            document.querySelector("#ui_designer_num").dispatchEvent(evtObj);
            if($('#ui_designer_money').length > 0)  {
                $('#ui_designer_money_per_day').val(8);
                $('#ui_designer_total_day').val(88);
                $('#ui_designer_plan_day').val(888);
            }
            document.querySelector("#java_designer_num").dispatchEvent(evtObj);
            if($('#java_designer_money').length > 0)  {
                $('#java_designer_money_per_day').val(9);
                $('#java_designer_total_day').val(99);
                $('#java_designer_plan_day').val(999);
            }
            document.querySelector("#andriod_designer_num").dispatchEvent(evtObj);
            if($('#andriod_designer_money').length > 0)  {
                $('#andriod_designer_money_per_day').val(10);
                $('#andriod_designer_total_day').val(1010);
                $('#andriod_designer_plan_day').val(101010);
            }
            document.querySelector("#App_designer_num").dispatchEvent(evtObj);
            if($('#App_designer_money').length > 0)  {
                $('#App_designer_money_per_day').val(11);
                $('#App_designer_total_day').val(1111);
                $('#App_designer_plan_day').val(111111);
            }
            document.querySelector("#test_num").dispatchEvent(evtObj);
            if($('#test_money').length > 0)  {
                $('#test_money_per_day').val(12);
                $('#test_total_day').val(1212);
                $('#test_plan_day').val(121212);
            }
            document.querySelector("#web_designer_2_num").dispatchEvent(evtObj);
            if($('#web_designer_2_money').length > 0)  {
                $('#web_designer_2_money_per_day').val(13);
                $('#web_designer_2_total_day').val(1313);
                $('#web_designer_2_plan_day').val(131313);
            }
            setDisabled(status);
    });
}
