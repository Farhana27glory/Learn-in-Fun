// JavaScript Document
var item_cont,items,input;
var panel,button;
var message, display,display_cont;
var imgList = ['url(numbers/num_img/mango.png)','url(numbers/num_img/basket.gif)','url(numbers/num_img/fish.png)','url(numbers/num_img/tree.gif)','url(numbers/num_img/flower.png)','url(numbers/num_img/apple.png)'];
var numbers = ['একটি' , 'দুইটি' , 'তিনটি' , 'চারটি' , 'পাঁচটি' , 'ছয়টি' , 'সাতটি' , 'আটটি' , 'নয়টি' , 'দশটি'];
var item_name = ['আম' , 'ঝুড়ি', 'মাছ','গাছ','ফুল','ফল'];
var translate = ['০', '১','২','৩','৪','৫','৬','৭','৮','৯','১০'];  
var prev,current = 0, lim = 0, partition=2;
var bg_sound;
var time1;

function setObjects(){	
	if(input>lim && input !=10){
		button.item(input).style.opacity = 1;
		var str = 'setIP('+ (input+1) + ')';
		button.item(input).setAttribute('onClick',str);
		lim = input;		
	}
	if(input==10){
		display.item(0).style.marginLeft = '30px';
		display.item(0).style.marginTop = '30px';
		display.item(0).style.fontSize = '110px';
	}
	else{
		display.item(0).style.marginLeft = '55px';
		display.item(0).style.marginTop = '25px';
		display.item(0).style.fontSize = '120px';		
	}
	var str = numbers[input-1] +' ' + item_name[current-1];
	message.innerHTML = str;
	display.item(0).innerHTML = translate[input];	
}
function setIP(v){
	input = v;
	
	prev = current;
	while(prev == current || current>imgList.length){
		current = Math.floor((Math.random()*10)+1);	
	}
	
	for(var i = 0; i<items.length; i++){
		if(i<input){
			items[i].style.opacity = 1;
			items[i].style.backgroundImage = imgList[current-1];
			items[i].style.visibility = 'visible';			
		}
		else{
			items[i].style.opacity = 0;
			items[i].style.backgroundImage = '';	
			items[i].style.visibility = 'hidden';				
		}

	}
	display.item(0).innerHTML = '';
	message.innerHTML = '';
	setTimeout(setObjects,300);
}
function play(){
		bg_sound = new Audio("numbers/num_img/bgMusic.wav");
		bg_sound.play();	
}
function initialize(){
	item_cont = document.getElementById('item_cont');
	items = item_cont.getElementsByTagName('div');
	
	panel = document.getElementById('panel');
	button = panel.getElementsByTagName('div');
	
	message = document.getElementById('message');
	display_cont = document.getElementById('display');
	display = display_cont.getElementsByTagName('p');
	button.item(0).style.opacity = 1;
	bg_sound = new Audio("numbers/num_img/bgMusic.wav"); 
	bg_sound.play();
	time1 = setInterval(play,25500);

}
window.onload = initialize();