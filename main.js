function preload(){

}
function setup(){
   canvas=createCanvas(1000, 600);
   canvas.position(450, 120);
   video=createCapture(VIDEO);
   video.hide();
   tint_color = "";
}
function draw(){
    image(video,250, 200, 140, 180);
    
   
fill(255, 0, 0);
stroke(255, 0, 0);
rect(400,150,20,250);
  
fill(255, 0, 0);
stroke(255, 0, 0);
rect(200,150,20,250);
  
fill(255, 0, 0);
stroke(255, 0, 0);
rect(200,150,200,20);
  
fill(255, 0, 0);
stroke(255, 0, 0);
rect(200,400,220,20);
  
fill(0,255, 0);
stroke(128, 0, 0);
ellipse(210, 160, 55, 55);
  
fill(0,255, 0);
stroke(128, 0, 0);
ellipse(410, 160, 55, 55);

fill(0,255, 0);
stroke(128, 0, 0);
ellipse(412, 410, 55, 55);
  
fill(0,255, 0);
stroke(128, 0, 0);
ellipse(210, 410, 55, 55);
}
function take_snapshot(){
    save('img_name.png');

    }
    function filter_tint(){
        tint_color = document.getElementById("color_name").value;
    }