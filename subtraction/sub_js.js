// JavaScript Document

//sea horse variables

var translation = ['০','১','২','৩','৪','৫','৬','৭','৮','৯','১০','১১','১২','১৩','১৪','১৫','১৬','১৭','১৮','১৯','২০','২১','২২','২৩','২৪','২৫','২৬','২৭','২৮','২৯','৩০','৩১','৩২','৩৩','৩৪','৩৫','৩৬','৩৭','৩৮','৩৯‌','৪০','৪১','৪২','৪৩','৪৪','৪৫','৪৬','৪৭','৪৮','৪৯','৫০'];
var sea_horse;
var dir = 0,hx = 0,hy = 0;

var sound,comp;

var time1;
var row = 0;

//input fish variables
var fish, img_fish;

var input1,ip,ip1,input2,ip2, ip2_dec;

var count = 0;
var temp,dist;

var time2,time3,time8,time16;
var row = 0,row_max,rem;


var pos1 = [850,920,990,1060,1130,1200,1270,1340,1410,1480];
var pos2 = [-70,-140,-210,-280,-350,-420,-490,-560,-630,-700];
var pos3 = [0,70,140,210,280,350,420,490,560,630];

//shark variables
var shark;
var img = ['subtraction/images_sub/shark_blue12.png','subtraction/images_sub/shark_blue11.png'];
var shark_img = ['subtraction/images_sub/shark_blue11.png','subtraction/images_sub/shark_blue2.png','subtraction/images_sub/shark_blue4.png','subtraction/images_sub/shark_blue2.png','subtraction/images_sub/shark_blue3.png'];
var shark_img_rev = ['subtraction/images_sub/shark_blue11_rev.png','subtraction/images_sub/shark_blue2_rev.png','subtraction/images_sub/shark_blue4_rev.png','subtraction/images_sub/shark_blue2_rev.png','subtraction/images_sub/shark_blue3_rev.png'];

var time4,time5,time6,time7,time9,time10,time12,time11,time14,time15;
var cnt = 0, img_cnt = 0, row_cnt,ip_cnt, rev_cnt = 0,turn_cnt;
var ip_row,ip_col;
var shark_x,shark_y;
var mov_x, mov_y;
var prog = 0;

//number panel variables
var panelcont, panel,instruction;

function horseMov(){
	if((hx * 20) >= 900){
		dir = 1;
		sea_horse.setAttribute('src','subtraction/images_sub/seahorse_rev.png')	;
	}	
	if((hx * 20) <= -100){
		dir = 0 ;
		sea_horse.setAttribute('src','subtraction/images_sub/seahorse.png')	;
	}	
	sea_horse.style.left = (hx * 20) + 'px';
	sea_horse.style.top = hy + 547 + 'px';
	if(dir == 0 )
		hx += 0.05 ;
	else
		hx -= 0.05;
	hy = Math.sin(hx) * 10;	
	
}



//shark movement functions


//exit functions
function exit_left(){
	if(shark_x>(-350)){
		shark_x-= 0.7;	
		shark.style.left = shark_x + 'px';
		setTimeout(exit_left,1)	;
	}	
	else{
		clearInterval(time14);
		setTimeout(show_result,100);	
	}	
}

function exit_right(){
	if(shark_x<(1500)){
		shark_x+=0.7;
		shark.style.left = shark_x + 'px';	
		setTimeout(exit_right,1)	;
	}	
	else{
		clearInterval(time15);
		setTimeout(show_result,100);	
	}	
}

//right turn functions
function approach_left(){
	if(turn_cnt<1010){
		turn_cnt++;
		shark.style.left = shark_x + 'px';	
		shark.style.top = shark_y + 'px' ;
		shark_x = shark_x - .5;
		shark_y = shark_y - .06;
	}
	else{
		clearInterval(time11);
		turn_cnt = 0;
		shark.setAttribute('src',shark_img_rev[0]);
		time12 = setInterval(turn_right,1)	
	}	
}
function turn_right(){
//	if(turn_cnt<400){
	if(shark_x<-140){
		turn_cnt++;
		shark_x = shark_x + .5;
		shark.style.left = shark_x + 'px';	
	}
	else{
		clearInterval(time12);
		turn_cnt = 0;
		prog = 1;
		img_cnt = 0;
		time6 = setInterval(progress,10);			
	}	
}

