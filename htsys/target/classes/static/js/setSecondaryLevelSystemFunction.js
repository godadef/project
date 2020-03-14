function SecondarySystemFunStore(typeId) {
    console.log('postData.........typeId='+typeId);
    var a=GetRequest();
    var tableId=a['tableId'];
    let funNameTemp = new Array();
    let funMsgTemp = new Array();
    var funNum = $('#fun_num').val();
    if(funNum > 0)  {
        for(let i = 1; i <= funNum; i++) {
            funNameTemp.push($('#fun_name_'+i).val());
            funMsgTemp.push($('#fun_msg_'+i).val());
        }
    }
    let funName = funNameTemp.join('_');
    let funMsg = funMsgTemp.join('/');
    console.log(funName)
    console.log(funMsg)
    $.ajax({
        type:'post',
        dataType: "json",
        url:"../user/center",
        data:{
            'tableId': tableId,
            'typeId': typeId,
            'funName': funName,
            'funMsg': funMsg,
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
            setData(info,id);
        },
        error:function(){
            alert("加载数据失败");
            testData(status);
        }
    });
}
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
function setData(info,status){
    $('#fun_num').val(info.funNum);
    setTimeout(
        function(){
            var evtObj = document.createEvent('UIEvents');
            evtObj.initUIEvent('input', true, true, window, 1 );
            setFunMsg(info);
            setDisabled(status);
    });
}
function setFunMsg(info){
    document.querySelector("#fun_num").dispatchEvent(evtObj);
    var funNum = $('#fun_num').val();
        if(funNum > 0)  {
        var funName = info.funName.split('_');
        var funMsg = info.funMsg.split('/');
        for(let i = 1; i <= funNum; i++) {
            $('#fun_name_'+i).val(funName[i-1]);
            $('#fun_msg_'+i).val(funMsg[i-1]);
        }
    }
}

function setDisabled(status){
    if(status==1) {
        $('#button_store').hide();
        $('#button_store').hide();
        $('#fun_num').attr("disabled","disabled");
        for (let i =1;i<=$('#fun_num').val();++i) {
            $('#fun_name_'+i).attr("disabled","disabled");
            $('#fun_msg_'+i).attr("disabled","disabled");
        }
    }
}

function setMode(){
    $('#fun_num').bind('input propertychange',function() {
        var text = $('input[name="fun_num"]').val();
        if(text > $('#fun_hide_num').val()) {
            $('#fun_hide_num').val(text);
            for (let i =1;i<=text;++i){
                if($('#fun_'+i).length <= 0) {
                    $("<li id='fun_"+i+"'><div class='layui-form-item'><label for='username' class='layui-form-label' style='color: red;' >*核心项目"+i+
                        " ： </label></div> <div class='layui-form-item'><label for='username' class='layui-form-label'>项目名称"+
                        "</label><div class='layui-input-inline'><input name='fun[]' type='text' id='fun_name_"+i+
                        "' autocomplete='off' class='layui-input'></div></div> <div class='layui-form-item'>" +
                        "<label for='username' class='layui-form-label'>功能描述</label>"+
                        " <div class='layui-input-inline'> <textarea  id='fun_msg_"+i+
                        "' name='fun_msg[]' style='width: 500px;' class='layui-input'></textarea></div></div></li>").appendTo($('#fun_upload'));
                    }
                }
        }else {
            for (let i =$('#fun_hide_num').val();i>text;--i) {
                $('#fun_'+i).remove();
            }
            $('#fun_hide_num').val(text);
        }});
}
function testData(status){
    $('#fun_num').val(2);//测试用
    var funNameText = '名称1_名称2';
    var funMsgText = '功能1111111/功能22222222';
    setTimeout(
        function(){
            var evtObj = document.createEvent('UIEvents');
            evtObj.initUIEvent('input', true, true, window, 1 );
            document.querySelector("#fun_num").dispatchEvent(evtObj);
            var funNum = $('#fun_num').val();
            if(funNum > 0)  {
                var funName = funNameText.split('_');
                var funMsg = funMsgText.split('/');
                for(let i = 1; i <= funNum; i++) {
                    $('#fun_name_'+i).val(funName[i-1]);
                    $('#fun_msg_'+i).val(funMsg[i-1]);
                }
            }
            setDisabled(status);
        });
}
