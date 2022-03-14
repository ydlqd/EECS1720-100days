let cubeLen = 60;
 
function setup(){
 createCanvas(400,400);
 background(0);
}
 
function draw(){
 background(0);//black
 strokeWeight(9);
 stroke(0,255,255);
 translate(width/2,height/2);
  
 for (let j=0;j<6;j++){
 rotate(radians(60));
 push();
 rotate(frameCount/120);
 translate(0,20*sin(frameCount/50)+50);
 rotate(-frameCount/30);
 cube();
 pop();
     }
 }
  
 function cube(){
 for (let i=0;i<3;i++){
 line(0,0,0,cubeLen);
 translate(0,cubeLen);
 rotate(2*PI/3);  
 line(0,0,0,cubeLen);
 rotate(-4*PI/3);   
 line(0,0,0,cubeLen);    
 rotate(2*PI/3);  
 translate(0,-cubeLen);   
 rotate(2*PI/3);
 }
  
}
