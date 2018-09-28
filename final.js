
// Jin Zhang
// Siyue Liang



//Declare variables for later

var c;
var r = 100;
var d;


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  //
  //setting up mic input

  mic = new p5.AudioIn();
  mic.start();
}


function draw() {

  //
  //analyze the input and turn it into a value

  micLevel = mic.getLevel();

  background(0);

  var a = random(micLevel);
  d = mouseX/100;

  //
  //set the amount of the shapes

  for (var i = 0; i < 200; i++) {
    var t  = a / r; 
    c1 = micLevel * mouseX *i;
    c2 = micLevel * mouseY *i;   

    noFill();
    
    //
    //push & pop to animate the shapes

    push();
    push();
    rotate(t);

    //
    //sine,cosine and tangent to create vortex

    translate(sin(frameCount*0.02 ) * 100, 
      sin(frameCount * 0.01) * 100, 
      tan(frameCount * 0.005 + i) * 500);

    //
    //when the mouse is pressed, the cones are shown.

    if (mouseIsPressed){
      stroke(-mouseY,c2,c1);
        rotateZ(frameCount * micLevel/100);
        rotateX(frameCount * micLevel/100);
        rotateY(frameCount * micLevel/100);
        

        cone(mouseX/100, mouseY/(micLevel*100));
      }

      //
      //boxes are shown when mouse is not pressed

      else{
          stroke(c1, c2, mouseX/100);

      //
      //another if statement to make the boxes stretch up 
      //when the mic volume goes over a value

          if (micLevel > 0.1){
            box(15, 15, micLevel/100-i);
          }else{
            rotateZ(frameCount * micLevel/10);
            rotateX(frameCount * micLevel/10);
            rotateY(frameCount * micLevel/10);
            box(15, 15, random(0,20));
    }
      }
    pop();
    pop();
    a = a + d;
  }}
