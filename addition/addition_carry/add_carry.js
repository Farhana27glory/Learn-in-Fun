var stack1,stack2,flower1,flower2,container1,container2,opacity = 0,display,ip1,ip2;
var button1,panel1,button2,panel2,message1,message2,button_div1,button_div2;
var blnk1=0,blnk2=0;
var unic,dec,bar,sign;
var car, crane,stand,carry;
var dig1,dig2,dig3,dig4,dig5,dig6,dig7;

var again,menu;
var car_cnt=0;
var ding,math_ding,result_ding,car_sound;
var input1,input2;
var rem1,rem2,rem3,cubes1, cubes2,cubes3;
var cnt,pos,up_crane=300,up_car=470;
var position,prompt_msg,addition_msg,explain_cont,explain;
var time1,time2, time3,time4,time5,time6,time7,time8;


var translation = ['০','১','২','৩','৪','৫','৬','৭','৮','৯','১০','১১','১২','১৩','১৪','১৫','১৬','১৭','১৮','১৯','২০','২১','২২','২৩','২৪','২৫','২৬','২৭','২৮','২৯','৩০','৩১','৩২','৩৩','৩৪','৩৫','৩৬','৩৭','৩৮','৩৯‌','৪০','৪১','৪২','৪৩','৪৪','৪৫','৪৬','৪৭','৪৮','৪৯','৫০','৫১','৫২','৫৩','৫৪','৫৫','৫৬','৫৭','৫৮','৫৯','৬০','৬১','৬২','৬৩','৬৪','৬৫','৬৬','৬৭','৬৮','৬৯','৭০','৭১','৭২','৭৩','৭৪','৭৫','৭৬','৭৭','৭৮','৭৯','৮০'];

function result(){
	result_ding.volume = 0.4;
	result_ding.play();
	position.style.opacity = 0;
	position.style.height = '0px';
	position.style.width = '0px';
	
	addition_msg1.style.opacity = 0;
	addition_msg1.style.height = '0px';
	addition_msg1.style.width = '0px';
	
	explain_cont.style.opacity = 0;
	explain_cont.style.height = '0px';
	explain_cont.style.width = '0px';
	
	for(var a = 0;a<explain.length;a++){
		explain.item(a).style.opacity = 0;
		explain.item(a).height = 0;
		explain.item(a).width = 0;	
	}	
	
	prompt_msg.style.height = '0px';
	prompt_msg.style.width = '0px';
	
	again.style.visibility = 'visible';
	again.setAttribute('src','addition/addition_carry/add_carry_img/again.png');

	menu.style.visibility = 'visible';
	menu.setAttribute('src','addition/addition_carry/add_carry_img/menu.png');
	
	for(var i = 1;i<5;i++){
		container1.item(i).style.opacity = 1;
		container2.item(i).style.opacity = 1;
	}	
	

	str = translation[input1] + ' + ' + translation[input2] + ' = ' + translation[(input1+input2)] ;
	console.log('Testing Function result() :');
	console.log('Showing output : '+str);
	display.style.height = '50px';
	display.innerHTML = str;
	display.style.opacity = 1;

//	console.log(sign.style.visibility+' '+bar.style.visibility);
	
	
}

function adjust(){
	math_ding.volume = 0.4;
	math_ding.play();
	carry.style.visibility = 'hidden';

	unic.style.color = '#9B5F0D';
	dig2.style.color = '#9B5F0D';
	dig4.style.color = '#9B5F0D';
	dig7.style.color = '#9B5F0D'; 
	
	for(var i = 1;i<5;i++){
		container1.item(i).style.opacity = 1;
		container2.item(i).style.opacity = 1;
	}	
		
	setTimeout(result,1000);
		
}

