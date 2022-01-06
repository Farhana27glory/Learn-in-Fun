// JavaScript Document
var container1,container2,container3,container4,container5,container6,container7,container8,container9,container10;
var container1_msg,container2_msg,container3_msg,container4_msg,container5_msg,container6_msg,container7_msg,container8_msg,container9_msg,container10_msg;
var dance,exit;
var cover,img;
var count = 0,img_cnt;
var font = 60,pos = 80,left = 950;
var img_list = ['ordering/ordering_img/chik1.png','ordering/ordering_img/chik2.png','ordering/ordering_img/chik3.png'];

function print_msg(){
	img.item(count).setAttribute('src','ordering/ordering_img/bg.png');
	dance.style.top = pos +'px';
	dance.style.left= left +'px';
	pos+=90;
	left-=30;
	dance.setAttribute('src','ordering/ordering_img/messenger.gif');
	dance.style.visibility ='visible'; 
	if(count==0){
		container9_msg.item(1).style.visibility = 'visible';
		count++;
		setTimeout(hatch,1650);
	}	
	else if(count==1){
		font-=3;
		container8_msg.item(1).style.fontSize = font+'px';
		container8_msg.item(1).style.visibility = 'visible';
		count++;
		setTimeout(hatch,1650);
	}	
	else if(count==2){
		font-=3;
		container7_msg.item(1).style.fontSize = font+'px';
		container7_msg.item(1).style.visibility = 'visible';
		count++;
		setTimeout(hatch,1650);
	}
	else if(count==3){
		font-=3;
		container6_msg.item(1).style.fontSize = font+'px';
		container6_msg.item(1).style.visibility = 'visible';
		count++;
		setTimeout(hatch,1650);
	}	
	else if(count==4){
		font-=3;
		container5_msg.item(1).style.fontSize = font+'px';
		container5_msg.item(1).style.visibility = 'visible';
		count++;
		window.scroll(0,450);
		setTimeout(hatch,1650);
	}	
	else if(count==5){
		font-=3;
		container4_msg.item(1).style.fontSize = font+'px';
		container4_msg.item(1).style.visibility = 'visible';
		count++;
		setTimeout(hatch,1650);
	}	
	else if(count==6){
		font-=3;
		container3_msg.item(1).style.fontSize = font+'px';
		container3_msg.item(1).style.visibility = 'visible';
		count++;
		setTimeout(hatch,1650);
	}	
	else if(count==7){
		font-=3;
		container2_msg.item(1).style.fontSize = font+'px';
		container2_msg.item(1).style.visibility = 'visible';
		count++;
		setTimeout(hatch,1650);
	}
	else if(count==8){
		font-=3;
		container1_msg.item(1).style.fontSize = font+'px';
		container1_msg.item(1).style.visibility = 'visible';
		dance.setAttribute('src','ordering/ordering_img/messenger2.png');
		exit.style.opacity = 1;
	}
				
}
function welcome(){
	if(img_cnt<6){
		img.item(count).setAttribute('src',img_list[img_cnt%3]);
		img_cnt++;
		setTimeout(welcome,200);			
	}
	else{
		setTimeout(print_msg,500);
	}
}

function hatch(){
	dance.setAttribute('src','ordering/ordering_img/messenger1.png');
	img.item(count).setAttribute('src','ordering/ordering_img/hatch.gif');
	img_cnt = 0;
	setTimeout(welcome,3000);	
}

function bg_play(){
	bg = new Audio("ordering/ordering_img/background.wav");
	bg.volume = 0.3;
	bg.play();
}
function initialize(){
	container1 = document.getElementById('container1');
	container1_msg = container1.getElementsByTagName('div');
	console.log(container1_msg.item(1));
	
	container2 = document.getElementById('container2');
	container2_msg = container2.getElementsByTagName('div');
	console.log(container2_msg.item(1));
	
	container3 = document.getElementById('container3');
	container3_msg = container3.getElementsByTagName('div');
	console.log(container3_msg.item(1));
	
	container4 = document.getElementById('container4');
	container4_msg = container4.getElementsByTagName('div');
	console.log(container4_msg.item(1));
	
	container5 = document.getElementById('container5');
	container5_msg = container5.getElementsByTagName('div');
	console.log(container5_msg.item(1));
	
	container6 = document.getElementById('container6');
	container6_msg = container6.getElementsByTagName('div');
	console.log(container6_msg.item(1));
	
	container7 = document.getElementById('container7');
	container7_msg = container7.getElementsByTagName('div');
	console.log(container7_msg.item(1));	
	
	container8 = document.getElementById('container8');
	container8_msg = container8.getElementsByTagName('div');
	console.log(container8_msg.item(1));	
	
	container9 = document.getElementById('container9');
	container9_msg = container9.getElementsByTagName('div');
	console.log(container9_msg.item(1));
	
	container10 = document.getElementById('container10');
	container10_msg = container10.getElementsByTagName('div');
	console.log(container10_msg.item(1));
	
	bg = new Audio("ordering/ordering_img/background.wav");
	bg.volume = 0.3;
	bg.play();		
	time2 = setInterval(bg_play,13500);	
	
	dance = document.getElementById('dance');
	cover = document.getElementById('cover');
	img = cover.getElementsByTagName('img');
	exit = document.getElementById('exit');
	setTimeout(hatch,1500);					
}

window.onload = initialize;