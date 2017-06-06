$(function(){
	//验证密码的正则函数
	function isPassword(a)
	{
	   //var pwd=/^(?!\d+$)(?![a-zA-Z]+$)[a-zA-Z0-9]{6,}$/;
	   //密码至少6位并有数字和字母组成
	   var pwd=/^(?!\d+$)(?![a-zA-Z]+$)(?![-.!@#$%^&*()+?><])[a-zA-Z0-9-.!@#$%^&*()+?><]{6,}$/;
	   //密码至少6位（区分大小写）并有数字 字母  字符 三者中的两者组成
	   return pwd.test(a);
	}
	//验证用户名
    function  name(){
	 	if($("#name").val()=="")
	   {
	   	    $("#label_name").css("visibility","visible");
	   	    $("#name").css("border","1px solid red");
	   	    $("#label_name").text("用户名不能为空");
	   	    return false;
	   }
	   else
	   {
	    	//当neme中字符小于3位时
	   	     if($("#name").val().length<3)
	   	     {
	   	     	 $("#label_name").css("visibility","visible");
	   	         $("#name").css("border","1px solid red");
	   	         $("#label_name").text("用户名不能小于3位");
	   	         return false;
	   	     }
	   	     else
	   	     {
	   	        $("#label_name").css("visibility","hidden");
	   	        $("#name").css("border","1px solid #000");
	   	        return true;
	   	    }
	    }
	}
     // 验证密码
	function password()
	{
	    if($("#password").val()=="")
        {
            $("#label_password").css("visibility","visible");
	        $("#password").css("border","1px solid red");
	        $("#label_password").text("密码不能为空");
	        return false;
	      
        }
        else
        {
     	     //判断密码是否小于6位
	   	     if($("#password").val().length<6)
	        {
	     	     $("#label_password").css("visibility","visible");
 	             $("#password").css("border","1px solid red");
	             $("#label_password").text("密码不能小于6位");
	             return false;
	        }
	   	    else
	        {   
	        	var a= $("#password").val();
	        	if( isPassword(a))
	        	{
	        		 $("#label_password").css("visibility","hidden");
   	                 $("#password").css("border","1px solid #000");
   	                 return false;
	        	} 
	        	else
	        	{
	        		$("#label_password").css("visibility","visible");
 	                $("#password").css("border","1px solid red");
	                $("#label_password").text("密码含有特殊字符");
	                return true;
	        	}
	        	
   	            
	        }
	 	}
    }
	$("#name").on("focus",function(){
		$("#name").css("border","1px solid #2780ac");
	})
	$("#name").on("blur",function(){
		name();
	})
    $("#password").on("focus",function(){
    	name();
    	$("#password").css("border","1px solid #2780ac");
    })
    $("#password").on("blur",function(){
    	password();
    })
    $("#submit").on("click",function(){
		name();
		password();
		if(name())
         {
         	if(password())
         	{
         		return true;
         	}
         	else{
         		return true;
         	}
         }
         else{
         	  return false;
         }
    });
})