function compute_dec(){
		math_ding.volume = 0.4;
		math_ding.play();		
		if(input1<10 && input2<10){;}
		else if(rem1+rem2<10){	
				
			addition_msg1.innerHTML = translation[cubes1] + '	দশ  +  ' +	translation[cubes2] + ' দশ  = ' + translation[(cubes1+cubes2)]+ ' দশ';
			addition_msg1.style.width = '350px';
			addition_msg1.style.height = '50px';
			
			addition_msg1.style.marginLeft='155px';
			addition_msg1.style.opacity = 1;
						
		}
		else{
			addition_msg1.innerHTML = translation[cubes1] + '	দশ  +  ' +	translation[cubes2] + ' দশ  + '+ translation[1] +' দশ  = ' + translation[(cubes1+cubes2+1)]+ ' দশ';
			addition_msg1.style.width = '470px';
			
			addition_msg1.style.marginLeft='110px';	
			addition_msg1.style.opacity = 1;			
			
		}	
	
		dig6.innerHTML = translation[cubes3];
		setTimeout(adjust,2000);	
}



function set_dec(){
	math_ding.volume = 0.4;
	math_ding.play();
		
	for(var i = 2;i<5;i++){
		container1.item(i).style.opacity = 1;
		container2.item(i).style.opacity = 1;

		container1.item(i).style.borderWidth = '3px';
		container1.item(i).style.borderColor = '#039';	
		

		container2.item(i).style.borderWidth = '3px';
		container2.item(i).style.borderColor = '#039';			
	}
	if(rem1==0 || rem1+rem2>=10){
		container1.item(1).style.opacity = 1;	
		
		container1.item(1).style.borderWidth = '3px';
		container1.item(1).style.borderColor = '#039';			
	}
	
	if(rem2==0){
		container2.item(1).style.opacity = 1;
		
		container2.item(1).style.borderWidth = '3px';
		container2.item(1).style.borderColor = '#039';			
	}
	if(rem1!=0 && rem1+rem2<10){
		container1.item(1).style.opacity = 0.5;	
	}	
	
	if(rem2!=0 && rem1+rem2>10){
		container2.item(1).style.opacity = 0.5;	
	}
	
	if(input1>9 || input2>9){
		position.innerHTML = ' দশকের যোগ';
		explain_cont.style.opacity = 0;
		explain_cont.style.height = '0px';
		explain_cont.style.width = '0px';						
	}
					
		
	unic.style.color = '#C8C8C8';
	dig2.style.color = '#C8C8C8';
	dig4.style.color = '#C8C8C8';
	dig7.style.color = '#C8C8C8';
		
	dec.style.color = '#039';
	dig1.style.color = '#039';
	dig3.style.color = '#039';
	dig6.style.color = '#039';
	
	setTimeout(compute_dec,500);	
}

function exit_car(){
	if(pos<800){
		if(pos==140){
			car_sound = new Audio("addition/addition_carry/add_carry_img/car.wav");
			car_sound.volume = 0.4;
			car_sound.play(); 			
		}
		pos++;
		car.style.left = pos +'px';	
		
		setTimeout(exit_car,2);
	}
	else{
				
		car_sound.pause();
		car.style.visibility = 'hidden';
		crane.style.visibility = 'hidden';
		car.style.visibility = 'hidden';	
		stand.style.visibility = 'hidden';

		
		container2.item(1).style.opacity = .5;
		if(rem1+rem2<10)
			container1.item(1).style.opacity = .5;
		else
			container1.item(1).style.opacity = 1;
		for(var i = 2;i<5;i++){
			container1.item(i).style.opacity = 1;
			container2.item(i).style.opacity = 1;
		}			
		
		setTimeout(set_dec,1000);
		
	}
}


function crane_back(){
	if(up_crane<370){
		up_crane++;
		up_car++;
		car.style.top = up_car+'px';
		crane.style.top = up_crane+'px';
		setTimeout(crane_back,2);
	}
	else{				
		setTimeout(exit_car,500);
	}
}

function car_back(){
	if(pos>140){
		if(pos==440){
			car_sound = new Audio("addition/addition_carry/add_carry_img/car.wav");
			car_sound.volume = 0.4;
			car_sound.play();					
		}
		
		pos--;
		car.style.left = pos +'px';	
		
		setTimeout(car_back,2);
	}
	else{
				
		car_sound.pause();
		setTimeout(crane_back,500);
	}
}

