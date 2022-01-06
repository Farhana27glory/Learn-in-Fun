// JavaScript Document
var container,img,body_img;
var blink_cnt=0;
var list = ['images/menu_img/star2.png','images/menu_img/star3.png','images/menu_img/star4.png','images/menu_img/star3.png','images/menu_img/star2.png'];

var add,number,subtrction,order,comparison,odd_even;
var add_div,number_div,subtrction_div,order_div,comparison_div,odd_even_div;

var time1,time2;


//menu item number
function view_number(){
	number.style.opacity = 1;
	
}
function vanish_number(){	
	number.style.opacity = 0;
}

//menu item comparison
function view_odd_even(){
	odd_even.style.opacity = 1;
	
}
function vanish_odd_even(){
	odd_even.style.opacity = 0;	
}


//menu item addition
function view_add(){
	add.style.opacity = 1;
	
}
function vanish_add(){
	add.style.opacity = 0;	
}

//menu item subtraction
function view_subtraction(){
	subtraction.style.opacity = 1;
	
}
function vanish_subtraction(){
	subtraction.style.opacity = 0;	
}

//menu item order
function view_order(){
	order.style.opacity = 1;
	
}
function vanish_order(){
	order.style.opacity = 0;	
}
//menu item comparison
function view_comparison(){
	comparison.style.opacity = 1;
	
}
function vanish_comparison(){
	comparison.style.opacity = 0;	
}
function menu_play(){
	menu = new Audio("images/menu_img/menu.wav");
	menu.volume = 0.2;	
	menu.play();
}
function blink_star(){
	for(var i = 0; i<img.length;i++){
		img.item(i).setAttribute('src',list[blink_cnt]);
	}
	blink_cnt = (blink_cnt+1)%5;
}


function vanish(){
//	container.style.backgroundImage = 'url(images/menu_img/background.jpg)';	
	
	for(var i = 0; i<img.length;i++){
		img.item(i).style.visibility = 'visible';
	}
	number_div.setAttribute('onMouseOver','view_number()');
	odd_even_div.setAttribute('onMouseOver','view_odd_even()');
	add_div.setAttribute('onMouseOver','view_add()');
	subtraction_div.setAttribute('onMouseOver','view_subtraction()');
	order_div.setAttribute('onMouseOver','view_order()');
	comparison_div.setAttribute('onMouseOver','view_comparison()');
	
	time1 = setInterval(blink_star,120);	
}

function initialize(){
	container = document.getElementById('container');
	img = container.getElementsByTagName('img');
	body_img = document.getElementsByTagName('body');
	
	menu = new Audio("images/menu_img/menu.wav");
	menu.volume = 0.2;
	menu.play();		
	time2 = setInterval(menu_play,16000);
	
	number = document.getElementById('number');
	odd_even = 	document.getElementById('odd_even');
	add = document.getElementById('add');
	subtraction = document.getElementById('subtraction');
	order = document.getElementById('order');
	comparison = document.getElementById('comparison');	
	
	number_div = document.getElementById('number_div');
	odd_even_div = 	document.getElementById('odd_even_div');
	add_div = document.getElementById('add_div');
	subtraction_div = document.getElementById('subtraction_div');
	order_div = document.getElementById('order_div');
	comparison_div = document.getElementById('comparison_div');	
	
//	setTimeout(vanish,6000);
	vanish();
}

window.onload = initialize();