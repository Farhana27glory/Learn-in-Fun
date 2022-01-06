// JavaScript Document
var container,flower;
var blnk1=0, blnk2=0;
var button1,panel1,button2,panel2,message1,message2,button_div1,button_div2;
var pos1 = 150,pos2 = 100,pos3 = 50;
var count=0;
var input1,input2,ip1;
var height = 630;
var time1,time2,time3,time4,time5,time6,time7,time8,time9;;
var equal,unequal,exit;

var ding,complete,background;

var translation = ['০','১','২','৩','৪','৫','৬','৭','৮','৯','১০','১১','১২','১৩','১৪','১৫','১৬','১৭','১৮','১৯','২০','২১','২২','২৩','২৪','২৫','২৬','২৭','২৮','২৯','৩০'];

function showPanel(){
	background.sound = 0.2;
	background.play();
	
	for(var i = 1;i<button_div1.length;i++){
		var str = 'setIP2(' + (i) + ')';	
		button_div1.item(i).setAttribute('onClick',str);
	}
	message1.style.fontSize = '22px';
	message1.innerHTML = 'আরেকটি সংখ্যা বেছে নাও';
	panel1.style.opacity=1;	
	time8 = setInterval(blink_msg2,700);
}

function reduce(){

	if(ip1>input2){
		ip1--;		
		flower.item(ip1).style.visibility = 'hidden';
		flower.item(ip1).setAttribute('src','');

//		console.log(ip1,flower.item(ip1).getAttribute('src'));
		ding =  new Audio("comparison/images_comp/DingLing.wav");
		ding.play();
	}
	else{
		clearInterval(time6);
		setTimeout(printMsg ,200);
			
	}
		
}
function increase(){
//	console.log(count);
	if(count>=15){
		height = 580;	
	}
	if(count<=input2-1){
		var i = count;
		var j = count+1;
		var k = count+2;	
		
		if(pos1==150)
			flower.item(i).style.visibility ='visible';
		if(pos1<height){
			pos1++;
			flower.item(i).style.top = pos1+'px';
		}
		if(j<input2){
			if(pos2==150)
				flower.item(j).style.visibility ='visible';
			if(pos2<height){
				pos2++;
				flower.item(j).style.top = pos2+'px';
			}			
		}
		if(k<input2){
			if(pos3==150)
				flower.item(k).style.visibility ='visible';
			if(pos3<height){
				pos3++;
				flower.item(k).style.top = pos3+'px';
			}			
		}
		
		if((i==input2-1 && pos1==height)  || (j ==input2-1 && pos2 ==height) || (k==input2-1 && pos3==height)){	
			clearInterval(time9);
			background.pause();		
			setTimeout(printMsg ,200);
		}
		else{
			if(pos3==height){
				count+=3;
				pos1 = 150;
				pos2 = 100;
				pos3 = 50;
				if(k==14){
					height = 580;	
				}
					
			}
			
		}

						
	}
	
	
}
function printMsg(){
	console.log('Showing output message :');	
//	alert('PRINT');
	complete.play();
	if(input1==input2){
		console.log('Output : Two inputs are equal');
		var str = 'দুটি সংখ্যা সমান';
		equal.innerHTML = str;
		equal.style.opacity = 1;
	}
	else if(input1<input2){
		console.log('Output : First input is smaller than second input');
		var str = translation[input1] + ' ছোট ' + translation[input2] + ' বড় ';
		unequal.innerHTML = str;
		unequal.style.opacity = 1;	
	}
	else{
		console.log('Output : First input is greater than second input');
		var str = translation[input1] + ' বড় ' + translation[input2] + ' ছোট ';
		unequal.innerHTML = str;
		unequal.style.opacity = 1;		
	}
	exit.style.opacity = 1;
}

function adjust5(){
	if(pos3<height){
		if(pos3 == 150)	
			flower.item(input1).style.visibility = 'visible';
		pos3++;
		flower.item(input1).style.top = pos3 + 'px';	
	}

		if(pos3==height){
			clearInterval(time5);
				pos1=150;
				pos2=100;
				pos3=50;
			time9 = setInterval(increase,1);				
						
		}	
		
}
function adjust4(){
	if(pos3<height){
		if(pos3 == 150)	
			flower.item(input1).style.visibility = 'visible';
		pos3++;
		flower.item(input1).style.top = pos3 + 'px';	
	}

		if(pos3==height){
			clearInterval(time4);
			background.pause();
			setTimeout(printMsg,300);
			
		}	
		
}

function adjust3(){

	if(pos2<height){
		if(pos2 == 150)	
			flower.item(input1).style.visibility = 'visible';	
		pos2++;
		flower.item(input1).style.top = pos2 + 'px';
	}
	
	if(pos3<height){
		if(pos3 == 150)	
			flower.item(input1+1).style.visibility = 'visible';	
		pos3++;
		flower.item(input1+1).style.top = pos3 + 'px';
	}

		if(pos3==height){
				clearInterval(time3);				
				pos1=150;
				pos2=100;
				pos3=50;
				time9 = setInterval(increase,1);			
		}
		
}
function adjust2(){

	if(pos2<height){
		if(pos2 == 150)	
			flower.item(input1).style.visibility = 'visible';	
		pos2++;
		flower.item(input1).style.top = pos2 + 'px';
	}
	
	if(pos3<height){
		if(pos3 == 150)	
			flower.item(input1+1).style.visibility = 'visible';	
		pos3++;
		flower.item(input1+1).style.top = pos3 + 'px';
	}

		if(pos3==height){
			clearInterval(time2);
			background.pause();
			setTimeout(printMsg,200);			
		}
		
}