//left turn functions
function approach_right(){
	if(turn_cnt<1010){
		turn_cnt++;
		shark.style.left = shark_x + 'px';	
		shark.style.top = shark_y + 'px' ;
		shark_x = shark_x + .5;
		shark_y = shark_y - .05;
	}
	else{
		clearInterval(time9);
		turn_cnt = 0;
		shark.setAttribute('src',shark_img[0]);
		time10 = setInterval(turn_left,1)	
	}	
}
function turn_left(){
//	if(turn_cnt<460){
	if(shark_x>845){
		turn_cnt++;
		shark_x = shark_x - .5;
		shark.style.left = shark_x + 'px';	
	}
	else{
		clearInterval(time10);
		turn_cnt = 0;
		prog = 1;
		img_cnt = 0;
		time6 = setInterval(progress,10);			
	}	
}
function changeImage(){
	shark.setAttribute('src',img[cnt]);
	cnt = (cnt+1) %2 ;	
}

function pause(){
	sound.pause();
	return;
}

function progress(){
			
		if(ip2>0){		
			
			shark.style.left = shark_x + 'px';
	
			
			if(row_cnt == 1 ||row_cnt == 3){
				shark.setAttribute('src',shark_img_rev[img_cnt]);
				shark_x++;		
			}
			else{
				shark.setAttribute('src',shark_img[img_cnt]);
				shark_x--;
			}					

			
			if((prog%71)==70){			
				img_fish.item(ip1-1).setAttribute('src','');
				img_fish.item(ip1-1).style.visibility = 'hidden';
				sound = new Audio("subtraction/images_sub/flash.wav");								
				sound.play();	
				setTimeout(pause,500);			
				ip2--;	
				ip1--;
				row_cnt = Math.floor((ip1-1)/10);			
			}
			
			if((prog%14) == 0){
				img_cnt = (img_cnt+1)%5;
				
			}
			prog++;				
			
		}
		else{
			console.log(ip2);

			clearInterval(time6);

			
			if(ip2_dec > 0){
				if(ip2_dec<10){
					ip2 = ip2_dec;
					ip2_dec = 0;
					rem = ip2;
						
				}
				else{
					ip2 = 10;
					ip2_dec -= 10;
					rem = 10;	
				}
				
				if(left){
					left = false;
					right = true;
					turn_cnt = 0;
					
					time9 = setInterval(approach_right,1);	
				}
				else{
					left = true;
					right = false;
					turn_cnt = 0;
					time11 = setInterval(approach_left,1);
					//turn_right();					
				}				
			}
			else{
				if(row_cnt == 1 ||row_cnt == 3){
					shark.setAttribute('src',shark_img[0]);
					comp.play();	
//					time14=setInterval(exit_left,1)	;	
					setTimeout(exit_left,2000);				
				}
				else{
					shark.setAttribute('src',shark_img_rev[0]);
					comp.play();	
//					time15=setInterval(exit_right,1);
					setTimeout(exit_right,2000);	
				}		
			}
		
	
		}
	
}
function subtraction(){
		ip1 = input1;
		ip_cnt = 0;
		prog = 1;
		img_cnt = 0;
		if((input1-1)%10+1>=input2){			
			ip2=input2;
			ip2_dec = input2-ip2;
		}
		else{
			ip2 = (input1-1)%10+1;
			ip2_dec = input2-ip2;
		}		
		time6 = setInterval(progress,10);
	
}
function fix_dir(){
	if(shark_x<(850-ip_col-300)){		
		shark_x+=1;
		shark.style.left = shark_x + 'px';
	}
	else
	{
		clearInterval(time7);
		subtraction();
	}	
}

function shark_pos(){
	if(shark_y>(ip_row-90))
	{
		shark_x -= mov_x;
		shark_y -= mov_y;
		shark.style.top = shark_y - 20 + 'px' ;
		shark.style.left = shark_x + 'px';
		
	}
	else{
		clearInterval(time5);		
		if(rem==10){
			if(row_cnt == 1 ||row_cnt == 3){
				subtraction();
			}
			else{
				shark.setAttribute('src',shark_img_rev[rev_cnt]);
				console.log(ip_col);
				time7 = setInterval(fix_dir,5);
			}		
		}
		else{
			if(row_cnt == 1 ||row_cnt == 3){
				shark.setAttribute('src',shark_img_rev[rev_cnt]);
				console.log(ip_col);
				time7 = setInterval(fix_dir,5);
			}
			else{
				subtraction();
			}		
		}
		
	}
}

