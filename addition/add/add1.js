var input1=0;
var input2=0;
var result=0;
var index1=0;
var index2=0;
var index3=0;
var str1="addition/add/_images/0.png";
var str2="addition/add/_images/0.png";
var str3="addition/add/_images/0.png";
var sign;
var toggle = 0;
var time1;
var time2;
var time3;
var time4;
var time5;
var ip1;
var ip2;
var op;
var opimg;
var show1;
var show2;
var question=0;
var sho1 = true;
var sho2 = true;
var again;
var dec1 = true;
var dec2 = true;
var dec3 = true;


function activateIP(){
	var num1 = document.getElementById("tree1");
	var num2 = document.getElementById("tree2");
	var num3 = document.getElementById("result");
	var sn =  document.getElementById("sign");
	var s1 = document.getElementById("number1");
	var s2 = document.getElementById("number2");
	var output =  document.getElementById("output");
	again = document.getElementById("again");
	again.onclick = clear;	
	
	ip1 = num1.getElementsByTagName("img");
	ip2 = num2.getElementsByTagName("img");
	op = num3.getElementsByTagName("img");
	sign = sn.getElementsByTagName("img");
	opimg = output.getElementsByTagName("img");
	show1 = s1.getElementsByTagName("img");
	show2 = s2.getElementsByTagName("img");	

	time4 = setInterval(signBlink,750);	
	time5 = setInterval(questionBlink,300);
}



function signBlink(){
	if( toggle==0 ){
		sign[0].setAttribute("src","");
		sign.item(0).style.visibility = 'hidden';
		toggle=1;	
	}
	else{
		sign[0].setAttribute("src","addition/add/_images/sign.png");
		sign.item(0).style.visibility = 'visible';
		toggle=0;	
	}		
}
function questionBlink(){
	show1.item(0).style.visibility = 'visible';	
	show2.item(0).style.visibility = 'visible';
	if( question == 0 || question == 3 ){
		if(sho1)
			show1[0].setAttribute("src","");
			show1.item(0).style.visibility = 'hidden';
		if(sho2)
			show2[0].setAttribute("src","");
			show2.item(0).style.visibility = 'hidden';
		question = (question+1)%4;	
	}
	else if(question==1){
		if(sho1)
			show1[0].setAttribute("src","addition/add/_images/question1.png");
			show1.item(0).style.visibility = 'visible';
		if(sho2)
			show2[0].setAttribute("src","addition/add/_images/question1.png");
			show2.item(0).style.visibility = 'visible';
		question++;	
	}
	else{
		if(sho1){
			show1[0].setAttribute("src","addition/add/_images/question2.png");	
			show1.item(0).style.visibility = 'visible';					
		}

		if(sho2){
			show2[0].setAttribute("src","addition/add/_images/question2.png");	
			show2.item(0).style.visibility = 'visible';					
		}

		question++;			
	}		
}

function printMessage(){
	
	opimg[0].setAttribute("src",str1);
	opimg[1].setAttribute("src","addition/add/_images/sign_small.png");
	opimg[2].setAttribute("src",str2);
	opimg[3].setAttribute("src","addition/add/_images/equal.png");
	opimg[4].setAttribute("src",str3);
	for(var a = 0; a<5; a++){
		opimg.item(a).style.visibility = 'visible';	
	}
	result=0;
	input1=0;
	input2=0;	
}

function drawImage3(){
	
	show1[0].setAttribute("src",str1);
	show1.item(0).style.visibility = 'visible';
	show2[0].setAttribute("src",str2);
	show2.item(0).style.visibility = 'visible';
	if(index3<=result){
		op[index3].setAttribute("src","addition/add/_images/fl_orange_small1.png");
		op.item(index3).style.visibility = 'visible';
		index3++;	
	}
	else{
		window.scrollTo(0,0);		
		console.log(result);
		clearInterval(time3);
		printMessage();		
	}	
}

function add(){
	if(dec3){
		clearInterval(time4);
		clearInterval(time5);
		dec1=false;
		dec2=false;
		dec3=false;
		result=input1+input2;
		sign[0].setAttribute("src","addition/add/_images/sign.png");
		sign.item(0).style.visibility = 'visible';	
		for(var a = 1; a< op.length; a++)
		{
			op[a].setAttribute("src","");
			op.item(a).style.visibility = 'hidden';
		}
		index3=1;
		time3 = setInterval(drawImage3,300);		
	} 		
}

function drawImage2(){
	if(index2<=input2){
		ip2[5-index2].setAttribute("src","addition/add/_images/fl_orange_small1.png");
		ip2.item(5-index2).style.visibility = 'visible';
		index2++;	
	}
	else{
		window.scroll(0,70);
		clearInterval(time2);	
	}		
}


function draw2(){
	for(var y = 1; y < ip2.length ; y++){
		ip2[y].setAttribute("src","");
		ip2.item(y).style.visibility = 'hidden';		
	}
		
	show2[0].setAttribute("src",str2);
	show2.item(0).style.visibility = 'visible';
	window.scrollTo(0,0);	
	time2 = setInterval(drawImage2,500);	
}

function setVal(v){
	if(dec2){
		input2=v;
		result=input1+input2;
		sho2 = false;		
		index2 = 1;
		str2="addition/add/_images/"+input2+".png";
		str3="addition/add/_images/"+result+".png";
		draw2();		
	}
	
}

function drawImage1(){
	if(index1<=input1){
		ip1[index1].setAttribute("src","addition/add/_images/fl_orange_small1.png");
		ip1.item(index1).style.visibility = 'visible';
		index1++;	
	}
	else{
		window.scroll(0,70);
		clearInterval(time1);	
	}		
}

function draw1(){
	for(var x = 1; x < ip1.length ; x++){
		ip1[x].setAttribute("src","");
		ip1.item(x).style.visibility = 'hidden';		
	}


	show1[0].setAttribute("src",str1);
	show2.item(0).style.visibility = 'visible';	
	window.scrollTo(0,0);		
	time1 = setInterval(drawImage1,500);	
}

function setValue(v){
	if(dec1){
		input1 = v;
		result = input1+input2;
		index1 = 1;		
		sho1 = false;
		str1="addition/add/_images/"+input1+"_.png";
		str3="addition/add/_images/"+result+".png";
		draw1();
		
	}
}

function clear(){
	clearInterval(time4);
	clearInterval(time5);
	for(var x = 1; x < ip1.length ; x++){
		ip1[x].setAttribute("src","");	
		ip1.item(x).style.visibility = 'hidden';	
	}

	for(var y = 1; y < ip2.length ; y++){
		ip2[y].setAttribute("src","");
		ip2.item(y).style.visibility = 'hidden';	
	}

	for(var a = 1; a< op.length; a++){
		op[a].setAttribute("src","");
		op.item(a).style.visibility = 'hidden';		
	}
	
	for(var a = 0; a<5; a++){	
		opimg[a].setAttribute("src","");
		opimg.item(a).style.visibility = 'hidden';
	}
	sho1=true;
	sho2=true;
	dec1=true;
	dec2=true;
	dec3=true;

	str1="addition/add/_images/0.png";
	str2="addition/add/_images/0.png";
	str3="addition/add/_images/0.png";
	
	input1=0;
	input2=0;	
	result=0;
	time4 = setInterval(signBlink,750);
	time5 = setInterval(questionBlink,300);	
}

window.onload = function(){
	activateIP();
	
}
