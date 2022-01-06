// JavaScript Document
var item_cont,item_class,items,input;
var panel,button;
var message, display,display_cont;
var imgList = ['numbers/num_img1/mango.png','numbers/num_img1/basket.gif','numbers/num_img1/fish.png','numbers/num_img1/tree.gif','numbers/num_img1/flower.png','numbers/num_img1/apple.png','numbers/num_img1/elephant.png','numbers/num_img1/hut.png','numbers/num_img1/ball.png','numbers/num_img1/bird.png'];
var numbers = ['এগারটি ', 'বারটি ', 'তেরটি ', 'চৌদ্দটি ', 'পনেরটি ', 'ষোলটি ', 'সতেরটি ', 'আঠারটি ', 'উনিশটি ', 'বিশটি ', 'একুশটি ', 'বাইশটি ', 'তেইশটি ', 'চব্বিশটি ', 'পঁচিশটি ', 'ছাব্বিশটি ', 'সাতাশটি ', 'আটাশটি ', 'ঊনত্রিশটি ', 'ত্রিশটি '];
var item_name = ['আম' , 'ঝুড়ি', 'মাছ','গাছ','ফুল','ফল','হাতি','বাড়ি','বল','পাখি'];  
var prev,current = 0, lim = 10, partition=2;
var bg_sound;
var time1;

var translation = ['০','১','২','৩','৪','৫','৬','৭','৮','৯','১০','১১','১২','১৩','১৪','১৫','১৬','১৭','১৮','১৯','২০','২১','২২','২৩','২৪','২৫','২৬','২৭','২৮','২৯','৩০','৩১','৩২','৩৩'];

function resume(){
	for(var i = 0; i<=lim-10; i++){
		button.item(i).style.opacity = 1;		
	}
	if(input>lim && input !=30){
		button.item(input-10).style.opacity = 1;
		var str = 'setIP('+ (input+1) + ')';
		button.item(input-10).setAttribute('onClick',str);
		lim = input;		
	}		
}

function setObjects(){	
	var str = numbers[input-1-10] +' ' + item_name[current-1];
	message.innerHTML = str;
	display.item(0).innerHTML = translation [input];	
	setTimeout(resume,1000);	
}
function setIP(v){
	window.scroll(0,100);	
	input = v;
	console.log(input);
	
	prev = current;
	while(prev == current || current>imgList.length){
		current = Math.floor((Math.random()*10)+1);	
	}
	console.log(imgList[current-1]);
	
	for(var j = 0; j<item_class.length; j++ ){
		item_class.item(j).style.visibility = 'hidden';	
	}
	
	var temp = Math.ceil((input)/3);
	for(var j = 0; j<temp; j++ ){
		item_class.item(j).style.visibility = 'visible';	
	}
		
	for(var i = 0; i<items.length; i++){
		if(i<input){
			items.item(i).style.opacity = 1;
			items.item(i).setAttribute('src',imgList[current-1]);
			items.item(i).style.visibility = 'visible';			
		}
		else{
			items.item(i).style.opacity = 0;
			items.item(i).setAttribute('src','');
			items.item(i).style.visibility = 'hidden';				
		}

	}
	
	for(var i = 0;i<button.length;i++){
		button.item(i).style.opacity = 0.3;	
	}
		
	display.item(0).innerHTML = '';
	message.innerHTML = '';
	setTimeout(setObjects,300);
}
function play(){
		bg_sound = new Audio("numbers/num_img1/bgMusic.wav");
		bg_sound.play();	
}
function initialize(){
	item_cont = document.getElementById('item_cont');
	items = item_cont.getElementsByTagName('img');
	item_class = item_cont.getElementsByTagName('div');
	panel = document.getElementById('panel');
	button = panel.getElementsByTagName('div');
	
	message = document.getElementById('message');
	display_cont = document.getElementById('display');
	display = display_cont.getElementsByTagName('p');
	button.item(0).style.opacity = 1;

	bg_sound = new Audio("numbers/num_img1/bgMusic.wav"); 
	bg_sound.play();
	time1 = setInterval(play,25500);

}
window.onload = initialize();// JavaScript Document