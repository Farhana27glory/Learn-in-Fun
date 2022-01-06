// JavaScript Document
var item_cont,item_class,items,input;
var panel,button;
var message;
var imgList = ['odd_even/odd_even_img/deer.png','odd_even/odd_even_img/duck.png','odd_even/odd_even_img/butterfly.gif','odd_even/odd_even_img/fish.png','odd_even/odd_even_img/house.png','odd_even/odd_even_img/flower.png','odd_even/odd_even_img/elephant.png','odd_even/odd_even_img/bird.png','odd_even/odd_even_img/cat.png'];
var imgList_rev = ['odd_even/odd_even_img/deer_rev.png','odd_even/odd_even_img/duck_rev.png','odd_even/odd_even_img/butterfly_rev.gif','odd_even/odd_even_img/fish_rev.png','odd_even/odd_even_img/house.png','odd_even/odd_even_img/flower.png','odd_even/odd_even_img/elephant_rev.png','odd_even/odd_even_img/bird_rev.png','odd_even/odd_even_img/cat_rev.png'];
var numbers = ['একটি' , 'দুইটি' , 'তিনটি' , 'চারটি' , 'পাঁচটি' , 'ছয়টি' , 'সাতটি' , 'আটটি' , 'নয়টি' , 'দশটি','এগারটি ', 'বারটি ', 'তেরটি ', 'চৌদ্দটি ', 'পনেরটি ', 'ষোলটি ', 'সতেরটি ', 'আঠারটি ', 'উনিশটি ', 'বিশটি '];
var num = ['এক ' , 'দুই ' , 'তিন ' , 'চার ' , 'পাঁচ ' , 'ছয় ' , 'সাত ' , 'আট ' , 'নয় ' , 'দশ ','এগার ', 'বার ', 'তের ', 'চৌদ্দ ', 'পনের ', 'ষোল ', 'সতের ', 'আঠার', 'উনিশ ', 'বিশ '];
var cross = ['odd_even/odd_even_img/cross1.png','odd_even/odd_even_img/cross2.png','odd_even/odd_even_img/cross3.png','odd_even/odd_even_img/cross2.png','odd_even/odd_even_img/cross1.png'];
var item_name = [' হরিণ' , ' হাঁস', 'প্রজাপতি','মাছ','বাড়ি','ফুল','হাতি','পাখি','বিড়াল'];   
var ding,math_ding,result_ding,bg_sound;
var prev,current = 0;
var bg_sound;
var cross_cnt = 0;
var again,menu;
var time1;


function resume(){
	result_ding.play();
	for(var j = 0;j<item_class.length;j++){
		item_class.item(j).style.visibility = 'hidden';	
	}	
	for(var j = 0;j<items.length;j++){
		items.item(j).style.visibility = 'hidden';	
	}
	for(var i = 0; i<button.length; i++){
		button.item(i).style.opacity = 1;
		var str	= 'setIP('+ (i+1) + ')';
		button.item(i).setAttribute('onClick',str);	
	}
	message.style.visibility = 'hidden';
	again.style.visibility = 'hidden';
	menu.style.visibility = 'hidden';		
}

function result(){
	math_ding.play();	
	message.style.height = '40px';
	message.style.width = '320px';
	message.style.fontSize = '30px';
	message.style.left = '350px';
	if(input%2==1){
		message.style.width = '340px';
		var str = num[input-1]+' একটি বিজোড় সংখ্যা';	
	}
	else{
		var str = num[input-1]+' একটি জোড় সংখ্যা';	
	}	
	message.innerHTML = str;
	again.style.visibility = 'visible';
	again.setAttribute('onClick','resume()');
	menu.style.visibility = 'visible';
}

function crossBlink(){
	if(cross_cnt<5){
		items.item(input).setAttribute('src',cross[cross_cnt]);
		items.item(input).style.visibility = 'visible';
		cross_cnt++;
		setTimeout(crossBlink,400);			
	}
	else{
		
		setTimeout(result,1000)	;
	}
}

function setIP(v){	
	input = v;
	console.log(input);
	ding.play();
	for(var i=0;i<button.length;i++){
		button.item(i).style.opacity = 1;	
		if(i!=input-1){
			button.item(i).style.opacity = 0.3;	
		}	
		button.item(i).setAttribute('onClick','');
	}
	
	prev = current;
	while(prev == current || current>imgList.length){
		current = Math.floor((Math.random()*10)+1);	
	}
	
	for(var j = 0; j<item_class.length; j++ ){
		item_class.item(j).style.visibility = 'hidden';	
	}
	
	var temp = Math.ceil((input)/2);
	for(var j = 0; j<temp; j++ ){
		item_class.item(j).style.visibility = 'visible';	
	}	
		
	for(var i=0; i<items.length;i++){
		if(i<input){
			items.item(i).style.visibility = 'visible';
			if(i%2==0){
				items.item(i).setAttribute('src',imgList[current-1]);	
			}
			else{
				items.item(i).setAttribute('src',imgList_rev[current-1]);	
					
			}
		}
		else{
			items.item(i).style.visibility = 'hidden';			
		}	
	}
	message.innerHTML = '';
	
	message.style.height = '50px';
	if(current==3 || current==9){
		message.style.width = '340px';		
	}
	else{
		message.style.width = '270px';		
	}
	message.style.fontSize = '45px';
	message.style.left = '390px';
	var str = numbers[input-1] +' ' + item_name[current-1];
	message.innerHTML = str;
	message.style.visibility = 'visible';
//	alert(message.innerHTML);	
	if(input%2==1){
		cross_cnt=0;
		setTimeout(crossBlink,100);	
	}
	else{
		setTimeout(result,2000);
	}
	again.style.visibility = 'hidden';
	again.setAttribute('onClick','');

}

function play(){
	bg_sound.pause()
	bg_sound = new Audio("odd_even/odd_even_img/background.wav");
	bg_sound.volume = 0.2;  
	bg_sound.play();	
}

function initialize(){
	item_cont = document.getElementById('item_cont');
	items = item_cont.getElementsByTagName('img');
	item_class = item_cont.getElementsByTagName('div');
	
	panel = document.getElementById('panel');
	button = panel.getElementsByTagName('div');
	
	message = document.getElementById('message');
	
	again = document.getElementById('again');
	menu = document.getElementById('menu');	
	
	ding = new Audio("odd_even/odd_even_img/DingLing.wav");
	math_ding = new Audio("odd_even/odd_even_img/ding.wav");
	result_ding = new Audio("odd_even/odd_even_img/ding1.wav");
		
//	button.item(0).style.opacity = 1;

	bg_sound = new Audio("odd_even/odd_even_img/background.wav"); 
	bg_sound.volume = 0.2; 
	bg_sound.play();
	time1 = setInterval(play,14000);

}
window.onload = initialize();