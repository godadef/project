/*function setPmData(info){
    $("#pm_num").attr("value", info.pmNum);
    if($('#pm_money').length > 0){
        setTimeout(
            function(){
                var evtObj = document.createEvent('UIEvents');
                evtObj.initUIEvent('input', true, true, window, 1 );
                document.querySelector("#pm_num").dispatchEvent(evtObj);
                $('#pm_money').val(info.pmMoney);
                var pmName = info.pmName.split('_');
                var pmPlanNum = info.pmPlanNum.split('_');
                var pmTotalNum = info.pmTotalNum.split('_');
                for(let i=1; i<=info.pmNum; i++){
                    $('#pm_name_'+i).attr("value", pmName[i-1]);
                    $('#pm_num_'+i).attr("value", pmPlanNum[i-1]);
                    $('#pm_totalnum_'+i).attr("value", pmTotalNum[i-1]);
                }},10 break;}break;
}

function setJszxData(info){
    $("#jszx_num").attr("value", info.jszxNum);
    if($('#jszx_money').length > 0){
        setTimeout(
            function(){
                var evtObj = document.createEvent('UIEvents');
                evtObj.initUIEvent('input', true, true, window, 1 );
                document.querySelector("#jszx_num").dispatchEvent(evtObj);
                $('#jszx_money').val(info.jszxMoney);
                var jszxName = info.jszxName.split('_');
                var jszxPlanNum = info.jszxPlanNum.split('_');
                var jszxTotalNum = info.jszxTotalNum.split('_');
                for(let i=1; i<=info.jszxNum; i++){
                    $('#jszx_name_'+i).attr("value", jszxName[i-1]);
                    $('#jszx_num_'+i).attr("value", jszxPlanNum[i-1]);
                    $('#jszx_totalnum_'+i).attr("value", jszxTotalNum[i-1]);
                }},10)
    }
}
function setappDesignerData(info){
    $("#app_designer_num").attr("value", info.appDesignerNum);
    if($('#app_designer_money').length > 0){
        setTimeout(
            function(){
                var evtObj = document.createEvent('UIEvents');
                evtObj.initUIEvent('input', true, true, window, 1 );
                document.querySelector("#app_designer_num").dispatchEvent(evtObj);
                $('#app_designer_money').val(info.appDesignerMoney);
                var app_designerName = info.appDesignerName.split('_');
                var app_designerPlanNum = info.appDesignerPlanNum.split('_');
                var app_designerTotalNum = info.appDesignerTotalNum.split('_');
                for(let i=1; i<=info.appDesignerNum; i++){
                    $('#app_designer_name_'+i).attr("value", app_designerName[i-1]);
                    $('#app_designer_num_'+i).attr("value", app_designerPlanNum[i-1]);
                    $('#app_designer_totalnum_'+i).attr("value", app_designerTotalNum[i-1]);
                }},10)
    }
}
function setPlatformDesignerData(info){
    $("#platform_designer_num").attr("value", info.platformDesignerNum);
    if($('#platform_designer_money').length > 0){
        setTimeout(
            function(){
                var evtObj = document.createEvent('UIEvents');
                evtObj.initUIEvent('input', true, true, window, 1 );
                document.querySelector("#platform_designer_num").dispatchEvent(evtObj);
                $('#platform_designer_money').val(info.platformDesignerMoney);
                var platform_designerName = info.platformDesignerName.split('_');
                var platform_designerPlanNum = info.platformDesignerPlanNum.split('_');
                var platform_designerTotalNum = info.platformDesignerTotalNum.split('_');
                for(let i=1; i<=info.platformDesignerNum; i++){
                    $('#platform_designer_name_'+i).attr("value", platform_designerName[i-1]);
                    $('#platform_designer_num_'+i).attr("value", platform_designerPlanNum[i-1]);
                    $('#platform_designer_totalnum_'+i).attr("value", platform_designerTotalNum[i-1]);
                }},10)
    }
}
function setClientDesignerData(info){
    $("#client_designer_num").attr("value", info.clientDesignerNum);
    if($('#client_designer_money').length > 0){
        setTimeout(
            function(){
                var evtObj = document.createEvent('UIEvents');
                evtObj.initUIEvent('input', true, true, window, 1 );
                document.querySelector("#client_designer_num").dispatchEvent(evtObj);
                $('#client_designer_money').val(info.clientDesignerMoney);
                var client_designerName = info.clientDesignerName.split('_');
                var client_designerPlanNum = info.clientDesignerPlanNum.split('_');
                var client_designerTotalNum = info.clientDesignerTotalNum.split('_');
                for(let i=1; i<=info.clientDesignerNum; i++){
                    $('#client_designer_name_'+i).attr("value", client_designerName[i-1]);
                    $('#client_designer_num_'+i).attr("value", client_designerPlanNum[i-1]);
                    $('#client_designer_totalnum_'+i).attr("value", client_designerTotalNum[i-1]);
                }},10)
    }
}
function setWebDesignerData(info){
    $("#web_designer_num").attr("value", info.webDesignerNum);
    if($('#web_designer_money').length > 0){
        setTimeout(
            function(){
                var evtObj = document.createEvent('UIEvents');
                evtObj.initUIEvent('input', true, true, window, 1 );
                document.querySelector("#web_designer_num").dispatchEvent(evtObj);
                $('#web_designer_money').val(info.webDesignerMoney);
                var web_designerName = info.webDesignerName.split('_');
                var web_designerPlanNum = info.webDesignerPlanNum.split('_');
                var web_designerTotalNum = info.webDesignerTotalNum.split('_');
                for(let i=1; i<=info.webDesignerNum; i++){
                    $('#web_designer_name_'+i).attr("value", web_designerName[i-1]);
                    $('#web_designer_num_'+i).attr("value", web_designerPlanNum[i-1]);
                    $('#web_designer_totalnum_'+i).attr("value", web_designerTotalNum[i-1]);
                }},10)
    }
}
function setUiDesignerData(info){
    $("#ui_designer_num").attr("value", info.uiDesignerNum);
    if($('#ui_designer_money').length > 0){
        setTimeout(
            function(){
                var evtObj = document.createEvent('UIEvents');
                evtObj.initUIEvent('input', true, true, window, 1 );
                document.querySelector("#ui_designer_num").dispatchEvent(evtObj);
                $('#ui_designer_money').val(info.uiDesignerMoney);
                var ui_designerName = info.uiDesignerName.split('_');
                var ui_designerPlanNum = info.uiDesignerPlanNum.split('_');
                var ui_designerTotalNum = info.uiDesignerTotalNum.split('_');
                for(let i=1; i<=info.uiDesignerNum; i++){
                    $('#ui_designer_name_'+i).attr("value", ui_designerName[i-1]);
                    $('#ui_designer_num_'+i).attr("value", ui_designerPlanNum[i-1]);
                    $('#ui_designer_totalnum_'+i).attr("value", ui_designerTotalNum[i-1]);
                }},10)
    }
}
function setJavaDesignerData(info){
    $("#java_designer_num").attr("value", info.javaDesignerNum);
    if($('#java_designer_money').length > 0){
        setTimeout(
            function(){
                var evtObj = document.createEvent('UIEvents');
                evtObj.initUIEvent('input', true, true, window, 1 );
                document.querySelector("#java_designer_num").dispatchEvent(evtObj);
                $('#java_designer_money').val(info.javaDesignerMoney);
                var java_designerName = info.javaDesignerName.split('_');
                var java_designerPlanNum = info.javaDesignerPlanNum.split('_');
                var java_designerTotalNum = info.javaDesignerTotalNum.split('_');
                for(let i=1; i<=info.javaDesignerNum; i++){
                    $('#java_designer_name_'+i).attr("value", java_designerName[i-1]);
                    $('#java_designer_num_'+i).attr("value", java_designerPlanNum[i-1]);
                    $('#java_designer_totalnum_'+i).attr("value", java_designerTotalNum[i-1]);
                }},10)
    }
}
function setAndriodDesignerData(info){
    $("#andriod_designer_num").attr("value", info.andriodDesignerNum);
    if($('#andriod_designer_money').length > 0){
        setTimeout(
            function(){
                var evtObj = document.createEvent('UIEvents');
                evtObj.initUIEvent('input', true, true, window, 1 );
                document.querySelector("#andriod_designer_num").dispatchEvent(evtObj);
                $('#andriod_designer_money').val(info.andriodDesignerMoney);
                var andriod_designerName = info.andriodDesignerName.split('_');
                var andriod_designerPlanNum = info.andriodDesignerPlanNum.split('_');
                var andriod_designerTotalNum = info.andriodDesignerTotalNum.split('_');
                for(let i=1; i<=info.andriodDesignerNum; i++){
                    $('#andriod_designer_name_'+i).attr("value", andriod_designerName[i-1]);
                    $('#andriod_designer_num_'+i).attr("value", andriod_designerPlanNum[i-1]);
                    $('#andriod_designer_totalnum_'+i).attr("value", andriod_designerTotalNum[i-1]);
                }},10)
    }
}
function setAppDesignerData(info){
    $("#App_designer_num").attr("value", info.AppDesignerNum);
    if($('#App_designer_money').length > 0){
        setTimeout(
            function(){
                var evtObj = document.createEvent('UIEvents');
                evtObj.initUIEvent('input', true, true, window, 1 );
                document.querySelector("#App_designer_num").dispatchEvent(evtObj);
                $('#App_designer_money').val(info.AppDesignerMoney);
                var App_designerName = info.AppDesignerName.split('_');
                var App_designerPlanNum = info.AppDesignerPlanNum.split('_');
                var App_designerTotalNum = info.AppDesignerTotalNum.split('_');
                for(let i=1; i<=info.AppDesignerNum; i++){
                    $('#App_designer_name_'+i).attr("value", App_designerName[i-1]);
                    $('#App_designer_num_'+i).attr("value", App_designerPlanNum[i-1]);
                    $('#App_designer_totalnum_'+i).attr("value", App_designerTotalNum[i-1]);
                }},10)
    }
}
function setCDesignerData(info){
    $("#C_designer_num").attr("value", info.CDesignerNum);
    if($('#C_designer_money').length > 0){
        setTimeout(
            function(){
                var evtObj = document.createEvent('UIEvents');
                evtObj.initUIEvent('input', true, true, window, 1 );
                document.querySelector("#C_designer_num").dispatchEvent(evtObj);
                $('#C_designer_money').val(info.CDesignerMoney);
                var C_designerName = info.CDesignerName.split('_');
                var C_designerPlanNum = info.CDesignerPlanNum.split('_');
                var C_designerTotalNum = info.CDesignerTotalNum.split('_');
                for(let i=1; i<=info.CDesignerNum; i++){
                    $('#C_designer_name_'+i).attr("value", C_designerName[i-1]);
                    $('#C_designer_num_'+i).attr("value", C_designerPlanNum[i-1]);
                    $('#C_designer_totalnum_'+i).attr("value", C_designerTotalNum[i-1]);
                }},10)
    }
}
function setWebDesigner2Data(info){
    $("#web_designer_2_num").attr("value", info.webDesigner2Num);
    if($('#web_designer_2_money').length > 0){
        setTimeout(
            function(){
                var evtObj = document.createEvent('UIEvents');
                evtObj.initUIEvent('input', true, true, window, 1 );
                document.querySelector("#web_designer_2_num").dispatchEvent(evtObj);
                $('#web_designer_2_money').val(info.webDesigner2Money);
                var web_designer_2_ame = info.webDesigner2Name.split('_');
                var web_designer_2_lanNum = info.webDesigner2PlanNum.split('_');
                var web_designer_2_totalNum = info.webDesigner2TotalNum.split('_');
                for(let i=1; i<=info.webDesigner_2Num; i++){
                    $('#web_designer_2_name_'+i).attr("value", web_designer_2_name[i-1]);
                    $('#web_designer_2_num_'+i).attr("value", web_designer_2_planNum[i-1]);
                    $('#web_designer_2_totalnum_'+i).attr("value", web_designer_2_totalNum[i-1]);
                }},10)
    }
}
function setTestData(info){
    $("#test_designer_num").attr("value", info.testDesignerNum);
    if($('#test_designer_money').length > 0){
        setTimeout(
            function(){
                var evtObj = document.createEvent('UIEvents');
                evtObj.initUIEvent('input', true, true, window, 1 );
                document.querySelector("#test_designer_num").dispatchEvent(evtObj);
                $('#test_designer_money').val(info.testDesignerMoney);
                var test_designerName = info.testDesignerName.split('_');
                var test_designerPlanNum = info.testDesignerPlanNum.split('_');
                var test_designerTotalNum = info.testDesignerTotalNum.split('_');
                for(let i=1; i<=info.testDesignerNum; i++){
                    $('#test_designer_name_'+i).attr("value", test_designerName[i-1]);
                    $('#test_designer_num_'+i).attr("value", test_designerPlanNum[i-1]);
                    $('#test_designer_totalnum_'+i).attr("value", test_designerTotalNum[i-1]);
                }},10)
    }
}
function setBmData(info){
    $("#bm_num").attr("value", info.bmNum);
    if($('#bm_money').length > 0){
        setTimeout(
            function(){
                var evtObj = document.createEvent('UIEvents');
                evtObj.initUIEvent('input', true, true, window, 1 );
                document.querySelector("#bm_num").dispatchEvent(evtObj);
                $('#bm_money').val(info.bmMoney);
                var bmName = info.bmName.split('_');
                var bmPlanNum = info.bmPlanNum.split('_');
                var bmTotalNum = info.bmTotalNum.split('_');
                for(let i=1; i<=info.bmNum; i++){
                    $('#bm_name_'+i).attr("value", bmName[i-1]);
                    $('#bm_num_'+i).attr("value", bmPlanNum[i-1]);
                    $('#bm_totalnum_'+i).attr("value", bmTotalNum[i-1]);
                }},10)
    }
}

function setImplementData(info){
    $("#inplement_num").attr("value", info.inplementNum);
    if($('#inplement_money').length > 0){
        setTimeout(
            function(){
                var evtObj = document.createEvent('UIEvents');
                evtObj.initUIEvent('input', true, true, window, 1 );
                document.querySelector("#inplement_num").dispatchEvent(evtObj);
                $('#inplement_money').val(info.inplementMoney);
                var inplementName = info.inplementName.split('_');
                var inplementPlanNum = info.inplementPlanNum.split('_');
                var inplementTotalNum = info.inplementTotalNum.split('_');
                for(let i=1; i<=info.inplementNum; i++){
                    $('#inplement_name_'+i).attr("value", inplementName[i-1]);
                    $('#inplement_num_'+i).attr("value", inplementPlanNum[i-1]);
                    $('#inplement_totalnum_'+i).attr("value", inplementTotalNum[i-1]);
                }},10)
    }
}
function setProjectDirectorData(info){
    $("#project_director_num").attr("value", info.projectDirectorNum);
    if($('#project_director_money').length > 0){
        setTimeout(
            function(){
                var evtObj = document.createEvent('UIEvents');
                evtObj.initUIEvent('input', true, true, window, 1 );
                document.querySelector("#project_director_num").dispatchEvent(evtObj);
                $('#project_director_money').val(info.projectDirectorMoney);
                var projectDirectorName = info.projectDirectorName.split('_');
                var projectDirectorPlanNum = info.projectDirectorPlanNum.split('_');
                var projectDirectorTotalNum = info.projectDirectorTotalNum.split('_');
                for(let i=1; i<=info.projectDirectorNum; i++){
                    $('#project_director_name_'+i).attr("value", projectDirectorName[i-1]);
                    $('#project_director_num_'+i).attr("value", projectDirectorPlanNum[i-1]);
                    $('#project_director_totalnum_'+i).attr("value", projectDirectorTotalNum[i-1]);
                }},10)
    }
}
function setTechDirectorData(info){
    $("#tech_director_num").attr("value", info.techDirectorNum);
    if($('#tech_director_money').length > 0){
        setTimeout(
            function(){
                var evtObj = document.createEvent('UIEvents');
                evtObj.initUIEvent('input', true, true, window, 1 );
                document.querySelector("#tech_director_num").dispatchEvent(evtObj);
                $('#tech_director_money').val(info.techDirectorMoney);
                var techDirectorName = info.techDirectorName.split('_');
                var techDirectorPlanNum = info.techDirectorPlanNum.split('_');
                var techDirectorTotalNum = info.techDirectorTotalNum.split('_');
                for(let i=1; i<=info.techDirectorNum; i++){
                    $('#tech_director_name_'+i).attr("value", techDirectorName[i-1]);
                    $('#tech_director_num_'+i).attr("value", techDirectorPlanNum[i-1]);
                    $('#tech_director_totalnum_'+i).attr("value", techDirectorTotalNum[i-1]);
                }},10)
    }
}*/

