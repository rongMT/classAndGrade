// function getDom(id){
// 	if(id.substr(0,1)=="#"){
// 		return document.getElementById(id.substr(1));
// 	}
// 	else{
// 	    if(id.substr(0,1)=="."){
//              return document.getElementsByClassName(id.substr(1));
// 	    }

// 	}
// }
// $(document).ready(function(){
// 	var index;
// 	var aj= $.ajax({
// 		url:"../img/index.json",
// 		type:"get",
// 		async:true,
// 		dataType:"json",
// 		success:function(data){
// 			index=data;
// 		  //成功回调
// 		  console.log("ok");
// 		},
// 		error:function(xhr,textStatus){
// 			//异常回调
// 			console.log("no");
// 		}
// 	});
// $(document).ready(function(){
//     var index;
//     function ajax(){ 
//          $.getJSON("../img/index.json",function(data){  
//              console.log(data);
//             index=data;
//          });
//     }
//     ajax();
//     console.log(index);
// })
$(document).ready(function(){
	/*加载内容*/
     $(".classNoticeP").html(index.classNotice)
     $(".classRecommend").append("<p>"+index.classRecommend+"</p>")
     for(var i=0;i<index.classCalendar.length;i++)
     {
     	$(".classCalendarLi").append("<li>"+index.classCalendar[i]+"</li>")
     }
     /*清除模板*/
     $(".classNewsli").html(" ");
     for(var j=0;j<index.classNews.length;j++){
     	$(".classNewsLi").append("<li><img src="+index.classNews[j].img+" alt=''><p><a>"+index.classNews[j].li+"</a></p></li>");
     }
     /*班级新闻*/
     for(var s=0;s<index.classNews.length;s++){
         $(".classNewsLeft").append("<li><a class='item_"+(s+1)+" item' onClick='replaceDis(this)''>"+index.classNews[s].li+"</a></li>");
     }
     for(var d=0;d<index.classNews.length;d++){
         $(".classNewsRight").append("<div class='right_item right_"+(d+1)+"''>"+index.classNews[d].p+"div");
     }
 })