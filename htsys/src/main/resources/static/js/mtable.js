function pmMode(){
    $('#pm_num').bind('input propertychange',function() {
        var text = $('input[name="pm_num"]').val();
        if(text > 0 ) {
            if($('#pm_money').length <= 0){
                    //console.log(text);
                    $("<div class='layui-form-item' id='pm_new'><label for='username' class='layui-form-label'>每日单价</label>" +
                        "<div class='layui-input-inline'><input name='pm_money' type='text' id='pm_money'" +
                        " autocomplete='off' class='layui-input'></div></div>").appendTo($('#pm_add'));
                }
                //console.log($('#pm_money').length);
            } else {
                if($('#pm_new').length > 0){
                    $("#pm_upload").empty();
                    $('#pm_new').remove();
                }
            }

            if(text > $('#pm_hide_num').val()) {
                $('#pm_hide_num').val(text);
                for (let i =1;i<=text;++i){
                    if($('#pm_'+i).length <= 0) {
                        $("<li id='pm_"+i+"'><div class='layui-form-item'><label for='username' class='layui-form-label' style='color: red;' >*人员安排"+i+
                            " ： </label></div> <div class='layui-form-item'><label for='username' class='layui-form-label'>人员名称"+
                            "</label><div class='layui-input-inline'><input name='pm[]' type='text' id='pm_name_"+i+
                            "' autocomplete='off' class='layui-input'></div></div> <div class='layui-form-item'>" +
                            "<label for='username' class='layui-form-label'>实施计划安排人日</label>"+
                            " <div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计划人日' id='pm_num_"+i+
                            "' name='pm_num[]' autocomplete='off' class='layui-input'></div></div><div class='layui-form-item'>" +
                            "<label for='username' class='layui-form-label'>财务计价不含税人日</label>"+
                            " <div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计价人日' id='pm_totalnum_"+i+
                            "' name='pm_totalnum[]' autocomplete='off' class='layui-input'></div></div></li>").appendTo($('#pm_upload'));
                    }
                }
            } else {
                for (let i =$('#pm_hide_num').val();i>text;--i) {
                    $('#pm_'+i).remove();
                }
                $('#pm_hide_num').val(text);
            }});
}

