
let r=10;
let len=30
let clr=115;
function setup(){
colorMode(HSB,360,100,100,100);
background(360,0,100);
createCanvas(594,841);
}

function draw(){
for(let a=0;a<360;a=a+1)
{ 
 
let theta=a*PI/180;
stroke(0);
strokeWeight(0.05);
r=r+20*cos(random(20)*a);
let x=width/2+r*cos(theta);
let y=height/2+r*sin(theta);
for(let q = 0; q < len; q+=2){
  fill(clr,92.3-1.44*q,13.9+1.2*q);
let angle = 100*noise(cos(radians(len-q)) * q);
let x2 = sin(radians(a-angle))*(q*3);
let y2 = cos(radians(a-angle))*(q*3);
ellipse(x+x2, y+y2, len-q, len-q);
}
} 
}