function drop_carry(){
	if(pos<440){
		if(pos==140){
			car_sound = new Audio("addition/addition_carry/add_carry_img/car.wav");
			car_sound.volume = 0.4;
			car_sound.play();
		}
		pos++;
		car.style.left = pos +'px';
		setTimeout(drop_carry,2);
	}
	else{
		car_sound.pause();
		math_ding.volume = 0.4;
		math_ding.play();
		car.setAttribute('src','addition/addition_carry/add_carry_img/car.png');
		carry.setAttribute('src','addition/addition_carry/add_carry_img/carry.png');
		carry.style.visibility = 'visible';		
 
		setTimeout(car_back,1000);
	}
}

function mov_crane(){
	if(up_crane>215){
		up_crane--;
		up_car--;
		car.style.top = up_car+'px';
		crane.style.top = up_crane+'px';
		setTimeout(mov_crane,2);
	}
	else{		 
		setTimeout(drop_carry,1000);
	}
}

function reach_crane(){
	if(pos>140){		
		if(pos==535){
			car_sound = new Audio("addition/addition_carry/add_carry_img/car.wav");
			car_sound.volume = 0.4;
			car_sound.play(); 
		}
			
		pos--;
		car.style.left = pos +'px'	;
		setTimeout(reach_crane,2);
	}
	else{
		car_sound.pause();
		setTimeout(mov_crane,1000);
	}
}

function mov_car(){
	
	if(pos==700){
		car_sound = new Audio("addition/addition_carry/add_carry_img/car.wav");
		car_sound.volume = 0.4;		
		car_sound.play(); 
		
	}
	if(pos>535){
		pos--;
		car.style.left = pos +'px'	;
		setTimeout(mov_car,2)
	}
	else{
			
		car_sound.pause();
		math_ding.volume = 0.4;
		math_ding.play();
		dig7.innerHTML = '';
		dig7.style.width = '50px';
		dig7.style.paddingLeft = '25px';
		var b = (rem1+rem2)%10;
		dig7.innerHTML = translation[b];
		car.setAttribute('src','addition/addition_carry/add_carry_img/car_carry.png');	
		
		setTimeout(reach_crane,1000);
	}
}

function set_carrier(){	
	console.log('Starting carry simulation');		
	stand.setAttribute('src','addition/addition_carry/add_carry_img/stand.png');
	stand.style.visibility = 'visible';
				
	crane.setAttribute('src','addition/addition_carry/add_carry_img/crane.png');
	crane.style.visibility = 'visible';
						
	pos = 700;
	car.style.left = pos + 'px';
	car.setAttribute('src','addition/addition_carry/add_carry_img/car.png');
	car.style.visibility = 'visible';
	setTimeout(mov_car,200);	
}
function set_flower(){

	if(rem1 ==0 || rem2 == 0);
	else if(rem1+rem2>10){
		
		for(var i=0;i<10;i++)
		{
			flower1.item(i).style.visibility = 'visible';	
			flower2.item(i).style.visibility = 'hidden';
		}
		for(var i = 0;i<10;i++){
			flower2.item(9-i).style.visibility = 'hidden';
		}	
		for(var i = 0;i<(rem1+rem2)%10;i++){
			flower2.item(9-i).style.visibility = 'visible';
		}		
		
	}
	else{
		for(var i=0;i<10;i++)
		{	
			flower2.item(i).style.visibility = 'hidden';
		}
		container2.item(1).style.visibility = 'hidden';		
		for(var i = 0;i<rem1+rem2;i++){
			flower1.item(9-i).style.visibility = 'visible';	
		}
		for(var i = rem1+rem2;i<10;i++){
			flower1.item(9-i).style.visibility = 'hidden';	
		}
	}
	if(input1+input2<10){
		setTimeout(result,2000);
	}
	else if(input1<10 && input2<10){
		setTimeout(set_dec,1000);
	}
	else if(rem1+rem2<10){
		setTimeout(set_dec,1000);
	}
	else{			
		setTimeout(set_carrier,1000);		
	}
			
}

