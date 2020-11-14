var aprochingMosquitos,fearedMosquitos,can,aprochingMosquitosImg,fearedMosquitosImg,canImg;
var spray,sprayImg;
var count=0;
var sprayGroup;
var aprochingMosquitosGroup;
var edges;
var visibility=255;
var cityImg,city;
var life=10;
var strongMosquito,strongMosquitoImg;
var strongMosquitoGroup;
var scientist,scientistImg;
var speechBubble,speechBubbleImg;


function preload(){
 aprochingMosquitosImg=loadImage('aproching mosquito.png');
 fearedMosquitosImg=loadImage('fearing mosquitoes.png');
 sprayImg=loadImage('spray1.png');
 canImg=loadImage('canimg.png');
 cityImg=loadImage('cityImg.jpg');
 strongMosquitoImg=loadImage('strong mosquitoes.png');
 scientistImg=loadImage('scientistImg.png');
 speechBubbleImg=loadImage('speech bubble.png');


}
function setup() {
  createCanvas(displayWidth,displayHeight-120);
  
  can=createSprite(200,200);
 can.addImage('c',canImg);
 can.scale=0.4;
 can.velocityY=0;
 can.visible=false;
 sprayGroup=new Group();
 aprochingMosquitosGroup=new Group();
 strongMosquitoGroup= new Group();
 scientist=createSprite(200,500);
 scientist.addImage('scientist',scientistImg);

 speechBubble=createSprite(scientist.x+250,scientist.y-150);
 speechBubble.addImage('speech',speechBubbleImg);
 //speechBubble.scale=0.5;



}

function draw() {
  background(cityImg); 
 edges= createEdgeSprites();
 can.collide(edges);
  can.velocityY=0;
  if(keyWentDown('space')){
    var spray=createSprite(can.x+13,can.y-68);
    spray.x=can.x+13;
    spray.y=can.y-68;
   spray.addImage('s',sprayImg);
   spray.scale=0.7;
  sprayGroup.add(spray);
   }
    if(keyWentUp('space')){
      sprayGroup.destroyEach();
    }
   if(keyDown(UP_ARROW)){
    can.velocityY=-5;
    
  }
  if(keyDown(DOWN_ARROW)){
    can.velocityY=5;  
  }
 
   
  for(var i=0;i<aprochingMosquitosGroup.length;i++){
    
    if(aprochingMosquitosGroup.get(i)!==null && sprayGroup.isTouching(aprochingMosquitosGroup)){
     count=count+5;
     aprochingMosquitosGroup.get(i).destroy();
    }
 } 
    for(var o=0;o<strongMosquitoGroup.length;o++){
      if(strongMosquitoGroup.get(o)!==null&& sprayGroup.isTouching(strongMosquitoGroup)){
         count=count+20;
         strongMosquitoGroup.get(o).destroy();
      }
    }
   for( var h=0;h<aprochingMosquitosGroup.lenght;h++){
     if(aprochingMosquitosGroup.get(i)!==null&&aprochingMosquitosGroup.isTouching(edges[0])){
       life=life-1;
     }
   }
   
 
  textSize(36);
  fill('red');
  text('score:'+count,770,100);
  drawSprites();
  if(frameCount<100){
    text('city has been infested',speechBubble.x,speechBubble.y-30);
  }else()

 // spawnMosquitos();

}

function spawnMosquitos(){
  if(frameCount%100===0){
  var aprochingMosquitos=createSprite(displayWidth,random(1,600));
  aprochingMosquitos.velocityX=- (6 + 3*count/200);
  aprochingMosquitos.addImage('m',aprochingMosquitosImg);
  aprochingMosquitos.addImage('a',fearedMosquitosImg);
  aprochingMosquitos.scale=0.3;
  aprochingMosquitos.lifetime=800;
  aprochingMosquitos.depth=can.depth;
  can.depth = can.depth+1;
  aprochingMosquitosGroup.add(aprochingMosquitos);
  }
  if(frameCount%250===0){
    var strongMosquito=createSprite(displayWidth,random(1,600));
    strongMosquito.addImage('s',strongMosquitoImg);
    strongMosquito.velocityX=- (6 + 3*count/150);
    strongMosquito.scale=0.6;
    strongMosquito.lifetime=800;
    strongMosquito.depth=can.depth;
    strongMosquito.depth=strongMosquito.depth+1;
    strongMosquitoGroup.add(strongMosquito);
  }
}

  
  