function jszxMode(){
    $('#jszx_num').bind('input propertychange',function() {
        var text = $('input[name="jszx_num"]').val();

        if(text > 0 ) {
            if($('#jszx_money').length <= 0){
                    //console.log(text);
                    $("<div class='layui-form-item' id='jszx_new'><label for='username' class='layui-form-label'>每日单价</label>" +
                        "<div class='layui-input-inline'><input name='jszx_money' type='text' id='jszx_money'" +
                        " autocomplete='off' class='layui-input'></div></div>").appendTo($('#jszx_add'));
                }
                //console.log($('#jszx_money').length);
            } else {
                if($('#jszx_money').length > 0){
                    $("#jszx_upload").empty();
                    $('#jszx_new').remove();
                }
            }
            if(text > $('#jszx_hide_num').val()) {
                $('#jszx_hide_num').val(text);
                for (let i =1;i<=text;++i){
                    //console.log(i + "--" +$('#jszx_'+i).length);
                    if($('#jszx_'+i).length <= 0) {
                        $("<li id='jszx_"+i+"'><div class='layui-form-item'><label for='username' class='layui-form-label' style='color: red;' >*人员安排"+i+
                            " ： </label></div> <div class='layui-form-item'><label for='username' class='layui-form-label'>人员名称"+
                            "</label><div class='layui-input-inline'><input name='jszx[]' type='text' id='jszx_name_"+i+
                            "' autocomplete='off' class='layui-input'></div></div> <div class='layui-form-item'>" +
                            "<label for='username' class='layui-form-label'>实施计划安排人日</label>"+
                            " <div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计划人日' id='jszx_num_"+i+
                            "' name='jszx_num[]' autocomplete='off' class='layui-input'></div></div><div class='layui-form-item'>" +
                            "<label for='username' class='layui-form-label'>财务计价不含税人日</label>"+
                            " <div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计价人日' id='jszx_totalnum_"+i+
                            "' name='jszx_totalnum[]' autocomplete='off' class='layui-input'></div></div></li>").appendTo($('#jszx_upload'));
                    }
                }
            } else {
                for (let i =$('#jszx_hide_num').val();i>text;--i) {
                    $('#jszx_'+i).remove();
                }
                $('#jszx_hide_num').val(text);
            }});
}
function appDesignerMode(){
    $('#app_designer_num').bind('input propertychange',function() {
        var text = $('input[name="app_designer_num"]').val();
        if(text > 0 ) {
            if($('#app_designer_money').length <= 0){
                //console.log(text);
                $("<div class='layui-form-item' id='app_designer_new'><label for='username' class='layui-form-label'>每日单价</label>" +
                    "<div class='layui-input-inline'><input name='app_designer_money' type='text' id='app_designer_money'" +
                    " autocomplete='off' class='layui-input'></div></div>").appendTo($('#app_designer_add'));
            }
            //console.log($('#app_designer_money').length);
        } else {
            if($('#app_designer_money').length > 0){
                $("#app_designer_upload").empty();
                $('#app_designer_new').remove();
            }
        }

        if(text > $('#app_designer_hide_num').val()) {
            $('#app_designer_hide_num').val(text);
            for (let i =1;i<=text;++i){
                if($('#app_designer_'+i).length <= 0) {
                    $("<li id='app_designer_"+i+"'><div class='layui-form-item'><label for='username' class='layui-form-label' style='color: red;' >*人员安排"+i+
                        " ： </label></div> <div class='layui-form-item'><label for='username' class='layui-form-label'>人员名称"+
                        "</label><div class='layui-input-inline'><input name='app_designer[]' type='text' id='app_designer_name_"+i+
                        "' autocomplete='off' class='layui-input'></div></div> <div class='layui-form-item'>" +
                        "<label for='username' class='layui-form-label'>实施计划安排人日</label>"+
                        " <div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计划人日' id='app_designer_num_"+i+
                        "' name='app_designer_num[]' autocomplete='off' class='layui-input'></div></div><div class='layui-form-item'>" +
                        "<label for='username' class='layui-form-label'>财务计价不含税人日</label>"+
                        " <div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计价人日' id='app_designer_totalnum_"+i+
                        "' name='app_designer_totalnum[]' autocomplete='off' class='layui-input'></div></div></li>").appendTo($('#app_designer_upload'));
                }
            }
        } else {
            for (let i =$('#app_designer_hide_num').val();i>text;--i) {
                $('#app_designer_'+i).remove();
            }
            $('#app_designer_hide_num').val(text);
        }});
}
function platformDesignerMode(){
    $('#platform_designer_num').bind('input propertychange',function() {
        var text = $('input[name="platform_designer_num"]').val();
        if(text > 0 ) {
            if($('#platform_designer_money').length <= 0){
                //console.log(text);
                $("<div class='layui-form-item' id='platform_designer_new'><label for='username' class='layui-form-label'>每日单价</label>" +
                    "<div class='layui-input-inline'><input name='platform_designer_money' type='text' id='platform_designer_money'" +
                    " autocomplete='off' class='layui-input'></div></div>").appendTo($('#platform_designer_add'));
            }
            //console.log($('#platform_designer_money').length);
        } else {
            if($('#platform_designer_new').length > 0){
                $("#platform_designer_upload").empty();
                $('#platform_designer_new').remove();
            }
        }

        if(text > $('#platform_designer_hide_num').val()) {
            $('#platform_designer_hide_num').val(text);
            for (let i =1;i<=text;++i){
                if($('#platform_designer_'+i).length <= 0) {
                    $("<li id='platform_designer_"+i+"'><div class='layui-form-item'><label for='username' class='layui-form-label' style='color: red;' >*人员安排"+i+
                        " ： </label></div> <div class='layui-form-item'><label for='username' class='layui-form-label'>人员名称"+
                        "</label><div class='layui-input-inline'><input name='platform_designer[]' type='text' id='platform_designer_name_"+i+
                        "' autocomplete='off' class='layui-input'></div></div> <div class='layui-form-item'>" +
                        "<label for='username' class='layui-form-label'>实施计划安排人日</label>"+
                        " <div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计划人日' id='platform_designer_num_"+i+
                        "' name='platform_designer_num[]' autocomplete='off' class='layui-input'></div></div><div class='layui-form-item'>" +
                        "<label for='username' class='layui-form-label'>财务计价不含税人日</label>"+
                        " <div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计价人日' id='platform_designer_totalnum_"+i+
                        "' name='platform_designer_totalnum[]' autocomplete='off' class='layui-input'></div></div></li>").appendTo($('#platform_designer_upload'));
                }
            }
        } else {
            for (let i =$('#platform_designer_hide_num').val();i>text;--i) {
                $('#platform_designer_'+i).remove();
            }
            $('#platform_designer_hide_num').val(text);
        }});
}
function clientDesignerMode(){
    $('#client_designer_num').bind('input propertychange',function() {
        var text = $('input[name="client_designer_num"]').val();
        if(text > 0 ) {
            if($('#client_designer_money').length <= 0){
                //console.log(text);
                $("<div class='layui-form-item' id='client_designer_new'><label for='username' class='layui-form-label'>每日单价</label>" +
                    "<div class='layui-input-inline'><input name='client_designer_money' type='text' id='client_designer_money'" +
                    " autocomplete='off' class='layui-input'></div></div>").appendTo($('#client_designer_add'));
            }
            //console.log($('#client_designer_money').length);
        } else {
            if($('#client_designer_money').length > 0){
                $("#client_designer_upload").empty();
                $('#client_designer_new').remove();
            }
        }

        if(text > $('#client_designer_hide_num').val()) {
            $('#client_designer_hide_num').val(text);
            for (let i =1;i<=text;++i){
                if($('#client_designer_'+i).length <= 0) {
                    $("<li id='client_designer_"+i+"'><div class='layui-form-item'><label for='username' class='layui-form-label' style='color: red;' >*人员安排"+i+
                        " ： </label></div> <div class='layui-form-item'><label for='username' class='layui-form-label'>人员名称"+
                        "</label><div class='layui-input-inline'><input name='client_designer[]' type='text' id='client_designer_name_"+i+
                        "' autocomplete='off' class='layui-input'></div></div> <div class='layui-form-item'>" +
                        "<label for='username' class='layui-form-label'>实施计划安排人日</label>"+
                        " <div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计划人日' id='client_designer_num_"+i+
                        "' name='client_designer_num[]' autocomplete='off' class='layui-input'></div></div><div class='layui-form-item'>" +
                        "<label for='username' class='layui-form-label'>财务计价不含税人日</label>"+
                        " <div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计价人日' id='client_designer_totalnum_"+i+
                        "' name='client_designer_totalnum[]' autocomplete='off' class='layui-input'></div></div></li>").appendTo($('#client_designer_upload'));
                }
            }
        } else {
            for (let i =$('#client_designer_hide_num').val();i>text;--i) {
                $('#client_designer_'+i).remove();
            }
            $('#client_designer_hide_num').val(text);
        }});
}
function webDesignerMode(){
    $('#web_designer_num').bind('input propertychange',function() {
        var text = $('input[name="web_designer_num"]').val();
        if(text > 0 ) {
            if($('#web_designer_money').length <= 0){
                //console.log(text);
                $("<div class='layui-form-item' id='web_designer_new'><label for='username' class='layui-form-label'>每日单价</label>" +
                    "<div class='layui-input-inline'><input name='web_designer_money' type='text' id='web_designer_money'" +
                    " autocomplete='off' class='layui-input'></div></div>").appendTo($('#web_designer_add'));
            }
            //console.log($('#web_designer_money').length);
        } else {
            if($('#web_designer_new').length > 0){
                $("#web_designer_upload").empty();
                $('#web_designer_new').remove();
            }
        }

        if(text > $('#web_designer_hide_num').val()) {
            $('#web_designer_hide_num').val(text);
            for (let i =1;i<=text;++i){
                if($('#web_designer_'+i).length <= 0) {
                    $("<li id='web_designer_"+i+"'><div class='layui-form-item'><label for='username' class='layui-form-label' style='color: red;' >*人员安排"+i+
                        " ： </label></div> <div class='layui-form-item'><label for='username' class='layui-form-label'>人员名称"+
                        "</label><div class='layui-input-inline'><input name='web_designer[]' type='text' id='web_designer_name_"+i+
                        "' autocomplete='off' class='layui-input'></div></div> <div class='layui-form-item'>" +
                        "<label for='username' class='layui-form-label'>实施计划安排人日</label>"+
                        "' <div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计划人日' id='web_designer_num_"+i+
                        "' name='web_designer_num[]' autocomplete='off' class='layui-input'></div></div><div class='layui-form-item'>" +
                        "<label for='username' class='layui-form-label'>财务计价不含税人日</label>"+
                        " <div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计价人日' id='web_designer_totalnum_"+i+
                        "' name='web_designer_totalnum[]' autocomplete='off' class='layui-input'></div></div></li>").appendTo($('#web_designer_upload'));
                }
            }
        } else {
            for (let i =$('#web_designer_hide_num').val();i>text;--i) {
                $('#web_designer_'+i).remove();
            }
            $('#web_designer_hide_num').val(text);
        }});
}
function uiDesignerMode(){
    $('#ui_designer_num').bind('input propertychange',function() {
        var text = $('input[name="ui_designer_num"]').val();
        if(text > 0 ) {
            if($('#ui_designer_money').length <= 0){
                //console.log(text);
                $("<div class='layui-form-item' id='ui_designer_new'><label for='username' class='layui-form-label'>每日单价</label>" +
                    "<div class='layui-input-inline'><input name='ui_designer_money' type='text' id='ui_designer_money'" +
                    " autocomplete='off' class='layui-input'></div></div>").appendTo($('#ui_designer_add'));
            }
            //console.log($('#ui_designer_money').length);
        } else {
            if($('#ui_designer_new').length > 0){
                $("#ui_designer_upload").empty();
                $('#ui_designer_new').remove();
            }
        }

        if(text > $('#ui_designer_hide_num').val()) {
            $('#ui_designer_hide_num').val(text);
            for (let i =1;i<=text;++i){
                if($('#ui_designer_'+i).length <= 0) {
                    $("<li id='ui_designer_"+i+"'><div class='layui-form-item'><label for='username' class='layui-form-label' style='color: red;' >*人员安排"+i+
                        " ： </label></div> <div class='layui-form-item'><label for='username' class='layui-form-label'>人员名称"+
                        "</label><div class='layui-input-inline'><input name='ui_designer[]' type='text' id='ui_designer_name_"+i+
                        "' autocomplete='off' class='layui-input'></div></div> <div class='layui-form-item'>" +
                        "<label for='username' class='layui-form-label'>实施计划安排人日</label>"+
                        " <div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计划人日' id='ui_designer_num_"+i+
                        "' name='ui_designer_num[]' autocomplete='off' class='layui-input'></div></div><div class='layui-form-item'>" +
                        "<label for='username' class='layui-form-label'>财务计价不含税人日</label>"+
                        " <div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计价人日' id='ui_designer_totalnum_"+i+
                        "' name='ui_designer_totalnum[]' autocomplete='off' class='layui-input'></div></div></li>").appendTo($('#ui_designer_upload'));
                }
            }
        } else {
            for (let i =$('#ui_designer_hide_num').val();i>text;--i) {
                $('#ui_designer_'+i).remove();
            }
            $('#ui_designer_hide_num').val(text);
        }});
}
function javaDesignerMode(){
    $('#java_designer_num').bind('input propertychange',function() {
        var text = $('input[name="java_designer_num"]').val();
        if(text > 0 ) {
            if($('#java_designer_money').length <= 0){
                //console.log(text);
                $("<div class='layui-form-item' id='java_designer_new'><label for='username' class='layui-form-label'>每日单价</label>" +
                    "<div class='layui-input-inline'><input name='java_designer_money' type='text' id='java_designer_money'" +
                    " autocomplete='off' class='layui-input'></div></div>").appendTo($('#java_designer_add'));
            }
            //console.log($('#java_designer_money').length);
        } else {
            if($('#java_designer_new').length > 0){
                $("#java_designer_upload").empty();
                $('#java_designer_new').remove();
            }
        }
        if(text > $('#java_designer_hide_num').val()) {
            $('#java_designer_hide_num').val(text);
            for (let i =1;i<=text;++i){
                if($('#java_'+i).length <= 0) {
                    $("<li id='java_designer_"+i+"'><div class='layui-form-item'><label for='username' class='layui-form-label' style='color: red;' >*人员安排"+i+
                        " ： </label></div> <div class='layui-form-item'><label for='username' class='layui-form-label'>人员名称"+
                        "</label><div class='layui-input-inline'><input name='pm[]' type='text' id='java_designer_name_"+i+
                        "' autocomplete='off' class='layui-input'></div></div> <div class='layui-form-item'>" +
                        "<label for='username' class='layui-form-label'>实施计划安排人日</label>"+
                        " <div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计划人日' id='java_designer_num_"+i+
                        "' name='java_designer_num[]' autocomplete='off' class='layui-input'></div></div><div class='layui-form-item'>" +
                        "<label for='username' class='layui-form-label'>财务计价不含税人日</label>"+
                        " <div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计价人日' id='java_designer_totalnum_"+i+
                        "' name='java_totalnum[]' autocomplete='off' class='layui-input'></div></div></li>").appendTo($('#java_designer_upload'));
                }
            }
        } else {
            for (let i =$('#java_designer_hide_num').val();i>text;--i) {
                $('#java_designer_'+i).remove();
            }
            $('#java_designer_hide_num').val(text);
        }});
}
function andriodDesignerMode(){
    $('#andriod_designer_num').bind('input propertychange',function() {
        var text = $('input[name="andriod_designer_num"]').val();
        if(text > 0 ) {
            if($('#andriod_designer_money').length <= 0){
                //console.log(text);
                $("<div class='layui-form-item' id='andriod_designer_new'><label for='username' class='layui-form-label'>每日单价</label>" +
                    "<div class='layui-input-inline'><input name='andriod_designer_money' type='text' id='andriod_designer_money'" +
                    " autocomplete='off' class='layui-input'></div></div>").appendTo($('#andriod_designer_add'));
            }
            //console.log($('#andriod_designer_money').length);
        } else {
            if($('#andriod_designer_money').length > 0){
                $("#andriod_designer_upload").empty();
                $('#andriod_designer_new').remove();
            }
        }

        if(text > $('#andriod_designer_hide_num').val()) {
            $('#andriod_designer_hide_num').val(text);
            for (let i =1;i<=text;++i){
                if($('#andriod_designer_'+i).length <= 0) {
                    $("<li id='andriod_designer_"+i+"'><div class='layui-form-item'><label for='username' class='layui-form-label' style='color: red;' >*人员安排"+i+
                        " ： </label></div> <div class='layui-form-item'><label for='username' class='layui-form-label'>人员名称"+
                        "</label><div class='layui-input-inline'><input name='andriod_designer[]' type='text' id='andriod_designer_name_"+i+
                        "' autocomplete='off' class='layui-input'></div></div> <div class='layui-form-item'>" +
                        "<label for='username' class='layui-form-label'>实施计划安排人日</label>"+
                        " <div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计划人日' id='andriod_designer_num_"+i+
                        "' name='andriod_designer_num[]' autocomplete='off' class='layui-input'></div></div><div class='layui-form-item'>" +
                        "<label for='username' class='layui-form-label'>财务计价不含税人日</label>"+
                        " <div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计价人日' id='andriod_designer_totalnum_"+i+
                        "' name='andriod_designer_totalnum[]' autocomplete='off' class='layui-input'></div></div></li>").appendTo($('#andriod_designer_upload'));
                }
            }
        } else {
            for (let i =$('#andriod_designer_hide_num').val();i>text;--i) {
                $('#andriod_designer_'+i).remove();
            }
            $('#andriod_designer_hide_num').val(text);
        }});
}
function AppDesignerMode(){
    $('#App_designer_num').bind('input propertychange',function() {
        var text = $('input[name="App_designer_num"]').val();
        if(text > 0 ) {
            if($('#App_designer_money').length <= 0){
                //console.log(text);
                $("<div class='layui-form-item' id='App_designer_new'><label for='username' class='layui-form-label'>每日单价</label>" +
                    "<div class='layui-input-inline'><input name='App_designer_money' type='text' id='App_designer_money'" +
                    " autocomplete='off' class='layui-input'></div></div>").appendTo($('#App_designer_add'));
            }
            //console.log($('#App_designer_money').length);
        } else {
            if($('#App_designer_new').length > 0){
                $('#App_designer_new').remove();
                $("#App_designer_upload").empty();
            }
        }
        if(text > $('#App_designer_hide_num').val()) {
            $('#App_designer_hide_num').val(text);
            for (let i =1;i<=text;++i){
                if($('#App_designer_'+i).length <= 0) {
                    $("<li id='App_designer_"+i+"'><div class='layui-form-item'><label for='username' class='layui-form-label' style='color: red;' >*人员安排"+i+
                        " ： </label></div> <div class='layui-form-item'><label for='username' class='layui-form-label'>人员名称"+
                        "</label><div class='layui-input-inline'><input name='App_designer[]' type='text' id='App_designer_name_"+i+
                        "' autocomplete='off' class='layui-input'></div></div> <div class='layui-form-item'>" +
                        "<label for='username' class='layui-form-label'>实施计划安排人日</label>"+
                        " <div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计划人日' id='App_designer_num_"+i+
                        "' name='App_designer_num[]' autocomplete='off' class='layui-input'></div></div><div class='layui-form-item'>" +
                        "<label for='username' class='layui-form-label'>财务计价不含税人日</label>"+
                        " <div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计价人日' id='App_designer_totalnum_"+i+
                        "' name='App_designer_totalnum[]' autocomplete='off' class='layui-input'></div></div></li>").appendTo($('#App_designer_upload'));
                }
            }
        }  else {
            for (let i =$('#App_designer_hide_num').val();i>text;--i) {
                $('#App_designer_'+i).remove();
            }
            $('#App_designer_hide_num').val(text);
        }});
}
function CDesignerMode(){
    $('#C_designer_num').bind('input propertychange',function() {
        var text = $('input[name="C_designer_num"]').val();
        if(text > 0 ) {
            if($('#C_designer_money').length <= 0){
                //console.log(text);
                $("<div class='layui-form-item' id='C_designer_new'><label for='username' class='layui-form-label'>每日单价</label>" +
                    "<div class='layui-input-inline'><input name='C_designer_money' type='text' id='C_designer_money'" +
                    " autocomplete='off' class='layui-input'></div></div>").appendTo($('#C_designer_add'));
            }
            //console.log($('#C_designer_money').length);
        } else {
            if($('#C_designer_money').length > 0){
                $("#C_designer_upload").empty();
                $('#C_designer_new').remove();
            }
        }
        if(text > $('#C_designer_hide_num').val()) {
            $('#C_designer_hide_num').val(text);
            for (let i =1;i<=text;++i){
                if($('#C_designer_'+i).length <= 0) {
                    $("<li id='C_designer_"+i+"'><div class='layui-form-item'><label for='username' class='layui-form-label' style='color: red;' >*人员安排"+i+
                        " ： </label></div> <div class='layui-form-item'><label for='username' class='layui-form-label'>人员名称"+
                        "</label><div class='layui-input-inline'><input name='C_designer[]' type='text' id='C_designer_name_"+i+
                        "' autocomplete='off' class='layui-input'></div></div> <div class='layui-form-item'>" +
                        "<label for='username' class='layui-form-label'>实施计划安排人日</label>"+
                        " <div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计划人日' id='C_designer_num_"+i+
                        "' name='C_designer_num[]' autocomplete='off' class='layui-input'></div></div><div class='layui-form-item'>" +
                        "<label for='username' class='layui-form-label'>财务计价不含税人日</label>"+
                        " <div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计价人日' id='C_designer_totalnum_"+i+
                        "' name='C_designer_totalnum[]' autocomplete='off' class='layui-input'></div></div></li>").appendTo($('#C_designer_upload'));
                }
            }
        } else {
            for (let i =$('#C_designer_hide_num').val();i>text;--i) {
                $('#C_designer_'+i).remove();
            }
            $('#C_designer_hide_num').val(text);
        }});
}
function webDesigner_2Mode(){
    $('#web_designer_2_num').bind('input propertychange',function() {
        var text = $('input[name="web_designer_2_num"]').val();
        if(text > 0 ) {
            if($('#web_designer_2_money').length <= 0){
                //console.log(text);
                $("<div class='layui-form-item' id='web_designer_2_new'><label for='username' class='layui-form-label'>每日单价</label>" +
                    "<div class='layui-input-inline'><input name='web_designer_2_money' type='text' id='web_designer_2_money'" +
                    " autocomplete='off' class='layui-input'></div></div>").appendTo($('#web_designer_2_add'));
            }
            //console.log($('#web_designer_2_money').length);
        } else {
            if($('#web_designer_2_new').length > 0){
                $("#web_designer_2_upload").empty();
                $('#web_designer_2_new').remove();
            }
        }

        if(text > $('#web_designer_2_hide_num').val()) {
            $('#web_designer_2_hide_num').val(text);
            for (let i =1;i<=text;++i){
                if($('#web_designer_2_'+i).length <= 0) {
                    $("<li id='web_designer_2_"+i+"'><div class='layui-form-item'><label for='username' class='layui-form-label' style='color: red;' >*人员安排"+i+
                        " ： </label></div> <div class='layui-form-item'><label for='username' class='layui-form-label'>人员名称"+
                        "</label><div class='layui-input-inline'><input name='web_designer[]' type='text' id='web_designer_2_name_"+i+
                        "' autocomplete='off' class='layui-input'></div></div> <div class='layui-form-item'>" +
                        "<label for='username' class='layui-form-label'>实施计划安排人日</label>"+
                        " <div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计划人日' id='web_designer_2_num_"+i+
                        "' name='web_designer_2_num[]' autocomplete='off' class='layui-input'></div></div><div class='layui-form-item'>" +
                        "<label for='username' class='layui-form-label'>财务计价不含税人日</label>"+
                        " <div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计价人日' id='web_designer_2_totalnum_"+i+
                        "' name='web_designer_2_totalnum[]' autocomplete='off' class='layui-input'></div></div></li>").appendTo($('#web_designer_2_upload'));
                }
            }
        } else {
            for (let i =$('#web_designer_2_hide_num').val();i>text;--i) {
                $('#web_designer_2_'+i).remove();
            }
            $('#web_designer_2_hide_num').val(text);
        }});
}
function testMode(){
    $('#test_num').bind('input propertychange',function() {
        var text = $('input[name="test_num"]').val();
        if(text > 0 ) {
            if($('#test_money').length <= 0){
                //console.log(text);
                $("<div class='layui-form-item' id='test_new'><label for='username' class='layui-form-label'>每日单价</label>" +
                    "<div class='layui-input-inline'><input name='test_money' type='text' id='test_money'" +
                    " autocomplete='off' class='layui-input'></div></div>").appendTo($('#test_add'));
            }
            //console.log($('#test_money').length);
        } else {
            if($('#test_new').length > 0){
                $("#test_upload").empty();
                $('#test_new').remove();
            }
        }
        if(text > $('#test_hide_num').val()) {
            $('#test_hide_num').val(text);
            for (let i =1;i<=text;++i){
                if($('#test_'+i).length <= 0) {
                    $("<li id='test_"+i+"'><div class='layui-form-item'><label for='username' class='layui-form-label' style='color: red;' >*人员安排"+i+
                        " ： </label></div> <div class='layui-form-item'><label for='username' class='layui-form-label'>人员名称"+
                        "</label><div class='layui-input-inline'><input name='test[]' type='text' id='test_name_"+i+
                        "' autocomplete='off' class='layui-input'></div></div> <div class='layui-form-item'>" +
                        "<label for='username' class='layui-form-label'>实施计划安排人日</label>"+
                        " <div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计划人日' id='test_num_"+i+
                        "' name='test_num[]' autocomplete='off' class='layui-input'></div></div><div class='layui-form-item'>" +
                        "<label for='username' class='layui-form-label'>财务计价不含税人日</label>"+
                        " <div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计价人日' id='test_totalnum_"+i+
                        "' name='test_totalnum[]' autocomplete='off' class='layui-input'></div></div></li>").appendTo($('#test_upload'));
                }
            }
        } else {
            for (let i =$('#test_hide_num').val();i>text;--i) {
                $('#test_'+i).remove();
            }
            $('#test_hide_num').val(text);
        }});
}
function bmMode(){
    $('#bm_num').bind('input propertychange',function() {
        var text = $('input[name="bm_num"]').val();
        if(text > 0 ) {
            if($('#bm_money').length <= 0){
                //console.log(text);
                $("<div class='layui-form-item' id='bm_new'><label for='username' class='layui-form-label'>每日单价</label>" +
                    "<div class='layui-input-inline'><input name='bm_money' type='text' id='bm_money'" +
                    " autocomplete='off' class='layui-input'></div></div>").appendTo($('#bm_add'));
            }
            //console.log($('#bm_money').length);
        } else {
            if($('#bm_new').length > 0){
                $("#bm_upload").empty();
                $('#bm_new').remove();
            }
        }
        if(text > $('#bm_hide_num').val()) {
            $('#bm_hide_num').val(text);
            for (let i =1;i<=text;++i){
                if($('#bm_'+i).length <= 0) {
                    $("<li id='bm_"+i+"'><div class='layui-form-item'><label for='username' class='layui-form-label' style='color: red;' >*人员安排"+i+
                        " ： </label></div> <div class='layui-form-item'><label for='username' class='layui-form-label'>人员名称"+
                        "</label><div class='layui-input-inline'><input name='bm[]' type='text' id='bm_name_"+i+
                        "' autocomplete='off' class='layui-input'></div></div> <div class='layui-form-item'>" +
                        "<label for='username' class='layui-form-label'>实施计划安排人日</label>"+
                        " <div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计划人日' id='bm_num_"+i+
                        "' name='bm_num[]' autocomplete='off' class='layui-input'></div></div><div class='layui-form-item'>" +
                        "<label for='username' class='layui-form-label'>财务计价不含税人日</label>"+
                        " <div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计价人日' id='bm_totalnum_"+i+
                        "' name='bm_totalnum[]' autocomplete='off' class='layui-input'></div></div></li>").appendTo($('#bm_upload'));
                }
            }
        } else {
            for (let i =$('#bm_hide_num').val();i>text;--i) {
                $('#bm_'+i).remove();
            }
            $('#bm_hide_num').val(text);
        }});
}
function implementMode(){
    $('#implement_num').bind('input propertychange',function() {
        var text = $('input[name="implement_num"]').val();
        if(text > 0 ) {
            if($('#implement_money').length <= 0){
                //console.log(text);
                $("<div class='layui-form-item' id='implement_new'><label for='username' class='layui-form-label'>每日单价</label>" +
                    "<div class='layui-input-inline'><input name='implement_money' type='text' id='implement_money'" +
                    " autocomplete='off' class='layui-input'></div></div>").appendTo($('#implement_add'));
            }
            //console.log($('#implement_money').length);
        } else {
            if($('#implement_new').length > 0){
                $('#implement_new').remove();
                $("#implement_upload").empty();
            }
        }

        if(text > $('#implement_hide_num').val()) {
            $('#implement_hide_num').val(text);
            for (let i =1;i<=text;++i){
                if($('#implement_'+i).length <= 0) {
                    $("<li id='implement_"+i+"'><div class='layui-form-item'><label for='username' class='layui-form-label' style='color: red;' >*人员安排"+i+
                        " ： </label></div> <div class='layui-form-item'><label for='username' class='layui-form-label'>人员名称"+
                        "</label><div class='layui-input-inline'><input name='implement[]' type='text' id='implement_name_"+i+
                        "' autocomplete='off' class='layui-input'></div></div> <div class='layui-form-item'>" +
                        "<label for='username' class='layui-form-label'>实施计划安排人日</label>"+
                        " <div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计划人日' id='implement_num_"+i+
                        "' name='implement_num[]' autocomplete='off' class='layui-input'></div></div><div class='layui-form-item'>" +
                        "<label for='username' class='layui-form-label'>财务计价不含税人日</label>"+
                        " <div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计价人日' id='implement_totalnum_"+i+
                        "' name='implement_totalnum[]' autocomplete='off' class='layui-input'></div></div></li>").appendTo($('#implement_upload'));
                }
            }
        } else {
            for (let i =$('#implement_hide_num').val();i>text;--i) {
                $('#implement_'+i).remove();
            }
            $('#implement_hide_num').val(text);
        }});
}
function projectDirectorMode(){
    $('#project_director_num').bind('input propertychange',function() {
        var text = $('input[name="project_director_num"]').val();
        if(text > 0 ) {
            if($('#project_director_money').length <= 0){
                //console.log(text);
                $("<div class='layui-form-item' id='project_director_new'><label for='username' class='layui-form-label'>每日单价</label>" +
                    "<div class='layui-input-inline'><input name='project_director_money' type='text' id='project_director_money'" +
                    " autocomplete='off' class='layui-input'></div></div>").appendTo($('#project_director_add'));
            }
            //console.log($('#project_director_money').length);
        } else {
            if($('#project_director_new').length > 0){
                $("#project_director_upload").empty();
                $('#project_director_new').remove();
            }
        }
        if(text > $('#project_director_hide_num').val()) {
            $('#project_director_hide_num').val(text);
            for (let i =1;i<=text;++i){
                if($('#project_director_'+i).length <= 0) {
                    $("<li id='project_director_"+i+"'><div class='layui-form-item'><label for='username' class='layui-form-label' style='color: red;' >*人员安排"+i+
                        " ： </label></div> <div class='layui-form-item'><label for='username' class='layui-form-label'>人员名称"+
                        "</label><div class='layui-input-inline'><input name='project_director[]' type='text' id='project_director_name_"+i+
                        "' autocomplete='off' class='layui-input'></div></div> <div class='layui-form-item'>" +
                        "<label for='username' class='layui-form-label'>实施计划安排人日</label>"+
                        " <div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计划人日' id='project_director_num_"+i+
                        "' name='project_director_num[]' autocomplete='off' class='layui-input'></div></div><div class='layui-form-item'>" +
                        "<label for='username' class='layui-form-label'>财务计价不含税人日</label>"+
                        " <div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计价人日' id='project_director_totalnum_"+i+
                        "' name='project_director_totalnum[]' autocomplete='off' class='layui-input'></div></div></li>").appendTo($('#project_director_upload'));
                }
            }
        } else {
            for (let i =$('#project_director_hide_num').val();i>text;--i) {
                $('#project_director_'+i).remove();
            }
            $('#project_director_hide_num').val(text);
        }});
}
function techDirectorMode(){
    $('#tech_director_num').bind('input propertychange',function() {
        var text = $('input[name="tech_director_num"]').val();
        if(text > 0 ) {
            if($('#tech_director_money').length <= 0){
                //console.log(text);
                $("<div class='layui-form-item' id='tech_director_new'><label for='username' class='layui-form-label'>每日单价</label>" +
                    "<div class='layui-input-inline'><input name='tech_director_money' type='text' id='tech_director_money'" +
                    " autocomplete='off' class='layui-input'></div></div>").appendTo($('#tech_director_add'));
            }
            //console.log($('#tech_director_money').length);
        } else {
            if($('#tech_director_new').length > 0){
                $("#tech_director_upload").empty();
                $('#tech_director_new').remove();
            }
        }

        if(text > $('#tech_director_hide_num').val()) {
            $('#tech_director_hide_num').val(text);
            for (let i =1;i<=text;++i){
                if($('#tech_director_'+i).length <= 0) {
                    $("<li id='tech_director_"+i+"'><div class='layui-form-item'><label for='username' class='layui-form-label' style='color: red;' >*人员安排"+i+
                        " ： </label></div> <div class='layui-form-item'><label for='username' class='layui-form-label'>人员名称"+
                        "</label><div class='layui-input-inline'><input name='tech_director[]' type='text' id='tech_director_name_"+i+
                        "' autocomplete='off' class='layui-input'></div></div> <div class='layui-form-item'>" +
                        "<label for='username' class='layui-form-label'>实施计划安排人日</label>"+
                        " <div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计划人日' id='tech_director_num_"+i+
                        "' name='tech_director_num[]' autocomplete='off' class='layui-input'></div></div><div class='layui-form-item'>" +
                        "<label for='username' class='layui-form-label'>财务计价不含税人日</label>"+
                        " <div class='layui-input-inline'> <input type='number' min='0' placeholder='请输入计价人日' id='tech_director_totalnum_"+i+
                        "' name='tech_director_totalnum[]' autocomplete='off' class='layui-input'></div></div></li>").appendTo($('#tech_director_upload'));
                }
            }
        } else {
            for (let i =$('#tech_director_hide_num').val();i>text;--i) {
                $('#tech_director_'+i).remove();
            }
            $('#tech_director_hide_num').val(text);
        }});
}

function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    //console.log(url);
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