function compute_unic(){
	math_ding.volume = 0.4;
	math_ding.play();
	if(input1+input2<10){		
		dig6.innerHTML = translation[input1+input2];
		dig6.style.color = '#9B5F0D';
		
		addition_msg1.innerHTML = translation[input1] + '  +  ' +	translation[input2] + ' = ' + translation[(input1+input2)];
		addition_msg1.style.width = '170px';
		addition_msg1.style.marginLeft = '240px';	
		addition_msg1.style.opacity = 1;
		
		
	}
	else if(input1<10 && input2<10){
			dig7.style.width = '50px';
			dig7.style.paddingLeft = '25px';
			dig7.innerHTML = translation[rem3];
								
			addition_msg1.innerHTML = translation[input1] + '  +  ' +	translation[input2] + ' = ' + translation[(input1+input2)];
			addition_msg1.style.width = '190px';
			addition_msg1.style.marginLeft = '230px';
			addition_msg1.style.opacity = 1;
			
			explain.item(0).innerHTML = translation[(input1+input2)];
			explain.item(2).innerHTML = translation[(input1+input2)%10];
			explain_cont.style.opacity = 1;
		
	}
	else if(input1>=10 || input2>=10){
		if(rem1+rem2<10){
			dig7.style.width = '50px';
			dig7.style.paddingLeft = '25px';
			dig7.innerHTML = translation[rem3];
			
			addition_msg1.innerHTML = translation[rem1] + '  +  ' +	translation[rem2] + ' = ' + translation[(rem1+rem2)];
			addition_msg1.style.width = '170px';
			addition_msg1.style.marginLeft = '240px';	
			addition_msg1.style.opacity = 1;	
			
		}
		else{
			var a = rem1+rem2;
			dig7.innerHTML = translation[a];
								
			addition_msg1.innerHTML = translation[rem1] + '  +  ' +	translation[rem2] + ' = ' + translation[(rem1+rem2)];
			addition_msg1.style.width = '190px';
			addition_msg1.style.marginLeft = '230px';	
			addition_msg1.style.opacity = 1;	
						
			explain.item(0).innerHTML = translation[(rem1+rem2)];
			explain.item(2).innerHTML = translation[(rem1+rem2)%10]	;	
			explain_cont.style.opacity = 1;			
		}
	}
	setTimeout(set_flower,300);	
}

function set_unic(){
	
	for(var i = 2;i<5;i++){
		container1.item(i).style.opacity = 0.5;
		container2.item(i).style.opacity = 0.5;
	}
	if(rem1==0){
		container1.item(1).style.opacity = 0.5;			
	}
	
	if(rem2==0){
		container2.item(1).style.opacity = 0.5;			
	}
	rem3 = (rem1+rem2)%10;
	cubes3 = Math.floor((input1+input2)/10);
	math_ding.volume = 0.4;		
	math_ding.play();	
	
	ip1.innerHTML = '';
	ip1.style.height = '0px';
	ip2.innerHTML = '';
	ip2.style.height = '0px';
	
	position.style.opacity = 1;
	position.innerHTML = 'এককের যোগ'; 
		
	if((input1+input2)<10){
		
		unic.innerHTML = '';
		
		dec.innerHTML = 'একক';
		dec.style.color = '#9B5F0D';
		
		dig1.innerHTML = translation[input1];
		dig1.style.color = '#9B5F0D';
		
		dig3.innerHTML = translation[input2];
		dig3.style.color = '#9B5F0D';
		
		sign.style.visibility = 'visible';
		bar.style.visibility = 'visible';
		
		container1.item(1).style.borderWidth = '3px';
		container1.item(1).style.borderColor = '#9B5F0D';
		
		
		container2.item(1).style.borderWidth = '3px';
		container2.item(1).style.borderColor = '#9B5F0D';

	}
	else{
		dec.innerHTML = 'দশক';
		dec.style.color = '#039';
		
		unic.innerHTML = 'একক';
		unic.style.color = '#9B5F0D';	
		
		if(cubes1>0)
			dig1.innerHTML = translation[cubes1];
		dig2.innerHTML = translation[rem1];
		
		if(cubes2>0)
			dig3.innerHTML = translation[cubes2];
		dig4.innerHTML = translation[rem2];	
		
		rem3 = (rem1+rem2)%10;
		cubes3 = Math.floor((input1+input2)/10);
		
		dec.style.color = '#C8C8C8';
		dig1.style.color = '#C8C8C8';
		dig3.style.color = '#C8C8C8';
		
		if(rem1 != 0){
			container1.item(1).style.borderWidth = '3px';
			container1.item(1).style.borderColor = '#9B5F0D';
			container1.item(1).style.opacity =1;	
		}
		if(rem2 != 0){
			container2.item(1).style.borderWidth = '3px';
			container2.item(1).style.borderColor = '#9B5F0D';
			container2.item(1).style.opacity = 1;
			
		}

		sign.style.visibility = 'visible';
		bar.style.visibility = 'visible';
				
		if(input1<10 && input2<10){
			
			position.style.width = '65px';	
			position.style.marginLeft= '290px';			
			
			position.style.opacity = 1;
			position.innerHTML = 'যোগ';				
		}
		else{
			position.style.opacity = 1;
			position.innerHTML = ' এককের যোগ';			
			
		}
			
	}
	setTimeout(compute_unic,2000);		
}



