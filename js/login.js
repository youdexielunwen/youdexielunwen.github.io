// JavaScript Document

var code; 
	code='OPA3';
	document.getElementById("code").onclick = changeImg;
	function changeImg() {
		var arrays = new Array(
		'1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
		'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
		'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
		'u', 'v', 'w', 'x', 'y', 'z',
		'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
		'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
		'U', 'V', 'W', 'X', 'Y', 'Z'
		);
		code = ' '; 
		/* eslint-disable */
		for (var i = 0; i < 4; i++) {
			var r = parseInt(Math.random() * arrays.length);
 			code += arrays[r];
		}
		document.getElementById('code').innerHTML = code; 
	}
	
	function Login(){
	
		var username=document.forms["Form"]["username"].value;
		var psw=document.forms["Form"]["psw"].value;
		var psw1=document.forms["Form"]["psw1"].value;
		if(username=="202021011068" && psw==123456){
			alert("登陆成功！欢迎您，用户："+username);
		}
		else{
			alert("账号或密码错误！");
		}
	}// JavaScript Document