
function sendData(site){
    var jsonArr = new Array();
    for(let i = 1; i <= $("#pm_num").val(); i++) {
        var typeId = ' typeId: 1,';
        var num = ' num: ' + $("#pm_num").val() + ',';
        var money = ' money: ' + $('#pm_money').val() + ',';
        var name = ' name: ' + $('#pm_name_'+i).val() + ',';
        var planDay = ' planDay: ' + $('#pm_num_'+i).val() + ',';
        var totalDay = ' totalDay: ' + $('#pm_totalnum_'+i).val();
        var json = '{' + typeId + num + money + name + planDay + totalDay + '}';
        jsonArr.push(json);
    }
    for(let i = 1; i <= $("#jszx_num").val(); i++) {
        var typeId = ' typeId: 2,';
        var num = ' num: ' + $("#jszx_num").val() + ',';
        var money = ' money: ' + $('#jszx_money').val() + ',';
        var name = ' name: ' + $('#jszx_name_'+i).val() + ',';
        var planDay = ' planDay: ' + $('#jszx_num_'+i).val() + ',';
        var totalDay = ' totalDay: ' + $('#jszx_totalnum_'+i).val();
        var json = '{' + typeId + num + money + name + planDay + totalDay + '}';
        jsonArr.push(json);
    }
    for(let i = 1; i <= $("#app_designer_num").val(); i++) {
        var typeId = ' typeId: 3,';
        var num = ' num: ' + $("#app_designer_num").val() + ',';
        var money = ' money: ' + $('#app_designer_money').val() + ',';
        var name = ' name: ' + $('#app_designer_name_'+i).val() + ',';
        var planDay = ' planDay: ' + $('#app_designer_num_'+i).val() + ',';
        var totalDay = ' totalDay: ' + $('#app_designer_totalnum_'+i).val();
        var json = '{' + typeId + num + money + name + planDay + totalDay + '}';
        jsonArr.push(json);
    }
    for(let i = 1; i <= $("#platform_designer_num").val(); i++) {
        var typeId = ' typeId: 4,';
        var num = ' num: ' + $("#platform_designer_num").val() + ',';
        var money = ' money: ' + $('#platform_designer_money').val() + ',';
        var name = ' name: ' + $('#platform_designer_name_'+i).val() + ',';
        var planDay = ' planDay: ' + $('#platform_designer_num_'+i).val() + ',';
        var totalDay = ' totalDay: ' + $('#platform_designer_totalnum_'+i).val();
        var json = '{' + typeId + num + money + name + planDay + totalDay + '}';
        jsonArr.push(json);
    }
    for(let i = 1; i <= $("#client_designer_num").val(); i++) {
        var typeId = ' typeId: 5,';
        var num = ' num: ' + $("#client_designer_num").val() + ',';
        var money = ' money: ' + $('#client_designer_money').val() + ',';
        var name = ' name: ' + $('#client_designer_name_'+i).val() + ',';
        var planDay = ' planDay: ' + $('#client_designer_num_'+i).val() + ',';
        var totalDay = ' totalDay: ' + $('#client_designer_totalnum_'+i).val();
        var json = '{' + typeId + num + money + name + planDay + totalDay + '}';
        jsonArr.push(json);
    }
    for(let i = 1; i <= $("#web_designer_num").val(); i++) {
        var typeId = ' typeId: 6,';
        var num = ' num: ' + $("#web_designer_num").val() + ',';
        var money = ' money: ' + $('#web_designer_money').val() + ',';
        var name = ' name: ' + $('#web_designer_name_'+i).val() + ',';
        var planDay = ' planDay: ' + $('#web_designer_num_'+i).val() + ',';
        var totalDay = ' totalDay: ' + $('#web_designer_totalnum_'+i).val();
        var json = '{' + typeId + num + money + name + planDay + totalDay + '}';
        jsonArr.push(json);
    }
    for(let i = 1; i <= $("#ui_designer_num").val(); i++) {
        var typeId = ' typeId: 7,';
        var num = ' num: ' + $("#ui_designer_num").val() + ',';
        var money = ' money: ' + $('#ui_designer_money').val() + ',';
        var name = ' name: ' + $('#ui_designer_name_'+i).val() + ',';
        var planDay = ' planDay: ' + $('#ui_designer_num_'+i).val() + ',';
        var totalDay = ' totalDay: ' + $('#ui_designer_totalnum_'+i).val();
        var json = '{' + typeId + num + money + name + planDay + totalDay + '}';
        jsonArr.push(json);
    }
    for(let i = 1; i <= $("#java_designer_num").val(); i++) {
        var typeId = ' typeId: 8,';
        var num = ' num: ' + $("#java_designer_num").val() + ',';
        var money = ' money: ' + $('#java_designer_money').val() + ',';
        var name = ' name: ' + $('#java_designer_name_'+i).val() + ',';
        var planDay = ' planDay: ' + $('#java_designer_num_'+i).val() + ',';
        var totalDay = ' totalDay: ' + $('#java_designer_totalnum_'+i).val();
        var json = '{' + typeId + num + money + name + planDay + totalDay + '}';
        jsonArr.push(json);
    }
    for(let i = 1; i <= $("#andriod_designer_num").val(); i++) {
        var typeId = ' typeId: 9,';
        var num = ' num: ' + $("#andriod_designer_num").val() + ',';
        var money = ' money: ' + $('#andriod_designer_money').val() + ',';
        var name = ' name: ' + $('#andriod_designer_name_'+i).val() + ',';
        var planDay = ' planDay: ' + $('#andriod_designer_num_'+i).val() + ',';
        var totalDay = ' totalDay: ' + $('#andriod_designer_totalnum_'+i).val();
        var json = '{' + typeId + num + money + name + planDay + totalDay + '}';
        jsonArr.push(json);
    }
    for(let i = 1; i <= $("#App_designer_num").val(); i++) {
        var typeId = ' typeId: 10,';
        var num = ' num: ' + $("#App_designer_num").val() + ',';
        var money = ' money: ' + $('#App_designer_money').val() + ',';
        var name = ' name: ' + $('#App_designer_name_'+i).val() + ',';
        var planDay = ' planDay: ' + $('#App_designer_num_'+i).val() + ',';
        var totalDay = ' totalDay: ' + $('#App_designer_totalnum_'+i).val();
        var json = '{' + typeId + num + money + name + planDay + totalDay + '}';
        jsonArr.push(json);
    }
    for(let i = 1; i <= $("#C_designer_num").val(); i++) {
        var typeId = ' typeId: 11,';
        var num = ' num: ' + $("#C_designer_num").val() + ',';
        var money = ' money: ' + $('#C_designer_money').val() + ',';
        var name = ' name: ' + $('#C_designer_name_'+i).val() + ',';
        var planDay = ' planDay: ' + $('#C_designer_num_'+i).val() + ',';
        var totalDay = ' totalDay: ' + $('#C_designer_totalnum_'+i).val();
        var json = '{' + typeId + num + money + name + planDay + totalDay + '}';
        jsonArr.push(json);
    }
    for(let i = 1; i <= $("#web_designer_2_num").val(); i++) {
        var typeId = ' typeId: 12,';
        var num = ' num: ' + $("#web_designer_2_num").val() + ',';
        var money = ' money: ' + $('#web_designer_2_money').val() + ',';
        var name = ' name: ' + $('#web_designer_2_name_'+i).val() + ',';
        var planDay = ' planDay: ' + $('#web_designer_2_num_'+i).val() + ',';
        var totalDay = ' totalDay: ' + $('#web_designer_2_totalnum_'+i).val();
        var json = '{' + typeId + num + money + name + planDay + totalDay + '}';
        jsonArr.push(json);
    }
    for(let i = 1; i <= $("#test_num").val(); i++) {
        var typeId = ' typeId: 13,';
        var num = ' num: ' + $("#test_num").val() + ',';
        var money = ' money: ' + $('#test_money').val() + ',';
        var name = ' name: ' + $('#test_name_'+i).val() + ',';
        var planDay = ' planDay: ' + $('#test_num_'+i).val() + ',';
        var totalDay = ' totalDay: ' + $('#test_totalnum_'+i).val();
        var json = '{' + typeId + num + money + name + planDay + totalDay + '}';
        jsonArr.push(json);
    }
    for(let i = 1; i <= $("#bm_num").val(); i++) {
        var typeId = ' typeId: 14,';
        var num = ' num: ' + $("#bm_num").val() + ',';
        var money = ' money: ' + $('#bm_money').val() + ',';
        var name = ' name: ' + $('#bm_name_'+i).val() + ',';
        var planDay = ' planDay: ' + $('#bm_num_'+i).val() + ',';
        var totalDay = ' totalDay: ' + $('#bm_totalnum_'+i).val();
        var json = '{' + typeId + num + money + name + planDay + totalDay + '}';
        jsonArr.push(json);
    }
    for(let i = 1; i <= $("#inplement_num").val(); i++) {
        var typeId = ' typeId: 15,';
        var num = ' num: ' + $("#inplement_num").val() + ',';
        var money = ' money: ' + $('#inplement_money').val() + ',';
        var name = ' name: ' + $('#inplement_name_'+i).val() + ',';
        var planDay = ' planDay: ' + $('#inplement_num_'+i).val() + ',';
        var totalDay = ' totalDay: ' + $('#inplement_totalnum_'+i).val();
        var json = '{' + typeId + num + money + name + planDay + totalDay + '}';
        jsonArr.push(json);
    }
    for(let i = 1; i <= $("#project_director_num").val(); i++) {
        var typeId = ' typeId: 16,';
        var num = ' num: ' + $("#project_director_num").val() + ',';
        var money = ' money: ' + $('#project_director_money').val() + ',';
        var name = ' name: ' + $('#project_director_name_'+i).val() + ',';
        var planDay = ' planDay: ' + $('#project_director_num_'+i).val() + ',';
        var totalDay = ' totalDay: ' + $('#project_director_totalnum_'+i).val();
        var json = '{' + typeId + num + money + name + planDay + totalDay + '}';
        jsonArr.push(json);
    }
    for(let i = 1; i <= $("#tech_director_num").val(); i++) {
        var typeId = ' typeId: 17,';
        var num = ' num: ' + $("#tech_director_num").val() + ',';
        var money = ' money: ' + $('#tech_director_money').val() + ',';
        var name = ' name: ' + $('#tech_director_name_'+i).val() + ',';
        var planDay = ' planDay: ' + $('#tech_director_num_'+i).val() + ',';
        var totalDay = ' totalDay: ' + $('#tech_director_totalnum_'+i).val();
        var json = '{' + typeId + num + money + name + planDay + totalDay + '}';
        jsonArr.push(json);
    }
    console.log(jsonArr);   //数组
    console.log(JSON.stringify(jsonArr));   //json数组
    alert('sendData..........');
    $.ajax({
        type:'post',
        dataType: "json",
        url:"../user/center",
        data:{
            'tableId': tableId,
            'siteId': site,
            'peopleMsg': JSON.stringify(jsonArr)
        },
        success:function(res){
            alert("发送成功");
        },
        error:function(){
            alert("发送失败");
        }
    });
}