function adjust1(){	
	if(pos2<height){
		if(pos2 == 150)	
			flower.item(input1).style.visibility = 'visible';
		pos2++;
		flower.item(input1).style.top = pos2 + 'px';
		console.log(pos2);	
	}

		if(pos2==height){
			clearInterval(time1);
			background.pause();
			setTimeout(printMsg,200);			
		}		
		
}

function adjust(){
	
	if(input1%3==2){
/*				if(count+2==14)
					height=580;*/
//				count = input1+1;
				if(input1+1==input2)
					time4=setInterval(adjust4,1);
				else
					time5 = setInterval(adjust5,1);				
	}
	else{				
				
/*				if(count+2==14)
					height=580;*/
//				count=input1+2;
				if(input2-input1==1){
					time1=setInterval(adjust1,1);	
				}
				else if(input2-input1==2){
					time2=setInterval(adjust2,1);
					
				}
				else{
					time3=setInterval(adjust3,1);					
				}																		
	}
			 
		
}


function dropFlower(){
	if(count<=input1-1){
		var i = count;
		var j = count+1;
		var k = count+2;
		
		if(pos1==150)
			flower.item(i).style.visibility ='visible';
		if(pos1<height){
			pos1++;
			flower.item(i).style.top = pos1+'px';
		}
		if(j<input1){
			if(pos2==150)
				flower.item(j).style.visibility ='visible';
			if(pos2<height){
				pos2++;
				flower.item(j).style.top = pos2+'px';
			}			
		}
		if(k<input1){
			if(pos3==150)
				flower.item(k).style.visibility ='visible';
			if(pos3<height){
				pos3++;
				flower.item(k).style.top = pos3+'px';
			}			
		}
		
		if((i==input1-1 && pos1==height)  || (j ==input1-1 && pos2 ==height) || (k==input1-1 && pos3==height)){			
			setTimeout(showPanel,300);
		}
		else{
			if(pos3==height){
				count+=3;
				pos1 = 150;
				pos2 = 100;
				pos3 = 50;
				if(k==14){
					height = 580;	
				}
					
			}
			setTimeout(dropFlower,1);			
		}

						
	}

}

function call_increase(){

	time9 = setInterval(increase,1);	
}

//input setting functions
function setIP2(v){
	clearInterval(time8);
	input2 = v;
	console.log('Second input is '+input2);	
	if(input1==input2){
		console.log('Second input is equal to first input');	
	}
	else if(input1<input2){
		console.log('Second input is greater than first input');	
	}
	else{
		console.log('Second input is smaller than first input');	
	}
	background.pause();	
	message1.innerHTML = v;
	panel1.style.opacity=0;
	for(var i = 1;i<button_div1.length;i++){
		button_div1.item(i).setAttribute('onClick','');
	}
	
	pos1 = 150;
	pos2 = 100;
	pos3 = 50;	
		
	if(input1==input2){
		setTimeout(printMsg,300);	
	}
	else if(input1>input2){
		ip1=input1;
		time6=setInterval(reduce,1000);	
	}
	else{
		background.volume = 0.2;
		background.play();
		count = (Math.ceil(input1/3))*3;
		console.log(count);
		if(input1%3==0){
//			count=count+3;
			setTimeout(call_increase,300);			
		}

		else{
			setTimeout(adjust,300);

		}			
	}
}

function setIP1(v){
	clearInterval(time8);	
	background.volume = 0.2;
	background.play();
	input1 = v;
	console.log('First input is '+input1);
//	console.log(input1);
	background.volume = 0.2;	
	background.play();
	message1.innerHTML = v;
	panel1.style.opacity=0;
	for(var i = 1;i<button_div1.length;i++){
		button_div1.item(i).setAttribute('onClick','');
	}	
	setTimeout(dropFlower,300);
//	time8 = setInterval(blink_msg2,700);
}

//blinking prompt functions
function blink_msg2(){
	blnk2 = (blnk2+1)%2;
	if(blnk2==0){
		message1.innerHTML = '';
		message1.style.color = '#373737 ';		
	}
	else{
		message1.innerHTML = 'আরেকটি সংখ্যা বেছে নাও';
		message1.style.color = '#C9F';		
	}		 

	
		
}

function blink_msg1(){	
	blnk1=(blnk1+1)%2;
	if(blnk1==0){
		message1.innerHTML = '';
		message1.style.color = '#373737 ';		
	}
	else{
		message1.innerHTML = 'একটি সংখ্যা বেছে নাও';
		message1.style.color = '#C9F';		
	}		
		
}

function initialize(){
	container = document.getElementById('container');
	flower = container.getElementsByTagName('img');	
	
	for(var i = 0;i<flower.length;i++){
//		console.log(flower.item(i));
		if(i%3==0){
			flower.item(i).style.top = 150+'px';	
		}
		else if(i%3==1){
			flower.item(i).style.top = 100+'px';	
		}
		else if(i%3==2){
			flower.item(i).style.top = 50+'px';	
		}
		flower.item(i).style.left = 200+ (i%15)*50 +'px';
	}
	ding =  new Audio("comparison/images_comp/DingLing.wav");
	complete = new Audio("comparison/images_comp/ding1.wav");
	
	panel1 = document.getElementById('panel1');	
	message1 = document.getElementById('panelcont1');
	button1 = panel1.getElementsByTagName('p');
	button_div1 = panel1.getElementsByTagName('div');

	equal = document.getElementById('equal');
	unequal = document.getElementById('unequal');
	
	exit = document.getElementById('exit');	
	
	background = new Audio("comparison/images_comp/background.wav");	
	background.volume = 0.2;
	background.play();
	window.scroll(0,120);
	time8 = setInterval(blink_msg1,700);	
}
window.onload = initialize();