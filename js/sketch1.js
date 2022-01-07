var objX, objY;  //宣告兩個變數，作為物件的x, y座標
var disX, disY;  //宣告兩個變數，當成滑鼠座標與物件的距離
var delay = 40.0;  //隨著滑鼠延遲的情況（因為2.0過快而看不見效果，所以設定40.0）
 
function setup() {

  var canvas = createCanvas(500, 500);
  canvas.parent('abc');
  
  background(255, 255, 0); //背景為黃色
  objX = mouseX;  //objX代入滑鼠的x座標(初始化)
  objY = mouseY;  //objY代入滑鼠的y座標(初始化)
}
 
function draw() {
  //background(255,255,0); //不殘留軌跡專用
  noStroke(); //這三行是殘留軌跡專用
  fill(255, 255, 0, 15); 
  rect(0, 0, width, height);

  disX = mouseX - objX; //將disX代入滑鼠X座標減去物件X的距離
  disY = mouseY - objY; //將disY代入滑鼠Y座標減去物件Y的距離
 
  objX = objX + disX/delay; //而物件X逐次遞增delay除以disX的數值（物件移動）
  objY = objY + disY/delay; //而物件Y逐次遞增delay除以disY的數值（物件移動）
 
  push();//暫存座標
  translate(objX-60, objY-60); //位移座標。objX, objY代表monkey的座標
  scale(0.4); //縮小40%

  //繪製一隻Monkey。
  noStroke(); //耳朵下層
  fill(80); 
  ellipse(40,130,50,120);
  ellipse(260,130,50,120);
  
  fill(120); //耳朵上層
  ellipse(40,130,25,60);
  ellipse(260,130,25,60);
   
  fill(80); //頭部及下巴下層
  ellipse(150,100,200,180);
  ellipse(150,200,240,180);
   
  fill(200); //臉部及下巴上層
  ellipse(120,120,100,150);
  ellipse(180,120,100,150);
  ellipse(150,200,200,150);
   
  fill(255); //眼睛下層
  ellipse(120,110,48,55);
  ellipse(180,110,48,55);
  
  fill(0);  //眼球
  ellipse(120,110,25,30);
  ellipse(180,110,25,30);
  
  fill(255); //眼球白點
  ellipse(125,105,8,8);
  ellipse(175,105,8,8);
   
  noFill(); //嘴巴
  stroke(50);
  strokeWeight(10);
  bezier(80,200,80,240,220,240,220,200);
   
  pop();//恢復座標
}