function mov_shark(){
	clearInterval(time4);
	shark.setAttribute('src',img[0]);		
	row_cnt = Math.floor((input1-1)/10);
	rem = (input1-1)%10+1;
	shark_x = 1020;
	shark_y = 400;
	
	
		if(row_cnt == 1 ||row_cnt == 3){
			mov_x = 1200 * .001;
			mov_y = (500 - ip_row) *.001;
			left = true;	
			right = false;			
		}
		else{
			mov_x = (1020 - ip_col-140) * .001;
			mov_y = (500 - ip_row) *.001;
			right = true;
			left = false;			
		}	

	time5 = setInterval(shark_pos,7);
}
//fish movement functions

function fix_remainder(){

	var x,y;
	x=Math.floor(input1/10);
	y=(input1-1)%10+1;
	
	for(var a = input1; a<50; a++){
		var c = Math.floor(a/10);
		if(c==1 || c ==3){
			img_fish.item(a).style.left = (9-(a%10))*70 +150 +'px';			
		}
		else{
			img_fish.item(a).style.left = (a%10)*70+'px';			
		}
		img_fish.item(a).setAttribute('src','');
	
	}
	instruction.innerHTML = 'আরেকটি সংখ্যা বেছে নাও';
	panelcont.style.visibility = 'visible';
	panel.style.visibility = 'visible';
	instruction.style.visibility = 'visible';
	for(var j = 0 ;j<50;j++){
		if(j>=input1){
			button.item(j).style.backgroundImage = 'url(subtraction/images_sub/gray.png)';	
			button.item(j).style.opacity = '.7';
		}
			button.item(j).style.visibility = 'visible';	
	}
	
	for(var i = 0; i<input1; i++){
		var a = i+1;
		var str = 'setIP2(' + a + ')';

		console.log(str);
		button.item(i).setAttribute('onClick',str);		
	}

}

//left to right
function fix_pos(){

	if(dist<150){
		dist++ ;
		for(var a = 0; a<10; a++){
			pos2[a] += 1;
			img_fish.item(row * 10 + a).style.left = pos2[a] + 'px';

			
		}		
	}
	else{
		clearInterval(time8);
		row++;
		if(row == 2)
		{
			for(var a = 0; a<10; a++){
				pos2[a] = pos2[a] - 850;
			}
	
		}
				
		count = 0;
		fishMov();	
	}		
}
function fixdistance(){

	dist = 0;
	time8 = setInterval(fix_pos,2);	
}
function posChangeRev(){
	
	if(temp<70){
		temp++ ;
		for(var a = 0; a<10; a++){
			pos2[a] += 1;
			img_fish.item(row * 10 + a).style.left = pos2[a] + 'px';
			
		}		
	}
	else{
		clearInterval(time3);
		count++;
		ip--;
		fishMovRev();	
	}
}
function fishMovRev(){	
	if(count<10){
		temp = 0;
		var i = (input1-1)%10 +1;
		
		if(row<=row_max)
			time3 = setInterval(posChangeRev,2);
		else{
			fix_remainder();			
		}	
				
		if(ip>0){
			img_fish.item(row * 10 + count).setAttribute('src','subtraction/images_sub/fish_small_rev.gif');			
		}	
		else{
			img_fish.item(row * 10 + count).setAttribute('src','');			
		}
		
		if(ip==0){
			
		}		
	}	
	else{
		fixdistance();
		
	}			
}
//right to left
function posChange(){
	if(temp<70){
		temp++ ;
		for(var a = 0; a<10; a++){
			pos1[a] = pos1[a] - 1;
			img_fish.item(row * 10 + a).style.left = pos1[a] + 'px';
		}		
	}
	else{
		clearInterval(time2);
		count++;
		ip--;
		fishMov();	
	}
}

