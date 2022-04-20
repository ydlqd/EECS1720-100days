String[] words = {"Dong", "Lin", "Yu", "EECS", "1720", "Good", "srhara"};

void setup()
{
  size(800, 600);
  background(#1133dd);
  frameRate(12);
}

void draw(){
  fill(#d3dd11, 20);
  rect(0,0,width,height);
  stroke(#FFFFFF);
  line(0,0,720,int(random(480))); 
  stroke(#000000);
  line(0,0,int(random(720)),480); 
    fill(#2b1b0e);
  textSize(random(20, 200));
  text(words[int(random(11))], random(720), random(480));
}