function setIP2(v){
	
//	alert(v);	
	clearInterval(time8);
	ding = new Audio("addition/addition_carry/add_carry_img/DingLing.wav");
	ding.volume = 0.5;
	ding.play();
	message2.innerHTML = translation[v];
	panel2.style.opacity=0;
	
	for(var i = 0;i<40;i++){
		button_div2.item(i).setAttribute('onClick','');
	}	

	input2 = v;
	console.log('Testing Function setIP2(v) :');
	console.log('Second input is : '+input2);
	
	if((input1%10)+(input2%10)>9 && (input1>9 || input2>9)){
		console.log('The addition will show carry simulation');	
	}
	else{
		console.log('The addition will not show carry simulation');	
	}

	panel2.style.opacity = 0;
	stack2.style.position = 'absolute';
	stack2.style.opacity = 1;
	
	ip2.innerHTML = translation[input2];
	rem2 = input2%10;
	cubes2 = Math.floor(input2/10);
	
	if(rem2 == 0){
		for(var i = 0; i<cubes2;i++){
			container2.item(i+1).style.visibility = "visible";
			for(var j = 0; j<10; j++){
				var tmp = i*10+j;
				flower2.item(tmp).style.visibility = "visible";	
			}	
		}
		for(var i = cubes2; i<=3;i++){
			container2.item(i+1).style.visibility = "hidden";
			for(var j = 0; j<10; j++){
				var tmp = i*10+j;
				flower2.item(tmp).style.visibility = "hidden";	
			}	
		}		
			
	}else{
		container2.item(1).style.visibility = "visible";
		for(var i = 0; i<10-rem2;i++){
			flower2.item(i).style.visibility = "hidden";	
		}
		for(var i = 10-rem2; i<10;i++){
			flower2.item(i).style.visibility = "visible";	
		}		
				
		for(var i = 1; i<=cubes2;i++){
			container2.item(i+1).style.visibility = "visible";
			for(var j = 0; j<10; j++){
				var tmp = i*10+j;
				flower2.item(tmp).style.visibility = "visible";	
			}	
		}
		for(var i = cubes2+1; i<4;i++){
			container2.item(i+1).style.visibility = "hidden";
			for(var j = 0; j<10; j++){
				var tmp = i*10+j;
				flower2.item(tmp).style.visibility = "hidden";	
			}	
		}

					
	}
	
	setTimeout(set_unic,2000);
}