function fishMov(){
	
	if(count<10){
		temp = 0;
		var i = (input1-1)%10 +1;
		
		if(row<=row_max){
			time2 = setInterval(posChange,2);
		}
		else{	
			fix_remainder();				
		}
		if(ip==0 && (input1>=41)){
			time16 = setTimeout(fix_remainder,3000);
		}
		
			
		if(ip>0){
			img_fish.item(row * 10 + count).setAttribute('src','subtraction/images_sub/fish_small.gif');			
		}	
		else{
			img_fish.item(row * 10 + count).setAttribute('src','');	
					
		}
				
	}
	else{
		row++;
		console.log(row);	
		if(row <= 4)
		{
			for(var a = 0; a<10; a++){
				pos1[a] += 700;
			}
			count = 0;						
			fishMovRev();	
		}
		if(row==5)
			setTimeout(fix_remainder,100);

	}
}
//output

function show_result(){
	var display = document.getElementById("display");
	var result = document.getElementById("result");
	var again = document.getElementById("again");
	var menu = document.getElementById("menu");
	
	var temp = translation[input1] + ' - ' + translation[input2] + ' = ' + translation[(input1-input2)];
	var result_text = document.createTextNode(temp);
	result.appendChild(result_text);
//	result.innerHTML = temp;
	shark.style.visibility = 'hidden';
	display.style.visibility = 'visible';
	result.style.visibility = 'visible';
	again.style.visibility = 'visible';
	menu.style.visibility = 'visible';
	
}


//input processing functions
function setIP2(v){
	input2 = v;
	ip2 = v;
	ip2_dec =v;
	console.log(input2);
	ip_row = (Math.floor((input1-1)/10))*50 + 100;
	ip_col = ((input1-1)%10 + 1)*70 ;
	
	var x = Math.floor(input1/10);

	console.log('x = '+ip_col+' , y = '+ip_row);
	panelcont.style.visibility = 'hidden';
	panel.style.visibility = 'hidden';
	instruction.style.visibility = 'hidden';	
	for(var j =0; j<50; j++){
		button.item(j).setAttribute('onClick','');
		button.item(j).style.visibility = 'hidden';
	}	
	mov_shark();
	
}

function setIP(v){
	input1 = v;
	ip = v;	
	row_max = Math.floor((input1-1)/10);
	panelcont.style.visibility = 'hidden';
	panel.style.visibility = 'hidden';
	instruction.style.visibility = 'hidden';	
	for(var j =0; j<50; j++){
		button.item(j).setAttribute('onClick','');
		button.item(j).style.visibility = 'hidden';
	}
	fishMov();	
}

function initialize(){

	window.scroll(0,200);
	sound = new Audio("subtraction/images_sub/flash.wav");
	comp = new Audio("subtraction/images_sub/yodel.wav");	
	
	fish = document.getElementById('fish');
	img_fish = fish.getElementsByTagName('img');
	
	for(var a = 0; a<50; a++){
		img_fish.item(a).style.position = 'absolute';
		if(a<10){
			img_fish.item(a).style.top = 100 + 'px';
			img_fish.item(a).style.left= pos1[a] + 'px';
		}
		else if(a>=10 && a<20){
			img_fish.item(a).style.top = 150 + 'px';
			img_fish.item(a).style.left= pos2[a] + 'px';
		}
		else if(a>=20 && a<30){
			img_fish.item(a).style.top = 200 + 'px';
			img_fish.item(a).style.left= pos1[a] + 'px';
		}
		else if(a>=30 && a<40){
			img_fish.item(a).style.top = 250 + 'px';
			img_fish.item(a).style.left= pos1[a] + 'px';
		}
		else if(a>=40 && a<50){
			img_fish.item(a).style.top = 300 + 'px';
			img_fish.item(a).style.left= pos1[a] + 'px';
		}
	}
	//number panel initialization
	panelcont = document.getElementById('panelcont');
	panel = document.getElementById('panel');
	button = panel.getElementsByTagName('div');	
	instruction =  document.getElementById('instruction');

//shark
	shark = document.getElementById('shark');
	time4 = setInterval(changeImage,1000);
	

//sea-horse movement function call
	
	sea_horse = document.getElementById('sea_horse');
	sea_horse.style.position = 'absolute';
	
	time1 = setInterval(horseMov,12);	
}

window.onload = initialize;// JavaScript Document