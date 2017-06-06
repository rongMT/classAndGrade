window.onload=function(){
     
};
function replaceDis(dom){
	// var li_item = document.getElementsByClassName("item");
    var index= dom.className.substr(5,1);
    clearDis();
    console.log(document.getElementsByClassName("right_"+index));
    document.getElementsByClassName("right_"+index)[0].style.display="block";
}
//清除right_item所有的display
function clearDis(){
	var right_item= document.getElementsByClassName("right_item");
	var i=0;
	for(i;i<right_item.length;i++){
        right_item[i].style.display="none";
	}

}