function setData(info){
    for(let i=0; i < info.peopleMsg.length; i++){
        switch(info.peopleMsg[i].typeId){
            case 1: {
                var pmNum = info.peopleMsg[i].num;
                $("#pm_num").attr("value", pmNum);
                setTimeout(
                    function(){
                        var evtObj = document.createEvent('UIEvents');
                        evtObj.initUIEvent('input', true, true, window, 1 );
                        document.querySelector("#pm_num").dispatchEvent(evtObj);
                        $('#pm_money').val(info.peopleMsg[i].money);
                        for(let j=1; j<=pmNum; j++){
                            $('#pm_name_'+j).attr("value", info.peopleMsg[i].name);
                            $('#pm_num_'+j).attr("value", info.peopleMsg[i].planDay);
                            $('#pm_totalnum_'+j).attr("value", info.peopleMsg[i++].totalDay);
                        }},10)}
                break;
            case 2: {
                var jszxNum = info.peopleMsg[i].num;
                $("#jszx_num").attr("value", jszxNum);
                setTimeout(
                    function(){
                        var evtObj = document.createEvent('UIEvents');
                        evtObj.initUIEvent('input', true, true, window, 1 );
                        document.querySelector("#jszx_num").dispatchEvent(evtObj);
                        $('#jszx_money').val(info.peopleMsg[i].money);
                        for(let j=1; j<=jszxNum; j++){
                            $('#jszx_name_'+j).attr("value", info.peopleMsg[i].name);
                            $('#jszx_num_'+j).attr("value", info.peopleMsg[i].planDay);
                            $('#jszx_totalnum_'+j).attr("value", info.peopleMsg[i++].totalDay);
                        }},10)}
                break;
            case 3: {
                var appDesignerNum = info.peopleMsg[i].num;
                $("#app_designer_num").attr("value", appDesignerNum);
                setTimeout(
                    function(){
                        var evtObj = document.createEvent('UIEvents');
                        evtObj.initUIEvent('input', true, true, window, 1 );
                        document.querySelector("#app_designer_num").dispatchEvent(evtObj);
                        $('#app_designer_money').val(info.peopleMsg[i].money);
                        for(let j=1; j<=appDesignerNum; j++){
                            $('#app_designer_name_'+j).attr("value", info.peopleMsg[i].name);
                            $('#app_designer_num_'+j).attr("value", info.peopleMsg[i].planDay);
                            $('#app_designer_totalnum_'+j).attr("value", info.peopleMsg[i++].totalDay);
                        }},10)}
                break;
            case 4: {
                var platformDesignerNum = info.peopleMsg[i].num;
                $("#platform_designer_num").attr("value", platformDesignerNum);
                setTimeout(
                    function(){
                        var evtObj = document.createEvent('UIEvents');
                        evtObj.initUIEvent('input', true, true, window, 1 );
                        document.querySelector("#platform_designer_num").dispatchEvent(evtObj);
                        $('#platform_designer_money').val(info.peopleMsg[i].money);
                        for(let j=1; j<=platformDesignerNum; j++){
                            $('#platform_designer_name_'+j).attr("value", info.peopleMsg[i].name);
                            $('#platform_designer_num_'+j).attr("value", info.peopleMsg[i].planDay);
                            $('#platform_designer_totalnum_'+j).attr("value", info.peopleMsg[i++].totalDay);
                        }},10)}
                break;
            case 5:{
                    var clientDesignerNum = info.peopleMsg[i].num;
                    $("#client_designer_num").attr("value", clientDesignerNum);
                    setTimeout(
                        function(){
                            var evtObj = document.createEvent('UIEvents');
                            evtObj.initUIEvent('input', true, true, window, 1 );
                            document.querySelector("#client_designer_num").dispatchEvent(evtObj);
                            $('#client_designer_money').val(info.peopleMsg[i].money);
                            for(let j=1; j<=clientDesignerNum; j++){
                                $('#client_designer_name_'+j).attr("value", info.peopleMsg[i].name);
                                $('#client_designer_num_'+j).attr("value", info.peopleMsg[i].planDay);
                                $('#client_designer_totalnum_'+j).attr("value", info.peopleMsg[i++].totalDay);
                            }},10)}
                    break;
            case 6:{
                var webDesignerNum = info.peopleMsg[i].num;
                $("#web_designer_num").attr("value", webDesignerNum);
                setTimeout(
                    function(){
                        var evtObj = document.createEvent('UIEvents');
                        evtObj.initUIEvent('input', true, true, window, 1 );
                        document.querySelector("#web_designer_num").dispatchEvent(evtObj);
                        $('#web_designer_money').val(info.peopleMsg[i].money);
                        for(let j=1; j<=webDesignerNum; j++){
                            $('#web_designer_name_'+j).attr("value", info.peopleMsg[i].name);
                            $('#web_designer_num_'+j).attr("value", info.peopleMsg[i].planDay);
                            $('#web_designer_totalnum_'+j).attr("value", info.peopleMsg[i++].totalDay);
                        }},10)}
                break;
            case 7:{
                var uiDesignerNum= info.peopleMsg[i].num;
                $("#ui_designer_num").attr("value", uiDesignerNum);
                setTimeout(
                    function(){
                        var evtObj = document.createEvent('UIEvents');
                        evtObj.initUIEvent('input', true, true, window, 1 );
                        document.querySelector("#ui_designer_num").dispatchEvent(evtObj);
                        $('#ui_designer_money').val(info.peopleMsg[i].money);
                        for(let j=1; j<=uiDesignerNum; j++){
                            $('#ui_designer_name_'+j).attr("value", info.peopleMsg[i].name);
                            $('#ui_designer_num_'+j).attr("value", info.peopleMsg[i].planDay);
                            $('#ui_designer_totalnum_'+j).attr("value", info.peopleMsg[i++].totalDay);
                        }},10)}
                break;
            case 8:{
                var javaDesignerNum= info.peopleMsg[i].num;
                $("#java_designer_num").attr("value", javaDesignerNum);
                setTimeout(
                    function(){
                        var evtObj = document.createEvent('UIEvents');
                        evtObj.initUIEvent('input', true, true, window, 1 );
                        document.querySelector("#java_designer_num").dispatchEvent(evtObj);
                        $('#java_designer_money').val(info.peopleMsg[i].money);
                        for(let j=1; j<=javaDesignerNum; j++){
                            $('#java_designer_name_'+j).attr("value", info.peopleMsg[i].name);
                            $('#java_designer_num_'+j).attr("value", info.peopleMsg[i].planDay);
                            $('#java_designer_totalnum_'+j).attr("value", info.peopleMsg[i++].totalDay);
                        }},10)}
                break;
            case 9:{
                var andriodDesignerNum= info.peopleMsg[i].num;
                $("#andriod_designer_num").attr("value", andriodDesignerNum);
                setTimeout(
                    function(){
                        var evtObj = document.createEvent('UIEvents');
                        evtObj.initUIEvent('input', true, true, window, 1 );
                        document.querySelector("#andriod_designer_num").dispatchEvent(evtObj);
                        $('#andriod_designer_money').val(info.peopleMsg[i].money);
                        for(let j=1; j<=andriodDesignerNum; j++){
                            $('#andriod_designer_name_'+j).attr("value", info.peopleMsg[i].name);
                            $('#andriod_designer_num_'+j).attr("value", info.peopleMsg[i].planDay);
                            $('#andriod_designer_totalnum_'+j).attr("value", info.peopleMsg[i++].totalDay);
                        }},10)}
                break;
            case 10:{
                var AppDesignerNum= info.peopleMsg[i].num;
                $("#App_designer_num").attr("value", AppDesignerNum);
                setTimeout(
                    function(){
                        var evtObj = document.createEvent('UIEvents');
                        evtObj.initUIEvent('input', true, true, window, 1 );
                        document.querySelector("#App_designer_num").dispatchEvent(evtObj);
                        $('#App_designer_money').val(info.peopleMsg[i].money);
                        for(let j=1; j<=AppDesignerNum; j++){
                            $('#App_designer_name_'+j).attr("value", info.peopleMsg[i].name);
                            $('#App_designer_num_'+j).attr("value", info.peopleMsg[i].planDay);
                            $('#App_designer_totalnum_'+j).attr("value", info.peopleMsg[i++].totalDay);
                        }},10)}
                break;
            case 11:{
                var CDesignerNum= info.peopleMsg[i].num;
                $("#C_designer_num").attr("value", CDesignerNum);
                setTimeout(
                    function(){
                        var evtObj = document.createEvent('UIEvents');
                        evtObj.initUIEvent('input', true, true, window, 1 );
                        document.querySelector("#C_designer_num").dispatchEvent(evtObj);
                        $('#C_designer_money').val(info.peopleMsg[i].money);
                        for(let j=1; j<=CDesignerNum; j++){
                            $('#C_designer_name_'+j).attr("value", info.peopleMsg[i].name);
                            $('#C_designer_num_'+j).attr("value", info.peopleMsg[i].planDay);
                            $('#C_designer_totalnum_'+j).attr("value", info.peopleMsg[i++].totalDay);
                        }},10)}
                break;
            case 12:{
                var webDesigner2Num= info.peopleMsg[i].num;
                $("#web_designer_2_num").attr("value", webDesigner2Num);
                setTimeout(
                    function(){
                        var evtObj = document.createEvent('UIEvents');
                        evtObj.initUIEvent('input', true, true, window, 1 );
                        document.querySelector("#web_designer_2_num").dispatchEvent(evtObj);
                        $('#web_designer_2_money').val(info.peopleMsg[i].money);
                        for(let j=1; j<=CDesignerNum; j++){
                            $('#web_designer_2_name_'+j).attr("value", info.peopleMsg[i].name);
                            $('#web_designer_2_num_'+j).attr("value", info.peopleMsg[i].planDay);
                            $('#web_designer_2_totalnum_'+j).attr("value", info.peopleMsg[i++].totalDay);
                        }},10)}
                break;
            case 13: {
                var testNum = info.peopleMsg[i].num;
                $("#test_num").attr("value", testNum);
                setTimeout(
                    function(){
                        var evtObj = document.createEvent('UIEvents');
                        evtObj.initUIEvent('input', true, true, window, 1 );
                        document.querySelector("#test_num").dispatchEvent(evtObj);
                        $('#test_money').val(info.peopleMsg[i].money);
                        for(let j=1; j<=testNum; j++){
                            $('#test_name_'+j).attr("value", info.peopleMsg[i].name);
                            $('#test_num_'+j).attr("value", info.peopleMsg[i].planDay);
                            $('#test_totalnum_'+j).attr("value", info.peopleMsg[i++].totalDay);
                        }},10)}
                break;
            case 14: {
                var bmNum = info.peopleMsg[i].num;
                $("#bm_num").attr("value", bmNum);
                setTimeout(
                    function(){
                        var evtObj = document.createEvent('UIEvents');
                        evtObj.initUIEvent('input', true, true, window, 1 );
                        document.querySelector("#bm_num").dispatchEvent(evtObj);
                        $('#bm_money').val(info.peopleMsg[i].money);
                        for(let j=1; j<=bmNum; j++){
                            $('#bm_name_'+j).attr("value", info.peopleMsg[i].name);
                            $('#bm_num_'+j).attr("value", info.peopleMsg[i].planDay);
                            $('#bm_totalnum_'+j).attr("value", info.peopleMsg[i++].totalDay);
                        }},10)}
                break;
            case 15: {
                var inplementNum = info.peopleMsg[i].num;
                $("#inplement_num").attr("value", inplementNum);
                setTimeout(
                    function(){
                        var evtObj = document.createEvent('UIEvents');
                        evtObj.initUIEvent('input', true, true, window, 1 );
                        document.querySelector("#inplement_num").dispatchEvent(evtObj);
                        $('#inplement_money').val(info.peopleMsg[i].money);
                        for(let j=1; j<=inplementNum; j++){
                            $('#inplement_name_'+j).attr("value", info.peopleMsg[i].name);
                            $('#inplement_num_'+j).attr("value", info.peopleMsg[i].planDay);
                            $('#inplement_totalnum_'+j).attr("value", info.peopleMsg[i++].totalDay);
                        }},10)}
                break;
            case 16: {
                var projectDirectorNum = info.peopleMsg[i].num;
                $("#project_director_num").attr("value", projectDirectorNum);
                setTimeout(
                    function(){
                        var evtObj = document.createEvent('UIEvents');
                        evtObj.initUIEvent('input', true, true, window, 1 );
                        document.querySelector("#project_director_num").dispatchEvent(evtObj);
                        $('#project_director_money').val(info.peopleMsg[i].money);
                        for(let j=1; j<=projectDirectorNum; j++){
                            $('#project_director_name_'+j).attr("value", info.peopleMsg[i].name);
                            $('#project_director_num_'+j).attr("value", info.peopleMsg[i].planDay);
                            $('#project_director_totalnum_'+j).attr("value", info.peopleMsg[i++].totalDay);
                        }},10)}
                break;
            case 17: {
                var techDirectorNum = info.peopleMsg[i].num;
                $("#tech_director_num").attr("value", techDirectorNum);
                setTimeout(
                    function(){
                        var evtObj = document.createEvent('UIEvents');
                        evtObj.initUIEvent('input', true, true, window, 1 );
                        document.querySelector("#tech_director_num").dispatchEvent(evtObj);
                        $('#tech_director_money').val(info.peopleMsg[i].money);
                        for(let j=1; j<=techDirectorNum; j++){
                            $('#tech_director_name_'+j).attr("value", info.peopleMsg[i].name);
                            $('#tech_director_num_'+j).attr("value", info.peopleMsg[i].planDay);
                            $('#tech_director_totalnum_'+j).attr("value", info.peopleMsg[i++].totalDay);
                        }},10)}
                break;
        }

    }
}



function testData(){
    alert("发生错误");
    $('#pm_num').val(1);//测试用
    $('#jszx_num').val(3);//测试用
    setTimeout(
        function(){
            var evtObj = document.createEvent('UIEvents');
            evtObj.initUIEvent('input', true, true, window, 1 );
            document.querySelector("#pm_num").dispatchEvent(evtObj);
            document.querySelector("#jszx_num").dispat
            $('#jszx_money').val(333);//测试用
            var jszxNameText = "小明_小红_小张";
            var jszxPlanNumText = "10_15_13";
            var jszxTotalNumText = "12_17_15";
            var jszxName = jszxNameText.split('_');
            var jszxPlanNum = jszxPlanNumText.split('_');
            var jszxTotalNum = jszxTotalNumText.split('_');
            console.log(jszxNameText);
            console.log(jszxName);
            for(let i=1; i<=3; i++){
                $('#jszx_name_'+i).val(3);
                $('#jszx_num_'+i).attr("value", jszxPlanNum[i-1]);
                $('#jszx_totalnum_'+i).attr("value", jszxTotalNum[i-1]);
        }},10)
}


