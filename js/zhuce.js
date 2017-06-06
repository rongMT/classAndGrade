$(function(){
	//验证密码的正则表达式
	function isPassword(a)
	{
	   //var pwd=/^(?!\d+$)(?![a-zA-Z]+$)[a-zA-Z0-9]{6,}$/;
	   //密码至少6位并有数字和字母组成
	   var pwd=/^(?!\d+$)(?![a-zA-Z]+$)(?![-.!@#$%^&*()+?><])[a-zA-Z0-9-.!@#$%^&*()+?><]{6,}$/;
	   //密码至少6位（区分大小写）并有数字 字母  字符 三者中的两者组成
	   return pwd.test(a);
	}
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
	   	     if($("#password".val().length<6)
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
     function password_yanzheng()
     { 
     	  //判断两次密码是否相同
		 if($("#password").val() != $("#password_yanzheng").val())
        {
        	$("#label_password_yanzheng").css("visibility","visible");
	  	    $("#password_yanzheng").css("border","1px solid red");
	  	    $("#label_password_yanzheng").text("密码错误");
	  	    return false;
        }
        else
        {
   	         $("#label_password_yanzheng").css("visibility","hidden");
   	         $("#password_yanzheng").css("border","1px solid #000");
   	        return true;
	   	}
     }
	 
	 //name获取焦点
	 $("#name").on("focus",function(){
	 	//改变文本框样式
	  	 $("#name").css("border","1px solid #2780ac");
	 });
	  
	/*name失去焦点时*/
	$("#name").on("blur",function(){
		//验证name文本框
		name();
	   	//改变密码框的样式
	     $("#password").css("border","1px solid #2780ac");
	});
	//密码获取焦点时
     $("#password").on("focus",function(){
	 	//首先判断name文本框是否正确
	     name();
	 }); 
	$("#password").on("blur",function(){
		 //判断是否为空或是否小于6位
		 password();
		
	});
	//确认密码获取焦点时
     $("#password_yanzheng").on("focus",function(){
	 	//首先判断name文本框是否正确
	 	 name();
	   	//判断密码是否为空或是否小于6位
	     password();
	   	     
	   	 //改变密码框的样式
	    $("#password_yanzheng").css("border","1px solid #2780ac");
	 });
     //焦点离开确认密码框时
	 $("#password_yanzheng").on("blur",function(){
		//判断密码是否相同
		password_yanzheng();
		
	}); 
	
	$("#submit").on("click",function(){
		name();
		password();
		password_yanzheng();
		$("#checkbox").attr("checked","checked");
		if(name())
         {
         	if(password())
         	{
         		if(password_yanzheng())
         		{
         			return true;
         		}
         		else
         		{
         			return false;
         		}
         	}
         	else{
         		return true;
         	}
         }
         else{
         	  return false;
         }
 
		
	
//	    var name=$("#label_name").css("visibility");
//	    var mima=$("#label_password").css("visibility");
//	    var mima_yanzheng=$("#label_password_yanzheng").css("visibility");
//	    

//	    if(name=hidden && mima=hidden && mima_yanzheng=hidden)
//	    {
//	    	return false;
//	    }
//	    else{
//	    	return true;
//	    }
         
	});
	   	    
})
