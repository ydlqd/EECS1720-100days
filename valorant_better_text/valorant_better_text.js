//Another OpenProcessing "hacking" ;)

var isGuest   = parent.isGuestUser;
var isInFaves;

console.log(isGuest);

if(isGuest) {
  console.log("You are not logged in...");
} else {
  console.log("You are logged ;)");
  //  parent.setFavorite();
}

function setup() {
  createCanvas(500,300);
}

function draw() {
  background(0);
  textAlign(CENTER);
  textSize(16);
  stroke(255);
  fill(255);
  let txt;
  if(isGuest) {
    txt = "You are not logged in :("
  } else {
    txt = "EECS1720 gogogog ;)"
  }
  text(txt,width/2,height/2);
  textSize(12);
  text("(and valorant better)",width/2,20);
}
