
//1数据定义（实际生产环境为后台输出）
var data = [{
	img: 1,
	h1: 'mintian',
	h2: "hollo"
}, {
	img: 2,
	h1: 'mintian',
	h2: "hollo"
}, {
	img: 3,
	h1: 'mintian',
	h2: "hollo"
}, {
	img: 4,
	h1: 'mintian',
	h2: "hollo"
}, {
	img: 5,
	h1: 'mintian',
	h2: "hollo"
}];

function g(id) {
	if(id.substr(0, 1) == ".") {
		return document.getElementsByClassName(id.substr(1));
	}
	else{
	     if(id.substr(0,1)=="#"){

	         return document.getElementById(id.substr(1));
        }
    };
}

function addSliders() {
	//3.1获取模板
	var tpl_main = g('#template_main').innerHTML;
	/*清除前后的空格*/
	var tpl_ctrl = g('#template_ctrl').innerHTML;

	//3.2定义最终输出html的变量
	var out_main = [];
	var out_ctrl = [];
	//3.3遍历所有数据，构建最终输出的html
	for(var i = 0; i < data.length; i++) {
		var _html_main = tpl_main.replace(/{{index}}/g,data[i].img)
			.replace(/{{h1}}/g, data[i].h1)
			.replace(/{{h2}}/g, data[i].h2);
		var _html_ctrl = tpl_ctrl.replace(/{{index}}/g, data[i].img);
		out_main.push(_html_main);
		out_ctrl.push(_html_ctrl);
	}
	//3.4把html回写到对应的DOM里面
	g('#template_main').innerHTML = out_main.join('');
	g('#template_ctrl').innerHTML = out_ctrl.join('');
};
 //5幻灯片切换
function switchSlider(n) 
{
	/*5.1获取展现的幻灯片与控制按钮 DOM*/
	var main= g('#main_' + n);
	var ctrl = g('#ctrl_' + n);
	/*5.2获取所有幻灯片以及控制按钮*/
	var clear_main = g(".main_i");
	var clear_ctrl = g(".ctrl_i");
	
	/*5.3清除他们的active样式*/
	for( var i =0;i < clear_ctrl.length; i++) {
    	 clear_main[i].className = clear_main[i].className 
    	 .replace('active','');
         //clear_ctrl[i].className = clear_ctrl.className.replace('active', '');
	};
	
	/*5.4增加active样式*/
	 main.className +=" active";
	//ctrl.className += "active";
};
window.onload=function()
{
 addSliders();
 switchSlider(1);
};
 
			
