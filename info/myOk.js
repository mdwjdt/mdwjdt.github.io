window.document.onkeypress = function(e){
    // 获取事件
    e = e || window.event; 
    // 获取按键编码
    var key = e.whick || e.keyCode; 
    // 检测是否为回车键
    if(key == 13){
		//var myjh = document.getElementById("jhtext").value;
		//var myurl= myjh+'.htm';
		//window.location.href=myurl;	
        ///alert('按下回车键');
		myOk();
    }
}

	function myOk()
	{
	if (document.getElementById("jhtext").value != ''){
		var myjh = document.getElementById("jhtext").value;
		var myurl = myjh+'.htm';
		window.location.href=myurl;	
		} else {
				alert("无节号")
		}
	}