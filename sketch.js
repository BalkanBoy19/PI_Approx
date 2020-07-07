var r;
var b;

function setup() {
  createCanvas(600, 200);
  background(100);

  r = new Square("rot", 1, width/2, height-40, 0.5);
  b = new Square("blau", 1, width/2-80, height-(height-20), 1.25);

  fill(255, 0, 0);
  rect(r.left_pos, height-40, height-(height-40), height-(height-40));
  
  fill(0, 0, 255);
  rect(b.left_pos, height-20, height-(height-20), height-(height-20));
  
}

var start = false;

function draw() {  // besser mit einer Klasse + Konstruktor Square mit Attributen wie Farbe und Position, aber erst spaeter
 if (start) {
   background(100);
   
   fill(255, 0, 0); // rot
   rect(r.left_pos, height-40, height-(height-40), height-(height-40));
   
   fill(0, 0, 255); // blau
   rect(b.left_pos, height-20, height-(height-20), height-(height-20));

   b.left_pos += (Math.pow(-1, b.richtung) * b.speed);
   r.left_pos += (Math.pow(-1, r.richtung) * r.speed);
   
   if ((b.left_pos == 0) || (b.left_pos + b.right_pos >= r.left_pos)) {  // also sobald bei 0 angekommen, eleganteren Weg auswählen statt Bool Variable vor
    b.richtung = !b.richtung;  // um von rechts nach links zu wechseln und umgekehrt (wechselt von true zu false bzw. von 1 zu 0 und umgekehrt)
       
    print("Stoooooß");
   }
   
   if (r.left_pos == (b.left_pos + b.right_pos)) {
    r.richtung = !r.richtung;
   }
   
 }
  
}

function mousePressed() {
 start = !start;
}

function Square(color, richtung, left_pos, right_pos, speed) {
 this.color = color;
 this.richtung = richtung;  // 1 für rechts und 0 für links
 this.left_pos = left_pos;
 this.right_pos = right_pos;
 this.speed = speed;
}






