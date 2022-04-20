var t = 0;
let words = [' Dong', 'Lin', ' Yu', 'EECS'];
let indexWord = 0;
let font1;


function preload() {
  font1 = loadFont('Diagramm-Medium.ttf');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  textFont(font1);
  fill(188,255,0);
  textSize(70);
  textAlign(CENTER);
  
}

function draw() {
  background(0,0,110);
  t++;
  let textWid = textWidth(words[indexWord]);
  translate((windowWidth/2)-(textWid/2+550) , 400);
  
  for (var a = 0; a< 4; a++) { if(a%2==0)fill(212,222,229);else  fill(188,255,0);
    for (var b = 0; b< words[indexWord].length; b++) {
     var dx = 40*sin(radians(t*2+b*30));
     let  letters = (words[indexWord].length)*textAscent();
     text(words[indexWord][b], 80*b+(100+dx)+a*50, (a*70)); 
    }
      indexWord++;
  if(indexWord >= words.length){
    indexWord = 0;
  }
  }
  
}