function setIP1(v){	
	clearInterval(time8);
	ding.volume = 0.5;
	ding.play();
	input1 = v;
	console.log('Testing Function setIP1(v) :');
	console.log('First input is : '+input1);

//	console.log(input1);	
	
	message1.innerHTML = translation[v];
	panel1.style.opacity=0;
	for(var i = 0;i<40;i++){
		button_div1.item(i+1).setAttribute('onClick','');
		var str = 'setIP2(' + (i+1) + ')';
		button_div2.item(i+1).setAttribute('onClick',str);
//		console.log(button_div2.item(i).getAttribute('onClick'));

	}
	panel2.style.opacity = 1;	
//flower display	

	stack1.style.position = 'absolute';
	stack1.style.opacity = 1;
	ip1.innerHTML = translation[input1];
	rem1 = input1%10;
	cubes1 = Math.floor(input1/10);
	
	if(rem1 == 0){
		for(var i = 0; i<cubes1;i++){
			container1.item(i+1).style.visibility = "visible";
			for(var j = 0; j<10; j++){
				var tmp = i*10+j;
				flower1.item(tmp).style.visibility = "visible";	
			}	
		}
		for(var i = cubes1; i<4;i++){
			container1.item(i+1).style.visibility = "hidden";
			for(var j = 0; j<10; j++){
				var tmp = i*10+j;
				flower1.item(tmp).style.visibility = "hidden";	
			}	
		}		
			
	}else{
		container1.item(1).style.visibility = "visible";
		for(var i = 0; i<10-rem1;i++){
			flower1.item(i).style.visibility = "hidden";	
		}	
		
		for(var i = 10-rem1; i<10;i++){
			flower1.item(i).style.visibility = "visible";	
		}
					
		for(var i = 1; i<=cubes1;i++){
			container1.item(i+1).style.visibility = "visible";
			for(var j = 0; j<10; j++){
				var tmp = i*10+j;
				flower1.item(tmp).style.visibility = "visible";	
			}	
		}
		for(var i = cubes1+1; i<4;i++){
			container1.item(i+1).style.visibility = "hidden";
			for(var j = 0; j<10; j++){
				var tmp = i*10+j;
				flower1.item(tmp).style.visibility = "hidden";	
			}	
		}

					
	}	
	time8 = setInterval(blink_msg2,700);
}


//prompt blinking functions
function blink_msg2(){
	blnk2 = (blnk2+1)%2;
	if(blnk2==0)
		message2.innerHTML = '';
	else		 
		message2.innerHTML = 'আরেকটি সংখ্যা বেছে নাও';
	
		
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
	
//input setting variables	
	panel1 = document.getElementById('panel1');	
	message1 = document.getElementById('panelcont1');
	button1 = panel1.getElementsByTagName('p');
	button_div1 = panel1.getElementsByTagName('div');

	
	panel2 = document.getElementById('panel2');	
	message2 = document.getElementById('panelcont2');
	button2 = panel2.getElementsByTagName('p');
	button_div2 = panel2.getElementsByTagName('div');	


	position = document.getElementById('position');
	prompt_msg = document.getElementById('prompt');
	addition_msg1 = document.getElementById('addition1');
	
	explain_cont=document.getElementById('explain');
	explain	= explain_cont.getElementsByTagName('div');
	
	display = document.getElementById("display");
	ip1 = document.getElementById("ip1");
	ip2 = document.getElementById("ip2");
	
	stack1 = document.getElementById("stack1");
	flower1	= stack1.getElementsByTagName("img");
	container1 = stack1.getElementsByTagName("div");
	
	stack2 = document.getElementById("stack2");
	flower2	= stack2.getElementsByTagName("img");
	container2 = stack2.getElementsByTagName("div");
	
	again = document.getElementById('again');
	menu = document.getElementById('menu');
	
	car = document.getElementById('car');
	crane = document.getElementById('crane');
	stand = document.getElementById('stand');
	carry = document.getElementById('carry');
	
	ding = new Audio("addition/addition_carry/add_carry_img/DingLing.wav");
	math_ding = new Audio("addition/addition_carry/add_carry_img/ding.wav");
	result_ding = new Audio("addition/addition_carry/add_carry_img/ding1.wav");
	car_sound = new Audio("addition/addition_carry/add_carry_img/car.wav"); 
	
	sign = document.getElementById('sign');	
	bar = document.getElementById('bar');
	dec = document.getElementById('left');
	unic = document.getElementById('right');
	
	dig1 = document.getElementById('dig1');
	dig2 = document.getElementById('dig2');
	dig3 = document.getElementById('dig3');
	dig4 = document.getElementById('dig4');
	dig5 = document.getElementById('dig5');
	dig6 = document.getElementById('dig6');
	dig7 = document.getElementById('dig7');
	time8 = setInterval(blink_msg1,700);


	
}
window.onload = initialize;