var player_sprite_sheet;
var walk_forward, walk_right, walk_left, walk_back;
var fruit_sprite_sheet;
var finish_line

function preload() {
  
   var meat_frames = [
  {'name':'meat_frames', 'frame':{'x': 0, 'y': 0, 'width': 35, 'height': 35}}
     ]
  
   
  var front_frames = [
  {'name':'player_front01', 'frame':{'x': 0, 'y': 0, 'width': 48, 'height': 72}},
  {'name':'player_front02', 'frame':{'x':48, 'y': 0, 'width': 48, 'height': 72}},
  {'name':'player_front03', 'frame':{'x':96, 'y': 0, 'width': 48, 'height': 72}},
  {'name':'player_front04', 'frame':{'x':144, 'y': 0, 'width': 48, 'height': 72}}
];
  
  var right_frames = [
  {'name':'player_right01', 'frame':{'x': 0, 'y': 96, 'width': 48, 'height': 72}},
  {'name':'player_right02', 'frame':{'x':48, 'y': 96, 'width': 48, 'height': 72}},
  {'name':'player_right03', 'frame':{'x':96, 'y': 96, 'width': 48, 'height': 72}},
  {'name':'player_right04', 'frame':{'x':144, 'y': 96, 'width': 48, 'height': 72}}
];  
  
  var left_frames = [
  {'name':'player_left01', 'frame':{'x': 0, 'y': 288, 'width': 48, 'height': 72}},
  {'name':'player_left02', 'frame':{'x':48, 'y': 288, 'width': 48, 'height': 72}},
  {'name':'player_left03', 'frame':{'x':96, 'y': 288, 'width': 48, 'height': 72}},
  {'name':'player_left04', 'frame':{'x':144, 'y': 288, 'width': 48, 'height': 72}}
];

   var back_frames = [
  {'name':'player_back01', 'frame':{'x': 0, 'y': 192, 'width': 48, 'height': 72}},
  {'name':'player_back02', 'frame':{'x':48, 'y': 192, 'width': 48, 'height': 72}},
  {'name':'player_back03', 'frame':{'x':96, 'y': 192, 'width': 48, 'height': 72}},
  {'name':'player_back04', 'frame':{'x':144, 'y': 192, 'width': 48, 'height': 72}}
];   

    // Load  sprite assets from frames array
  player_sprite_sheet = loadSpriteSheet('assets/character.png', front_frames);
  walk_forward = loadAnimation(player_sprite_sheet);    
  walk_forward.frameDelay = 7;
  
  player_sprite_sheet = loadSpriteSheet('assets/character.png', right_frames);
  walk_right = loadAnimation(player_sprite_sheet); 
  walk_right.frameDelay = 7;
  
  player_sprite_sheet = loadSpriteSheet('assets/character.png', left_frames);
  walk_left = loadAnimation(player_sprite_sheet); 
  walk_left.frameDelay = 7;  
  
  player_sprite_sheet = loadSpriteSheet('assets/character.png', back_frames);
  walk_back = loadAnimation(player_sprite_sheet);    
  walk_back.frameDelay = 7;
  
  fruit_sprite_sheet = 
  loadSpriteSheet('assets/icons_32x32.png', meat_frames);
   meat = loadAnimation(fruit_sprite_sheet); 
  
  

}


function move()
{
  if(keyDown(RIGHT_ARROW)) {
    player_sprite.setSpeed(2.5,0);
    player_sprite.changeAnimation('right');
    player_sprite.animation.play();
  }
  if(keyDown(LEFT_ARROW)) {
    player_sprite.setSpeed(2.5,180);
    player_sprite.changeAnimation('left');
    player_sprite.animation.play();
  }
  if(keyDown(UP_ARROW)) {
    player_sprite.setSpeed(2.5,270);
    player_sprite.changeAnimation('back');
    player_sprite.animation.play();
  }
  if(keyDown(DOWN_ARROW)) {
    player_sprite.setSpeed(2.5,90);
    player_sprite.changeAnimation('forward');
    player_sprite.animation.play();
  }  
  if(keyDown(' ')) {
    player_sprite.setSpeed(0,0);
    player_sprite.animation.stop();
  }  
}

function mazelayout() {
  walls = new Group();
  shapeColor= color(255,255,255)
  
  //var line1 = createSprite(0,5,1400,10);
  //line1.shapeColor = color(0,0,0);
  //walls.add(line1);

  var line1 = walls.add(createSprite(0,5,1400,10));
  var line2 = walls.add(createSprite(5,30,10,1200));
  var line3 = walls.add(createSprite(695,30,10,1200));
  var line4 = walls.add(createSprite(0,620,1400,10));
  var line5 = walls.add(createSprite(635,530,140,10));
  var line6 = walls.add(createSprite(385,565,10,100));
  var line7 = walls.add(createSprite(625,485,10,100));
  var line8 = walls.add(createSprite(425,520,70,10));
  var line9 = walls.add(createSprite(460,475,10,100));
  var line10 = walls.add(createSprite(500,430,70,10));
  var line11 = walls.add(createSprite(530,375,10,100));
  var line12 = walls.add(createSprite(565,230,250,10));
  var line13 = walls.add(createSprite(435,275,10,100));
  var line14 = walls.add(createSprite(355,330,170,10));
  var line15 = walls.add(createSprite(275,375,10,300));
  var line16 = walls.add(createSprite(320,430,80,10));
  var line17 = walls.add(createSprite(575,330,80,10));
  var line18 = walls.add(createSprite(175,365,10,100));
  var line19 = walls.add(createSprite(100,515,10,200));
  var line20 = walls.add(createSprite(95,320, 170,10));
  var line21 = walls.add(createSprite(235,220, 90,10));
  var line22 = walls.add(createSprite(190,165,10,120));
  var line23 = walls.add(createSprite(145,160, 80,10));
  var line24 = walls.add(createSprite(100,195,10,80));
  var line25 = walls.add(createSprite(105,35,10,50));
  var line26 = walls.add(createSprite(145,520, 80,10));
  var line27 = walls.add(createSprite(267,100, 165,10));
  var line28 = walls.add(createSprite(345,145,10,80));
  var line29 = walls.add(createSprite(520,130, 120,10));
  var line30 = walls.add(createSprite(575,67,10,116));

}

function finish_screen(){
  fill('darkgrey')
  rect(0,0,1000,1000)
  fill(0,225,73)
  textAlign(CENTER)
  textFont('Helvetica');
  textSize(50);
  text('GAME FINISH', width/2, height/2);
}

function setup() {
  createCanvas(700,625);

    mazelayout()

    // Create the Player sprite and add it's animations
  player_sprite = createSprite(650, 575);
  player_sprite.addAnimation('forward', walk_forward);
  player_sprite.addAnimation('right', walk_right);
  player_sprite.addAnimation('left', walk_left);
  player_sprite.addAnimation('back', walk_back);
  player_sprite.changeAnimation('forward');
  player_sprite.speed = 0.5;
    fruit_sprite = createSprite(150, 350, 70, 94);
  fruit_sprite.addAnimation('meatanimation', meat); 
  fruit_sprite.changeAnimation('meat_frames');

  finish_line = createSprite(635,21,108,20);
  finish_line.shapeColor = color(0,225,73);

}

function draw() {
  background("darkgrey")

  drawSprites();

  move();
    
  player_sprite.displace(fruit_sprite);
  player_sprite.collide(walls);

  
  fill(255,255,255);
  textFont('Helvetica');
  textSize(15);
  text('ESCAPE', 606, 26);
  
  player_sprite.collide(finish_line, finish_screen)
  
}
