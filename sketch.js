var paddle;
var ball, ballImg;
var ball2, ball2Img;
var w1, w2, w3;
var backImg;

var score = 0;
var level = 0;
var counter = 0;
var lives = 3;

var gameOver, gameOverImg;
var blockHit;
var levelUp;
var restartImg;

var timeOver, timeOverImg;

var xtralife, xtralifeImg;
var xtraball, xtraballImg;
var xtrapoint, xtrapointImg;

var min = 10;
var sec = 603;
var seco = 603;

var aloo, aloo1, aloo2;

function preload() {
  backImg = loadImage("background.jpg");

  ballImg = loadImage('ball.png');
  ball2Img = loadImage('ball2.png');

  PImg = loadImage("pink.png");
  YImg = loadImage("yellow.png");
  LGImg = loadImage("lgreen.png");
  LBImg = loadImage("LBlue.png");
  DGImg = loadImage("dgreen.png");
  DBImg = loadImage("Darkblue.png");
  OImg = loadImage("orange.png");
  RImg = loadImage("red.png");
  BRImg = loadImage("brown.png");
  BLImg = loadImage("black.png");
 
  bImg = loadImage("3.png");
  b2Img = loadImage('ball2.png'); 

  darkImg = loadImage("1.png");

  liveImg = loadImage("life.png");

  gameOverImg = loadImage('gameOver.png');
  timeOverImg = loadImage('timeout1.png');

  blockHit = loadSound('block_hit.mp3');
  gameOverSound = loadSound('level_up.mp3');

  //restartImg = loadImage('restart.png');

  introImg = loadImage('Main.png');

  xtralifeImg = loadImage('life.png');
  xtraballImg = loadImage('xball.png');
  xtrapointImg = loadImage('10.png');
}

function setup() {
  createCanvas(displayWidth, displayHeight);

  w1 = createSprite(-15, displayHeight/2, 30, displayHeight);

  w2 = createSprite(displayWidth/2, -15, displayWidth, 30);

  w3 = createSprite(displayWidth+15, displayHeight/2, 30, displayHeight);

  w4 = createSprite(displayWidth+14, displayHeight-150, 30, displayHeight/3+50);
  w4.visible = false;


  paddle = createSprite(displayWidth/2, displayHeight-5, 100, 20);
  paddle.shapeColor = '#F39C12';


  ba1 = createSprite(120, 80, 100, 50);
  ba1.addImage(PImg);
  ba1.visible = false;
  ba2 = createSprite(177, 80, 100, 50);
  ba2.addImage(YImg);
  ba2.visible = false;
  ba3 = createSprite(234, 80, 100, 50);
  ba3.addImage(PImg);
  ba3.visible = false;
  ba4 = createSprite(291, 80, 100, 50);
  ba4.addImage(RImg);
  ba4.visible = false;
  ba5 = createSprite(348, 80, 100, 50);
  ba5.addImage(darkImg);
  ba5.visible = false;
  ba6 = createSprite(405, 80, 100, 50);
  ba6.addImage(darkImg);
  ba6.visible = false;
  ba7 = createSprite(462, 80, 100, 50);
  ba7.addImage(OImg);
  ba7.visible = false;
  ba8 = createSprite(519, 80, 100, 50);
  ba8.addImage(LGImg);
  ba8.visible = false;
  ba9 = createSprite(576, 80, 100, 50);
  ba9.addImage(RImg);
  ba9.visible = false;
  ba10 = createSprite(633, 80, 100, 50);
  ba10.addImage(darkImg);
  ba10.visible = false;
  ba11 = createSprite(690, 80, 100, 50);
  ba11.addImage(darkImg);
  ba11.visible = false;
  ba12 = createSprite(747, 80, 100, 50);
  ba12.addImage(LGImg);
  ba12.visible = false;
  ba13 = createSprite(804, 80, 100, 50);
  ba13.addImage(OImg);
  ba13.visible = false;
  ba14 = createSprite(861, 80, 100, 50);
  ba14.addImage(PImg);
  ba14.visible = false;
  ba15 = createSprite(918, 80, 100, 50);
  ba15.addImage(BRImg);
  ba15.visible = false;


  bb1 = createSprite(120, 137, 100, 50);
  bb1.addImage(LGImg);
  bb1.visible = false;
  bb2 = createSprite(177, 137, 100, 50);
  bb2.addImage(DGImg);
  bb2.visible = false;
  bb3 = createSprite(234, 137, 100, 50);
  bb3.addImage(OImg);
  bb3.visible = false;
  bb4 = createSprite(291, 137, 100, 50);
  bb4.addImage(LGImg);
  bb4.visible = false;
  bb5 = createSprite(348, 137, 100, 50);
  bb5.addImage(darkImg);
  bb5.visible = false;
  bb6 = createSprite(405, 137, 100, 50);
  bb6.addImage(darkImg);
  bb6.visible = false;
  bb7 = createSprite(462, 137, 100, 50);
  bb7.addImage(PImg);
  bb7.visible = false;
  bb8 = createSprite(519, 137, 100, 50);
  bb8.addImage(BRImg);
  bb8.visible = false;
  bb9 = createSprite(576, 137, 100, 50);
  bb9.addImage(LBImg);
  bb9.visible = false;
  bb10 = createSprite(633, 137, 100, 50);
  bb10.addImage(darkImg);
  bb10.visible = false;
  bb11 = createSprite(690, 137, 100, 50);
  bb11.addImage(darkImg);
  bb11.visible = false;
  bb12 = createSprite(747, 137, 100, 50);
  bb12.addImage(DBImg);
  bb12.visible = false;
  bb13 = createSprite(804, 137, 100, 50);
  bb13.addImage(YImg);
  bb13.visible = false;
  bb14 = createSprite(861, 137, 100, 50);
  bb14.addImage(RImg);
  bb14.visible = false;
  bb15 = createSprite(918, 137, 100, 50);
  bb15.addImage(YImg);
  bb15.visible = false;


  bc1 = createSprite(120, 194, 100, 50);
  bc1.addImage(YImg);
  bc1.visible = false;
  bc2 = createSprite(177, 194, 100, 50);
  bc2.addImage(BRImg);
  bc2.visible = false;
  bc3 = createSprite(234, 194, 100, 50);
  bc3.addImage(DBImg);
  bc3.visible = false;
  bc4 = createSprite(291, 194, 100, 50);
  bc4.addImage(YImg);
  bc4.visible = false;
  bc5 = createSprite(348, 194, 100, 50);
  bc5.addImage(darkImg);
  bc5.visible = false;
  bc6 = createSprite(405, 194, 100, 50);
  bc6.addImage(darkImg);
  bc6.visible = false;
  bc7 = createSprite(462, 194, 100, 50);
  bc7.addImage(DBImg);
  bc7.visible = false;
  bc8 = createSprite(519, 194, 100, 50);
  bc8.addImage(YImg);
  bc8.visible = false;
  bc9 = createSprite(576, 194, 100, 50);
  bc9.addImage(OImg);
  bc9.visible = false;
  bc10 = createSprite(633, 194, 100, 50);
  bc10.addImage(darkImg);
  bc10.visible = false;
  bc11 = createSprite(690, 194, 100, 50);
  bc11.addImage(darkImg);
  bc11.visible = false;
  bc12 = createSprite(747, 194, 100, 50);
  bc12.addImage(BRImg);
  bc12.visible = false;
  bc13 = createSprite(804, 194, 100, 50);
  bc13.addImage(DGImg);
  bc13.visible = false;
  bc14 = createSprite(861, 194, 100, 50);
  bc14.addImage(LBImg);
  bc14.visible = false;
  bc15 = createSprite(918, 194, 100, 50);
  bc15.addImage(BLImg);
  bc15.visible = false;


  bd1 = createSprite(120, 251, 100, 50);
  bd1.addImage(OImg);
  bd1.visible = false;
  bd2 = createSprite(177, 251, 100, 50);
  bd2.addImage(RImg);
  bd2.visible = false;
  bd3 = createSprite(234, 251, 100, 50);
  bd3.addImage(PImg);
  bd3.visible = false;
  bd4 = createSprite(291, 251, 100, 50);
  bd4.addImage(LBImg);
  bd4.visible = false;
  bd5 = createSprite(348, 251, 100, 50);
  bd5.addImage(darkImg);
  bd5.visible = false;
  bd6 = createSprite(405, 251, 100, 50);
  bd6.addImage(darkImg);
  bd6.visible = false;
  bd7 = createSprite(462, 251, 100, 50);
  bd7.addImage(BLImg);
  bd7.visible = false;
  bd8 = createSprite(519, 251, 100, 50);
  bd8.addImage(DGImg);
  bd8.visible = false;
  bd9 = createSprite(576, 251, 100, 50);
  bd9.addImage(PImg);
  bd9.visible = false;
  bd10 = createSprite(633, 251, 100, 50);
  bd10.addImage(darkImg);
  bd10.visible = false;
  bd11 = createSprite(690, 251, 100, 50);
  bd11.addImage(darkImg);
  bd11.visible = false;
  bd12 = createSprite(747, 251, 100, 50);
  bd12.addImage(RImg);
  bd12.visible = false;
  bd13 = createSprite(804, 251, 100, 50);
  bd13.addImage(YImg);
  bd13.visible = false;
  bd14 = createSprite(861, 251, 100, 50);
  bd14.addImage(LGImg);
  bd14.visible = false;
  bd15 = createSprite(918, 251, 100, 50);
  bd15.addImage(PImg);
  bd15.visible = false;



  be1 = createSprite(120, 308, 100, 50);
  be1.addImage(darkImg);
  be1.visible = false;
  be2 = createSprite(177, 308, 100, 50);
  be2.addImage(darkImg);
  be2.visible = false;
  be3 = createSprite(234, 308, 100, 50);
  be3.addImage(darkImg);
  be3.visible = false;
  be4 = createSprite(291, 308, 100, 50);
  be4.addImage(darkImg);
  be4.visible = false;
  be5 = createSprite(348, 308, 100, 50);
  be5.addImage(darkImg);
  be5.visible = false;
  be6 = createSprite(405, 308, 100, 50);
  be6.addImage(darkImg);
  be6.visible = false;
  be7 = createSprite(462, 308, 100, 50);
  be7.addImage(darkImg);
  be7.visible = false;
  be8 = createSprite(519, 308, 100, 50);
  be8.addImage(darkImg);
  be8.visible = false;
  be9 = createSprite(576, 308, 100, 50);
  be9.addImage(darkImg);
  be9.visible = false;
  be10 = createSprite(633, 308, 100, 50);
  be10.addImage(darkImg);
  be10.visible = false;
  be11 = createSprite(690, 308, 100, 50);
  be11.addImage(darkImg);
  be11.visible = false;
  be12 = createSprite(747, 308, 100, 50);
  be12.addImage(darkImg);
  be12.visible = false;
  be13 = createSprite(804, 308, 100, 50);
  be13.addImage(darkImg);
  be13.visible = false;
  be14 = createSprite(861, 308, 100, 50);
  be14.addImage(darkImg);
  be14.visible = false;
  be15 = createSprite(918, 308, 100, 50);
  be15.addImage(darkImg);
  be15.visible = false;


  bf1 = createSprite(120, 365, 100, 50);
  bf1.addImage(darkImg);
  bf1.visible = false;
  bf2 = createSprite(177, 365, 100, 50);
  bf2.addImage(darkImg);
  bf2.visible = false;
  bf3 = createSprite(234, 365, 100, 50);
  bf3.addImage(darkImg);
  bf3.visible = false;
  bf4 = createSprite(291, 365, 100, 50);
  bf4.addImage(darkImg);
  bf4.visible = false;
  bf5 = createSprite(348, 365, 100, 50);
  bf5.addImage(darkImg);
  bf5.visible = false;
  bf6 = createSprite(405, 365, 100, 50);
  bf6.addImage(darkImg);
  bf6.visible = false;
  bf7 = createSprite(462, 365, 100, 50);
  bf7.addImage(darkImg);
  bf7.visible = false;
  bf8 = createSprite(519, 365, 100, 50);
  bf8.addImage(darkImg);
  bf8.visible = false;
  bf9 = createSprite(576, 365, 100, 50);
  bf9.addImage(darkImg);
  bf9.visible = false;
  bf10 = createSprite(633, 365, 100, 50);
  bf10.addImage(darkImg);
  bf10.visible = false;
  bf11 = createSprite(690, 365, 100, 50);
  bf11.addImage(darkImg);
  bf11.visible = false;
  bf12 = createSprite(747, 365, 100, 50);
  bf12.addImage(darkImg);
  bf12.visible = false;
  bf13 = createSprite(804, 365, 100, 50);
  bf13.addImage(darkImg);
  bf13.visible = false;
  bf14 = createSprite(861, 365, 100, 50);
  bf14.addImage(darkImg);
  bf14.visible = false;
  bf15 = createSprite(918, 365, 100, 50);
  bf15.addImage(darkImg);
  bf15.visible = false;


  bg1 = createSprite(120, 422, 100, 50);
  bg1.addImage(OImg);
  bg1.visible = false;
  bg2 = createSprite(177, 422, 100, 50);
  bg2.addImage(LBImg);
  bg2.visible = false;
  bg3 = createSprite(234, 422, 100, 50);
  bg3.addImage(DGImg);
  bg3.visible = false;
  bg4 = createSprite(291, 422, 100, 50);
  bg4.addImage(PImg);
  bg4.visible = false;
  bg5 = createSprite(348, 422, 100, 50);
  bg5.addImage(darkImg);
  bg5.visible = false;
  bg6 = createSprite(405, 422, 100, 50);
  bg6.addImage(darkImg);
  bg6.visible = false;
  bg7 = createSprite(462, 422, 100, 50);
  bg7.addImage(OImg);
  bg7.visible = false;
  bg8 = createSprite(519, 422, 100, 50);
  bg8.addImage(YImg);
  bg8.visible = false;
  bg9 = createSprite(576, 422, 100, 50);
  bg9.addImage(PImg);
  bg9.visible = false;
  bg10 = createSprite(633, 422, 100, 50);
  bg10.addImage(darkImg);
  bg10.visible = false;
  bg11 = createSprite(690, 422, 100, 50);
  bg11.addImage(darkImg);
  bg11.visible = false;
  bg12 = createSprite(747, 422, 100, 50);
  bg12.addImage(YImg);
  bg12.visible = false;
  bg13 = createSprite(804, 422, 100, 50);
  bg13.addImage(RImg);
  bg13.visible = false;
  bg14 = createSprite(861, 422, 100, 50);
  bg14.addImage(LBImg);
  bg14.visible = false;
  bg15 = createSprite(918, 422, 100, 50);
  bg15.addImage(BRImg);
  bg15.visible = false;


  bh1 = createSprite(120, 479, 100, 50);
  bh1.addImage(YImg);
  bh1.visible = false;
  bh2 = createSprite(177, 479, 100, 50);
  bh2.addImage(BRImg);
  bh2.visible = false;
  bh3 = createSprite(234, 479, 100, 50);
  bh3.addImage(RImg);
  bh3.visible = false;
  bh4 = createSprite(291, 479, 100, 50);
  bh4.addImage(LGImg);
  bh4.visible = false;
  bh5 = createSprite(348, 479, 100, 50);
  bh5.addImage(darkImg);
  bh5.visible = false;
  bh6 = createSprite(405, 479, 100, 50);
  bh6.addImage(darkImg);
  bh6.visible = false;
  bh7 = createSprite(462, 479, 100, 50);
  bh7.addImage(LGImg);
  bh7.visible = false;
  bh8 = createSprite(519, 479, 100, 50);
  bh8.addImage(RImg);
  bh8.visible = false;
  bh9 = createSprite(576, 479, 100, 50);
  bh9.addImage(BRImg);
  bh9.visible = false;
  bh10 = createSprite(633, 479, 100, 50);
  bh10.addImage(darkImg);
  bh10.visible = false;
  bh11 = createSprite(690, 479, 100, 50);
  bh11.addImage(darkImg);
  bh11.visible = false;
  bh12 = createSprite(747, 479, 100, 50);
  bh12.addImage(DBImg);
  bh12.visible = false;
  bh13 = createSprite(804, 479, 100, 50);
  bh13.addImage(LGImg);
  bh13.visible = false;
  bh14 = createSprite(861, 479, 100, 50);
  bh14.addImage(OImg);
  bh14.visible = false;
  bh15 = createSprite(918, 479, 100, 50);
  bh15.addImage(YImg);
  bh15.visible = false;


  bi1 = createSprite(120, 536, 100, 50);
  bi1.addImage(DBImg);
  bi1.visible = false;
  bi2 = createSprite(177, 536, 100, 50);
  bi2.addImage(PImg);
  bi2.visible = false;
  bi3 = createSprite(234, 536, 100, 50);
  bi3.addImage(OImg);
  bi3.visible = false;
  bi4 = createSprite(291, 536, 100, 50);
  bi4.addImage(BLImg);
  bi4.visible = false;
  bi5 = createSprite(348, 536, 100, 50);
  bi5.addImage(darkImg);
  bi5.visible = false;
  bi6 = createSprite(405, 536, 100, 50);
  bi6.addImage(darkImg);
  bi6.visible = false;
  bi7 = createSprite(462, 536, 100, 50);
  bi7.addImage(DGImg);
  bi7.visible = false;
  bi8 = createSprite(519, 536, 100, 50);
  bi8.addImage(LBImg);
  bi8.visible = false;
  bi9 = createSprite(576, 536, 100, 50);
  bi9.addImage(OImg);
  bi9.visible = false;
  bi10 = createSprite(633, 536, 100, 50);
  bi10.addImage(darkImg);
  bi10.visible = false;
  bi11 = createSprite(690, 536, 100, 50);
  bi11.addImage(darkImg);
  bi11.visible = false;
  bi12 = createSprite(747, 536, 100, 50);
  bi12.addImage(LBImg);
  bi12.visible = false;
  bi13 = createSprite(804, 536, 100, 50);
  bi13.addImage(BRImg);
  bi13.visible = false;
  bi14 = createSprite(861, 536, 100, 50);
  bi14.addImage(PImg);
  bi14.visible = false;
  bi15 = createSprite(918, 536, 100, 50);
  bi15.addImage(DGImg);
  bi15.visible = false;


  bj1 = createSprite(120, 593, 100, 50);
  bj1.addImage(LGImg);
  bj1.visible = false;
  bj2 = createSprite(177, 593, 100, 50);
  bj2.addImage(RImg);
  bj2.visible = false;
  bj3 = createSprite(234, 593, 100, 50);
  bj3.addImage(YImg);
  bj3.visible = false;
  bj4 = createSprite(291, 593, 100, 50);
  bj4.addImage(LBImg);
  bj4.visible = false;
  bj5 = createSprite(348, 593, 100, 50);
  bj5.addImage(darkImg);
  bj5.visible = false;
  bj6 = createSprite(405, 593, 100, 50);
  bj6.addImage(darkImg);
  bj6.visible = false;
  bj7 = createSprite(462, 593, 100, 50);
  bj7.addImage(PImg);
  bj7.visible = false;
  bj8 = createSprite(519, 593, 100, 50);
  bj8.addImage(DBImg);
  bj8.visible = false;
  bj9 = createSprite(576, 593, 100, 50);
  bj9.addImage(YImg);
  bj9.visible = false;
  bj10 = createSprite(633, 593, 100, 50);
  bj10.addImage(darkImg);
  bj10.visible = false;
  bj11 = createSprite(690, 593, 100, 50);
  bj11.addImage(darkImg);
  bj11.visible = false;
  bj12 = createSprite(747, 593, 100, 50);
  bj12.addImage(RImg);
  bj12.visible = false;
  bj13 = createSprite(804, 593, 100, 50);
  bj13.addImage(YImg);
  bj13.visible = false;
  bj14 = createSprite(861, 593, 100, 50);
  bj14.addImage(DBImg);
  bj14.visible = false;
  bj15 = createSprite(918, 593, 100, 50);
  bj15.addImage(LGImg);
  bj15.visible = false;




  ca1 = createSprite(120, 422, 100, 50);
  ca1.addImage(darkImg);
  ca1.visible = false;
  ca2 = createSprite(177, 422, 100, 50);
  ca2.addImage(darkImg);
  ca2.visible = false;
  ca3 = createSprite(234, 422, 100, 50);
  ca3.addImage(darkImg);
  ca3.visible = false;
  ca4 = createSprite(291, 422, 100, 50);
  ca4.addImage(darkImg);
  ca4.visible = false;
  ca5 = createSprite(348, 422, 100, 50);
  ca5.addImage(darkImg);
  ca5g = 0;
  ca5.visible = false;
  ca6 = createSprite(405, 422, 100, 50);
  ca6.addImage(darkImg);
  ca6g = 0;
  ca6.visible = false;
  ca7 = createSprite(462, 422, 100, 50);
  ca7.addImage(darkImg);
  ca7.visible = false;
  ca8 = createSprite(519, 422, 100, 50);
  ca8.addImage(darkImg);
  ca8.visible = false;
  ca9 = createSprite(576, 422, 100, 50);
  ca9.addImage(darkImg);
  ca9.visible = false;
  ca10 = createSprite(633, 422, 100, 50);
  ca10.addImage(darkImg);
  ca10g = 0;
  ca10.visible = false;
  ca11 = createSprite(690, 422, 100, 50);
  ca11.addImage(darkImg);
  ca11g = 0;
  ca11.visible = false;
  ca12 = createSprite(747, 422, 100, 50);
  ca12.addImage(darkImg);
  ca12.visible = false;
  ca13 = createSprite(804, 422, 100, 50);
  ca13.addImage(darkImg);
  ca13.visible = false;
  ca14 = createSprite(861, 422, 100, 50);
  ca14.addImage(darkImg);
  ca14.visible = false;
  ca15 = createSprite(918, 422, 100, 50);
  ca15.addImage(darkImg);
  ca15.visible = false;


  cb0 = createSprite(63, 479, 100, 50);
  cb0.addImage(darkImg);
  cb0.visible = false;
  cb1 = createSprite(120, 479, 100, 50);
  cb1.addImage(darkImg);
  cb1.visible = false;
  cb2 = createSprite(177, 479, 100, 50);
  cb2.addImage(darkImg);
  cb2.visible = false;
  cb3 = createSprite(234, 479, 100, 50);
  cb3.addImage(darkImg);
  cb3.visible = false;
  cb4 = createSprite(291, 479, 100, 50);
  cb4.addImage(darkImg);
  cb4.visible = false;
  cb5 = createSprite(348, 479, 100, 50);
  cb5.addImage(darkImg);
  cb5g = 0;
  cb5.visible = false;
  cb6 = createSprite(405, 479, 100, 50);
  cb6.addImage(darkImg);
  cb6g = 0;
  cb6.visible = false;
  cb7 = createSprite(462, 479, 100, 50);
  cb7.addImage(darkImg);
  cb7.visible = false;
  cb8 = createSprite(519, 479, 100, 50);
  cb8.addImage(darkImg);
  cb8.visible = false;
  cb9 = createSprite(576, 479, 100, 50);
  cb9.addImage(darkImg);
  cb9.visible = false;
  cb10 = createSprite(633, 479, 100, 50);
  cb10.addImage(darkImg);
  cb10g = 0;
  cb10.visible = false;
  cb11 = createSprite(690, 479, 100, 50);
  cb11.addImage(darkImg);
  cb11g = 0;
  cb11.visible = false;
  cb12 = createSprite(747, 479, 100, 50);
  cb12.addImage(darkImg);
  cb12.visible = false;
  cb13 = createSprite(804, 479, 100, 50);
  cb13.addImage(darkImg);
  cb13.visible = false;
  cb14 = createSprite(861, 479, 100, 50);
  cb14.addImage(darkImg);
  cb14.visible = false;
  cb15 = createSprite(918, 479, 100, 50);
  cb15.addImage(darkImg);
  cb15.visible = false;
  cb16 = createSprite(975, 479, 100, 50);
  cb16.addImage(darkImg);
  cb16.visible = false;


  cc1 = createSprite(177, 365, 100, 50);
  cc1.addImage(LBImg);
  cc1.visible = false;
  cc2 = createSprite(234, 365, 100, 50);
  cc2.addImage(RImg);
  cc2.visible = false;
  cc3 = createSprite(291, 365, 100, 50);
  cc3.addImage(YImg);
  cc3.visible = false;
  cc4 = createSprite(348, 365, 100, 50);
  cc4.addImage(PImg);
  cc4g = 0;
  cc4.visible = false;
  cc5 = createSprite(405, 365, 100, 50);
  cc5.addImage(DGImg);
  cc5g = 0;
  cc5.visible = false;
  cc6 = createSprite(462, 365, 100, 50);
  cc6.addImage(YImg);
  cc6.visible = false;
  cc7 = createSprite(519, 365, 100, 50);
  cc7.addImage(BRImg);
  cc7.visible = false;
  cc8 = createSprite(576, 365, 100, 50);
  cc8.addImage(OImg);
  cc8.visible = false;
  cc9 = createSprite(633, 365, 100, 50);
  cc9.addImage(LGImg);
  cc9g = 0;
  cc9.visible = false;
  cc10 = createSprite(690, 365, 100, 50);
  cc10.addImage(DBImg);
  cc10g = 0;
  cc10.visible = false;
  cc11 = createSprite(747, 365, 100, 50);
  cc11.addImage(PImg);
  cc11.visible = false;
  cc12 = createSprite(804, 365, 100, 50);
  cc12.addImage(LBImg);
  cc12.visible = false;
  cc13 = createSprite(861, 365, 100, 50);
  cc13.addImage(OImg);
  cc13.visible = false;


  cd1 = createSprite(234, 308, 100, 50);
  cd1.addImage(LGImg);
  cd1.visible = false;
  cd2 = createSprite(291, 308, 100, 50);
  cd2.addImage(OImg);
  cd2.visible = false;
  cd3 = createSprite(348, 308, 100, 50);
  cd3.addImage(BRImg);
  cd3.visible = false;
  cd4 = createSprite(405, 308, 100, 50);
  cd4.addImage(LBImg);
  cd4g = 0;
  cd4.visible = false;
  cd5 = createSprite(462, 308, 100, 50);
  cd5.addImage(DBImg);
  cd5g = 0;
  cd5.visible = false;
  cd6 = createSprite(519, 308, 100, 50);
  cd6.addImage(PImg);
  cd6.visible = false;
  cd7 = createSprite(576, 308, 100, 50);
  cd7.addImage(DGImg);
  cd7.visible = false;
  cd8 = createSprite(633, 308, 100, 50);
  cd8.addImage(YImg);
  cd8.visible = false;
  cd9 = createSprite(690, 308, 100, 50);
  cd9.addImage(OImg);
  cd9g = 0;
  cd9.visible = false;
  cd10 = createSprite(747, 308, 100, 50);
  cd10.addImage(BRImg);
  cd10g = 0;
  cd10.visible = false;
  cd11 = createSprite(804, 308, 100, 50);
  cd11.addImage(RImg);
  cd11.visible = false;


  ce1 = createSprite(291, 251, 100, 50);
  ce1.addImage(RImg);
  ce1.visible = false;
  ce2 = createSprite(348, 251, 100, 50);
  ce2.addImage(LBImg);
  ce2.visible = false;
  ce3 = createSprite(405, 251, 100, 50);
  ce3.addImage(BRImg);
  ce3g = 0;
  ce3.visible = false;
  ce4 = createSprite(462, 251, 100, 50);
  ce4.addImage(PImg);
  ce4g = 0;
  ce4.visible = false;
  ce5 = createSprite(519, 251, 100, 50);
  ce5.addImage(OImg);
  ce5.visible = false;
  ce6 = createSprite(576, 251, 100, 50);
  ce6.addImage(LGImg);
  ce6.visible = false;
  ce7 = createSprite(633, 251, 100, 50);
  ce7.addImage(BLImg);
  ce7.visible = false;
  ce8 = createSprite(690, 251, 100, 50);
  ce8.addImage(YImg);
  ce8g = 0;
  ce8.visible = false;
  ce9 = createSprite(747, 251, 100, 50);
  ce9.addImage(PImg);
  ce9g = 0;
  ce9.visible = false;


  cf1 = createSprite(348, 194, 100, 50);
  cf1.addImage(OImg);
  cf1.visible = false;
  cf2 = createSprite(405, 194, 100, 50);
  cf2.addImage(PImg);
  cf2g = 0;
  cf2.visible = false;
  cf3 = createSprite(462, 194, 100, 50);
  cf3.addImage(DGImg);
  cf3g = 0;
  cf3.visible = false;
  cf4 = createSprite(519, 194, 100, 50);
  cf4.addImage(YImg);
  cf4.visible = false;
  cf5 = createSprite(576, 194, 100, 50);
  cf5.addImage(DBImg);
  cf5.visible = false;
  cf6 = createSprite(633, 194, 100, 50);
  cf6.addImage(BRImg);
  cf6.visible = false;
  cf7 = createSprite(690, 194, 100, 50);
  cf7.addImage(LGImg);
  cf7g = 0;
  cf7.visible = false;


  cg1 = createSprite(405, 137, 100, 50);
  cg1.addImage(YImg);
  cg1g = 0;
  cg1.visible = false;
  cg2 = createSprite(462, 137, 100, 50);
  cg2.addImage(RImg);
  cg2g = 0;
  cg2.visible = false;
  cg3 = createSprite(519, 137, 100, 50);
  cg3.addImage(LBImg);
  cg3.visible = false;
  cg4 = createSprite(576, 137, 100, 50);
  cg4.addImage(PImg);
  cg4.visible = false;
  cg5 = createSprite(633, 137, 100, 50);
  cg5.addImage(DBImg);
  cg5.visible = false;


  ch1 = createSprite(462, 80, 100, 50);
  ch1.addImage(DGImg);
  ch1g = 0;
  ch1.visible = false;
  ch2 = createSprite(519, 80, 100, 50);
  ch2.addImage(OImg);
  ch2.visible = false;
  ch3 = createSprite(576, 80, 100, 50);
  ch3.addImage(DBImg);
  ch3.visible = false;




  da1 = createSprite(519, 80, 100, 50);
  da1.addImage(LBImg);
  da1.visible = false;


  db1 = createSprite(462, 137, 100, 50);
  db1.addImage(YImg);
  db1.visible = false;
  db2 = createSprite(519, 137, 100, 50);
  db2.addImage(RImg);
  db2.visible = false;
  db3 = createSprite(576, 137, 100, 50);
  db3.addImage(OImg);
  db3.visible = false;


  dc1 = createSprite(348, 194, 100, 50);
  dc1.addImage(DBImg);
  dc1.visible = false;
  dc2 = createSprite(405, 194, 100, 50);
  dc2.addImage(OImg);
  dc2.visible = false;
  dc3 = createSprite(462, 194, 100, 50);
  dc3.addImage(LBImg);
  dc3.visible = false;
  dc4 = createSprite(519, 194, 100, 50);
  dc4.addImage(YImg);
  dc4.visible = false;
  dc5 = createSprite(576, 194, 100, 50);
  dc5.addImage(BRImg);
  dc5.visible = false;
  dc6 = createSprite(633, 194, 100, 50);
  dc6.addImage(BLImg);
  dc6.visible = false;
  dc7 = createSprite(690, 194, 100, 50);
  dc7.addImage(PImg);
  dc7.visible = false;


  dd1 = createSprite(234, 251, 100, 50);
  dd1.addImage(PImg);
  dd1.visible = false;
  dd2 = createSprite(291, 251, 100, 50);
  dd2.addImage(DGImg);
  dd2.visible = false;
  dd3 = createSprite(348, 251, 100, 50);
  dd3.addImage(YImg);
  dd3.visible = false;
  dd4 = createSprite(405, 251, 100, 50);
  dd4.addImage(LBImg);
  dd4.visible = false;
  dd5 = createSprite(462, 251, 100, 50);
  dd5.addImage(RImg);
  dd5.visible = false;
  dd6 = createSprite(519, 251, 100, 50);
  dd6.addImage(BRImg);
  dd6.visible = false;
  dd7 = createSprite(576, 251, 100, 50);
  dd7.addImage(PImg);
  dd7.visible = false;
  dd8 = createSprite(633, 251, 100, 50);
  dd8.addImage(LGImg);
  dd8.visible = false;
  dd9 = createSprite(690, 251, 100, 50);
  dd9.addImage(DBImg);
  dd9.visible = false;
  dd10 = createSprite(747, 251, 100, 50);
  dd10.addImage(OImg);
  dd10.visible = false;
  dd11 = createSprite(804, 251, 100, 50);
  dd11.addImage(YImg);
  dd11.visible = false;


  de1 = createSprite(120, 308, 100, 50);
  de1.addImage(darkImg);
  de1.visible = false;
  de2 = createSprite(177, 308, 100, 50);
  de2.addImage(darkImg);
  de2.visible = false;
  de3 = createSprite(234, 308, 100, 50);
  de3.addImage(darkImg);
  de3.visible = false;
  de4 = createSprite(291, 308, 100, 50);
  de4.addImage(darkImg);
  de4.visible = false;
  de5 = createSprite(348, 308, 100, 50);
  de5.addImage(darkImg);
  de5.visible = false;
  de6 = createSprite(405, 308, 100, 50);
  de6.addImage(darkImg);
  de6.visible = false;
  de7 = createSprite(462, 308, 100, 50);
  de7.addImage(darkImg);
  de7.visible = false;
  de8 = createSprite(519, 308, 100, 50);
  de8.addImage(darkImg);
  de8.visible = false;
  de9 = createSprite(576, 308, 100, 50);
  de9.addImage(darkImg);
  de9.visible = false;
  de10 = createSprite(633, 308, 100, 50);
  de10.addImage(darkImg);
  de10.visible = false;
  de11 = createSprite(690, 308, 100, 50);
  de11.addImage(darkImg);
  de11.visible = false;
  de12 = createSprite(747, 308, 100, 50);
  de12.addImage(darkImg);
  de12.visible = false;
  de13 = createSprite(804, 308, 100, 50);
  de13.addImage(darkImg);
  de13.visible = false;
  de14 = createSprite(861, 308, 100, 50);
  de14.addImage(darkImg);
  de14.visible = false;
  de15 = createSprite(918, 308, 100, 50);
  de15.addImage(darkImg);
  de15.visible = false;


  df1 = createSprite(234, 365, 100, 50);
  df1.addImage(OImg);
  df1.visible = false;
  df2 = createSprite(291, 365, 100, 50);
  df2.addImage(DBImg);
  df2.visible = false;
  df3 = createSprite(348, 365, 100, 50);
  df3.addImage(PImg);
  df3.visible = false;
  df4 = createSprite(405, 365, 100, 50);
  df4.addImage(BRImg);
  df4.visible = false;
  df5 = createSprite(462, 365, 100, 50);
  df5.addImage(LBImg);
  df5.visible = false;
  df6 = createSprite(519, 365, 100, 50);
  df6.addImage(RImg);
  df6.visible = false;
  df7 = createSprite(576, 365, 100, 50);
  df7.addImage(BRImg);
  df7.visible = false;
  df8 = createSprite(633, 365, 100, 50);
  df8.addImage(PImg);
  df8.visible = false;
  df9 = createSprite(690, 365, 100, 50);
  df9.addImage(YImg);
  df9.visible = false;
  df10 = createSprite(747, 365, 100, 50);
  df10.addImage(DGImg);
  df10.visible = false;
  df11 = createSprite(804, 365, 100, 50);
  df11.addImage(LGImg);
  df11.visible = false;


  dg1 = createSprite(348, 422, 100, 50);
  dg1.addImage(LBImg);
  dg1.visible = false;
  dg2 = createSprite(405, 422, 100, 50);
  dg2.addImage(YImg);
  dg2.visible = false;
  dg3 = createSprite(462, 422, 100, 50);
  dg3.addImage(PImg);
  dg3.visible = false;
  dg4 = createSprite(519, 422, 100, 50);
  dg4.addImage(BLImg);
  dg4.visible = false;
  dg5 = createSprite(576, 422, 100, 50);
  dg5.addImage(LGImg);
  dg5.visible = false;
  dg6 = createSprite(633, 422, 100, 50);
  dg6.addImage(RImg);
  dg6.visible = false;
  dg7 = createSprite(690, 422, 100, 50);
  dg7.addImage(OImg);
  dg7.visible = false;


  dh1 = createSprite(462, 479, 100, 50);
  dh1.addImage(OImg);
  dh1.visible = false;
  dh2 = createSprite(519, 479, 100, 50);
  dh2.addImage(RImg);
  dh2.visible = false;
  dh3 = createSprite(576, 479, 100, 50);
  dh3.addImage(YImg);
  dh3.visible = false;

  ball = createSprite(displayWidth-40, displayHeight/10, 15, 15);
  ball.addImage(ballImg);
  ball.scale = 0.20;
  ball.velocityY = 0;

  ball2 = createSprite(displayWidth-40, displayHeight/10, 15, 15);
  ball2.addImage(ball2Img);
  ball2.scale = 0.20;
  ball2.velocityY = 0;
  ball2.visible = false;

  live1 = createSprite(displayWidth-95, 20, 15, 15);
  live1.addImage(liveImg);
  live2 = createSprite(displayWidth-65, 20, 15, 15);
  live2.addImage(liveImg);
  live3 = createSprite(displayWidth-35, 20, 15, 15);
  live3.addImage(liveImg);

  gameOver = createSprite(displayWidth/2, displayHeight/2-100);
  gameOver.addImage(gameOverImg);
  gameOver.visible = false;

  timeOver = createSprite(displayWidth/2, displayHeight/2);
  timeOver.addImage(timeOverImg);
  timeOver.visible = false;


  /*restart = createSprite(displayWidth/2+400, displayHeight/2+300);
  restart.addImage(restartImg);
  restart.visible = false;
  restart.scale = 1.5;*/

  aloo = createSprite(random(20, displayWidth-20), random(-2200, -2700), 15, 15);
  aloo.velocityY = 10;
  aloo.addImage(xtralifeImg);
  aloo.scale = 1.5;

  aloo2 = createSprite(random(20, displayWidth-20), random(-2800, -3300), 15, 15);
  aloo2.velocityY = 10;
  aloo2.addImage(xtraballImg);
  aloo2.scale = 0.15;  

  aloo3 = createSprite(random(20, displayWidth-20), random(-3400, -3900), 15, 15);
  aloo3.velocityY = 10;
  aloo3.addImage(xtrapointImg);
  aloo3.scale = 0.25;

  intro = createSprite(displayWidth/2, displayHeight/2);
  intro.addImage(introImg);
  intro.scale = 0.65;
  intro.visible = false;
}

function draw() {
  background(backImg);

    if (aloo.y > displayHeight+50){
      aloo.visible = true;
      aloo.x = random(20, displayWidth-20);
      aloo.y = random(-2000, -2500);
    }

    if (aloo2.y > displayHeight+50){
      aloo2.visible = true;
      aloo2.x = random(20, displayWidth-20);
      aloo2.y = random(-3000, -3500);
    }

    if (aloo3.y > displayHeight+50){
      aloo3.visible = true;
      aloo3.x = random(20, displayWidth-20);
      aloo3.y = random(-4000, -4500);
    }

    if (ball2.y > displayHeight+10){
      ball2.x = displayWidth-40;
      ball2.y = displayHeight/10;
      ball2.velocityX = 0;
      ball2.velocityY = 0;
      ball2.visible = false;
    }

    if (aloo.isTouching(paddle)){
      aloo.x = random(20, displayWidth-20);
      aloo.y = random(-2000, -2500);
      if (lives == 3){
        ball.x = displayWidth-40;
        ball.y = displayHeight/10;
        ball.vel
        lives = lives - 1;
        live1.destroy();
      }
      else if (lives == 2){
        ball.x = displayWidth-40;
        ball.y = displayHeight/10;
        lives = lives - 1;
        live2.destroy();
      }
      else if (lives == 1){
        ball.x = displayWidth-40;
        ball.y = displayHeight/10;
        lives = lives - 1;
        live3.destroy();
      }
    }

    if (aloo2.isTouching(paddle)){
      aloo2.x = random(20, displayWidth-20);
      aloo2.y = random(-3000, -3500);
      ball2.visible = true;
      ball2.velocityY = 10;
    }

    if (aloo3.isTouching(paddle)){
      aloo3.x = random(20, displayWidth-20);
      aloo3.y = random(-4000, -4500);
      score = score + 10;
    }

  paddle.x = mouseX;

  ball.bounceOff(w1);
  ball.bounceOff(w2);
  ball.bounceOff(w3);
  ball2.bounceOff(w1);
  ball2.bounceOff(w2);
  ball2.bounceOff(w3);

  if (paddle.x <= 50) {
    paddle.x = 50;
  }

  if (paddle.x >= 974) {
    paddle.x = 974;
  }

  if (frameCount % 30 === 0) {
    sec = sec - 1;
    seco = seco - 1;
  }

  if (seco == 0) {
    gameOverSound.play();
    gameOver.destroy();
    ball.destroy();
    ball2.destroy();
    aloo.destroy();
    aloo2.destroy();
    aloo3.destroy();
    paddle.x = displayWidth/2;
    sec = 0;
    timeOver.visible = true;
    //restart.visible = true;
  }

  /*if (sec > 0){
    textSize(30);
    textFont('Stencil');
    text('Time Left: '+sec, displayWidth/2+50, 30);
  }*/
  if (sec <= 0) {
    sec = 0;
  }


if (level == 0) {
  intro.visible = true;
  if (frameCount == 100) {
    level = 1;
    intro.destroy();
    ball.x = displayWidth-40;
    ball.y = displayHeight/10;
    ball.velocityY = 15;
    ball.velocityX = 0;

    ball2.x = displayWidth-40;
    ball2.y = displayHeight/10;
    ball2.velocityY = 0;
    ball2.velocityX = 0;
    ball2.visible = false;
  }
}

if(level == 1) {
  da1.visible = true;
  
  db1.visible = true;
  db2.visible = true;
  db3.visible = true;

  dc1.visible = true;
  dc2.visible = true;
  dc3.visible = true;
  dc4.visible = true;
  dc5.visible = true;
  dc6.visible = true;
  dc7.visible = true;

  dd1.visible = true;
  dd2.visible = true;
  dd3.visible = true;
  dd4.visible = true;
  dd5.visible = true;
  dd6.visible = true;
  dd7.visible = true;
  dd8.visible = true;
  dd9.visible = true;
  dd10.visible = true;
  dd11.visible = true;

  de1.visible = true;
  de2.visible = true;
  de3.visible = true;
  de4.visible = true;
  de5.visible = true;
  de6.visible = true;
  de7.visible = true;
  de8.visible = true;
  de9.visible = true;
  de10.visible = true;
  de11.visible = true;
  de12.visible = true;
  de13.visible = true;
  de14.visible = true;
  de15.visible = true;

  df1.visible = true;
  df2.visible = true;
  df3.visible = true;
  df4.visible = true;
  df5.visible = true;
  df6.visible = true;
  df7.visible = true;
  df8.visible = true;
  df9.visible = true;
  df10.visible = true;
  df11.visible = true;

  dg1.visible = true;
  dg2.visible = true;
  dg3.visible = true;
  dg4.visible = true;
  dg5.visible = true;
  dg6.visible = true;
  dg7.visible = true;

  dh1.visible = true;
  dh2.visible = true;
  dh3.visible = true;

  

  if (ball.bounceOff(paddle)) {
    ball.velocityX = random(-12, 12);
    ball.velocityY = random(-12, -10);
  }


  if (ball.bounceOff(da1)) {
    blockHit.play();
    da1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(db1)) {
    blockHit.play();
    db1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(db2)) {
    blockHit.play();
    db2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(db3)) {
    blockHit.play();
    db3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dc1)) {
    blockHit.play();
    dc1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dc2)) {
    blockHit.play();
    dc2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dc3)) {
    blockHit.play();
    dc3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dc4)) {
    blockHit.play();
    dc4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dc5)) {
    blockHit.play();
    dc5.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dc6)) {
    blockHit.play();
    dc6.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dc7)) {
    blockHit.play();
    dc7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dd1)) {
    blockHit.play();
    dd1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dd2)) {
    blockHit.play();
    dd2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dd3)) {
    blockHit.play();
    dd3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dd4)) {
    blockHit.play();
    dd4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dd5)) {
    blockHit.play();
    dd5.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dd6)) {
    blockHit.play();
    dd6.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dd7)) {
    blockHit.play();
    dd7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dd8)) {
    blockHit.play();
    dd8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dd9)) {
    blockHit.play();
    dd9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dd10)) {
    blockHit.play();
    dd10.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dd11)) {
    blockHit.play();
    dd11.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(de1)) {
    blockHit.play();
    de1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(de2)) {
    blockHit.play();
    de2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(de3)) {
    blockHit.play();
    de3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(de4)) {
    blockHit.play();
    de4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(de5)) {
    blockHit.play();
    de5.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(de6)) {
    blockHit.play();
    de6.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(de7)) {
    blockHit.play();
    de7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(de8)) {
    blockHit.play();
    de8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(de9)) {
    blockHit.play();
    de9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(de10)) {
    blockHit.play();
    de10.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(de11)) {
    blockHit.play();
    de11.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(de12)) {
    blockHit.play();
    de12.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(de13)) {
    blockHit.play();
    de13.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(de14)) {
    blockHit.play();
    de14.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(de15)) {
    blockHit.play();
    de15.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(df1)) {
    blockHit.play();
    df1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(df2)) {
    blockHit.play();
    df2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(df3)) {
    blockHit.play();
    df3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(df4)) {
    blockHit.play();
    df4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(df5)) {
    blockHit.play();
    df5.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(df6)) {
    blockHit.play();
    df6.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(df7)) {
    blockHit.play();
    df7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(df8)) {
    blockHit.play();
    df8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(df9)) {
    blockHit.play();
    df9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(df10)) {
    blockHit.play();
    df10.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(df11)) {
    blockHit.play();
    df11.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dg1)) {
    blockHit.play();
    dg1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dg2)) {
    blockHit.play();
    dg2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dg3)) {
    blockHit.play();
    dg3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dg4)) {
    blockHit.play();
    dg4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dg5)) {
    blockHit.play();
    dg5.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dg6)) {
    blockHit.play();
    dg6.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dg7)) {
    blockHit.play();
    dg7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dh1)) {
    blockHit.play();
    dh1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dh2)) {
    blockHit.play();
    dh2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(dh3)) {
    blockHit.play();
    dh3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  


  if (ball2.bounceOff(paddle)) {
    ball2.velocityX = random(-12, 12);
    ball2.velocityY = random(-12, -10);
  }


  if (ball2.bounceOff(da1)) {
    blockHit.play();
    da1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(db1)) {
    blockHit.play();
    db1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(db2)) {
    blockHit.play();
    db2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(db3)) {
    blockHit.play();
    db3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(dc1)) {
    blockHit.play();
    dc1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(dc2)) {
    blockHit.play();
    dc2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(dc3)) {
    blockHit.play();
    dc3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(dc4)) {
    blockHit.play();
    dc4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(dc5)) {
    blockHit.play();
    dc5.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(dc6)) {
    blockHit.play();
    dc6.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(dc7)) {
    blockHit.play();
    dc7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(dd1)) {
    blockHit.play();
    dd1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(dd2)) {
    blockHit.play();
    dd2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(dd3)) {
    blockHit.play();
    dd3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(dd4)) {
    blockHit.play();
    dd4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(dd5)) {
    blockHit.play();
    dd5.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(dd6)) {
    blockHit.play();
    dd6.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(dd7)) {
    blockHit.play();
    dd7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(dd8)) {
    blockHit.play();
    dd8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(dd9)) {
    blockHit.play();
    dd9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(dd10)) {
    blockHit.play();
    dd10.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(dd11)) {
    blockHit.play();
    dd11.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(de1)) {
    blockHit.play();
    de1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(de2)) {
    blockHit.play();
    de2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(de3)) {
    blockHit.play();
    de3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(de4)) {
    blockHit.play();
    de4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(de5)) {
    blockHit.play();
    de5.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(de6)) {
    blockHit.play();
    de6.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(de7)) {
    blockHit.play();
    de7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(de8)) {
    blockHit.play();
    de8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(de9)) {
    blockHit.play();
    de9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(de10)) {
    blockHit.play();
    de10.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(de11)) {
    blockHit.play();
    de11.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(de12)) {
    blockHit.play();
    de12.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(de13)) {
    blockHit.play();
    de13.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(de14)) {
    blockHit.play();
    de14.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(de15)) {
    blockHit.play();
    de15.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(df1)) {
    blockHit.play();
    df1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(df2)) {
    blockHit.play();
    df2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(df3)) {
    blockHit.play();
    df3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(df4)) {
    blockHit.play();
    df4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(df5)) {
    blockHit.play();
    df5.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(df6)) {
    blockHit.play();
    df6.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(df7)) {
    blockHit.play();
    df7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(df8)) {
    blockHit.play();
    df8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(df9)) {
    blockHit.play();
    df9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(df10)) {
    blockHit.play();
    df10.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(df11)) {
    blockHit.play();
    df11.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(dg1)) {
    blockHit.play();
    dg1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(dg2)) {
    blockHit.play();
    dg2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(dg3)) {
    blockHit.play();
    dg3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(dg4)) {
    blockHit.play();
    dg4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(dg5)) {
    blockHit.play();
    dg5.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(dg6)) {
    blockHit.play();
    dg6.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(dg7)) {
    blockHit.play();
    dg7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(dh1)) {
    blockHit.play();
    dh1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(dh2)) {
    blockHit.play();
    dh2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(dh3)) {
    blockHit.play();
    dh3.destroy();
    score = score + 5;
    counter = counter + 1;
  }

  if (counter == 58) {
    level = 2;
    counter = 0;
    ball.x = displayWidth-40;
    ball.y = displayHeight/10;
    ball.velocityX = 0;
    ball.velocityY = 15;

    ball2.x = displayWidth-40;
    ball2.y = displayHeight/10;
    ball2.velocityY = 0;
    ball2.velocityX = 0;
    ball2.visible = false;
  }
}

if (level == 2) {
  ca1.visible = true;
  ca2.visible = true;
  ca3.visible = true;
  ca4.visible = true;
  ca5.visible = true;
  ca6.visible = true;
  ca7.visible = true;
  ca8.visible = true;
  ca9.visible = true;
  ca10.visible = true;
  ca11.visible = true;
  ca12.visible = true;
  ca13.visible = true;
  ca14.visible = true;
  ca15.visible = true;

  cb0.visible = true;
  cb1.visible = true;
  cb2.visible = true;
  cb3.visible = true;
  cb4.visible = true;
  cb5.visible = true;
  cb6.visible = true;
  cb7.visible = true;
  cb8.visible = true;
  cb9.visible = true;
  cb10.visible = true;
  cb11.visible = true;
  cb12.visible = true;
  cb13.visible = true;
  cb14.visible = true;
  cb15.visible = true;
  cb16.visible = true;

  cc1.visible = true;
  cc2.visible = true;
  cc3.visible = true;
  cc4.visible = true;
  cc5.visible = true;
  cc6.visible = true;
  cc7.visible = true;
  cc8.visible = true;
  cc9.visible = true;
  cc10.visible = true;
  cc11.visible = true;
  cc12.visible = true;
  cc13.visible = true;

  cd1.visible = true;
  cd2.visible = true;
  cd3.visible = true;
  cd4.visible = true;
  cd5.visible = true;
  cd6.visible = true;
  cd7.visible = true;
  cd8.visible = true;
  cd9.visible = true;
  cd10.visible = true;
  cd11.visible = true;

  ce1.visible = true;
  ce2.visible = true;
  ce3.visible = true;
  ce4.visible = true;
  ce5.visible = true;
  ce6.visible = true;
  ce7.visible = true;
  ce8.visible = true;
  ce9.visible = true;

  cf1.visible = true;
  cf2.visible = true;
  cf3.visible = true;
  cf4.visible = true;
  cf5.visible = true;
  cf6.visible = true;
  cf7.visible = true;

  cg1.visible = true;
  cg2.visible = true;
  cg3.visible = true;
  cg4.visible = true;
  cg5.visible = true;

  ch1.visible = true;
  ch2.visible = true;
  ch3.visible = true;

  if (ball.bounceOff(paddle)) {
    ball.velocityX = random(-12, 12);
    ball.velocityY = random(-12, -10);
  }

  if (ball.bounceOff(ca1)){
    blockHit.play();
    ca1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ca2)){
    blockHit.play();
    ca2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ca3)){
    blockHit.play();
    ca3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ca4)){
    blockHit.play();
    ca4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ca5)){
    blockHit.play();
    ca5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(ca6)){
    blockHit.play();
    ca6.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(ca7)){
    blockHit.play();
    ca7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ca8)){
    blockHit.play();
    ca8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ca9)){
    blockHit.play();
    ca9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ca10)){
    blockHit.play();
    ca10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(ca11)){
    blockHit.play();
    ca11.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(ca12)){
    blockHit.play();
    ca12.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ca13)){
    blockHit.play();
    ca13.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ca14)){
    blockHit.play();
    ca14.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ca15)){
    blockHit.play();
    ca15.destroy();
    score = score + 5;
    counter = counter + 1;
  }

  if (ball.bounceOff(cb0)) {
    blockHit.play();
    cb0.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(cb1)) {
    blockHit.play();
    cb1.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(cb2)) {
    blockHit.play();
    cb2.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(cb3)) {
    blockHit.play();
    cb3.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(cb4)) {
    blockHit.play();
    cb4.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(cb5)) {
    blockHit.play();
    cb5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(cb6)) {
    blockHit.play();
    cb6.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(cb7)) {
    blockHit.play();
    cb7.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(cb8)) {
    blockHit.play();
    cb8.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(cb9)) {
    blockHit.play();
    cb9.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(cb10)) {
    blockHit.play();
    cb10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(cb11)) {
    blockHit.play();
    cb11.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(cb12)) {
    blockHit.play();
    cb12.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(cb13)) {
    blockHit.play();
    cb13.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(cb14)) {
    blockHit.play();
    cb14.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(cb15)) {
    blockHit.play();
    cb15.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(cb16)) {
    blockHit.play();
    cb16.destroy();
    score = score + 10;
    counter = counter + 1;
  }

  if (ball.bounceOff(cc1)) {
    blockHit.play();
    cc1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cc2)) {
    blockHit.play();
    cc2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cc3)) {
    blockHit.play();
    cc3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cc4)) {
    blockHit.play();
    cc4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cc5)) {
    blockHit.play();
    cc5.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cc6)) {
    blockHit.play();
    cc6.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cc7)) {
    blockHit.play();
    cc7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cc8)) {
    blockHit.play();
    cc8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cc9)) {
    blockHit.play();
    cc9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cc10)) {
    blockHit.play();
    cc10.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cc11)) {
    blockHit.play();
    cc11.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cc12)) {
    blockHit.play();
    cc12.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cc13)) {
    blockHit.play();
    cc13.destroy();
    score = score + 5;
    counter = counter + 1;
  }

  if (ball.bounceOff(cd1)) {
    blockHit.play();
    cd1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cd2)) {
    blockHit.play();
    cd2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cd3)) {
    blockHit.play();
    cd3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cd4)) {
    blockHit.play();
    cd4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cd5)) {
    blockHit.play();
    cd5.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cd6)) {
    blockHit.play();
    cd6.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cd7)) {
    blockHit.play();
    cd7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cd8)) {
    blockHit.play();
    cd8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cd9)) {
    blockHit.play();
    cd9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cd10)) {
    blockHit.play();
    cd10.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cd11)) {
    blockHit.play();
    cd11.destroy();
    score = score + 5;
    counter = counter + 1;
  }

  if (ball.bounceOff(ce1)) {
    blockHit.play();
    ce1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ce2)) {
    blockHit.play();
    ce2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ce3)) {
    blockHit.play();
    ce3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ce4)) {
    blockHit.play();
    ce4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ce5)) {
    blockHit.play();
    ce5.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ce6)) {
    blockHit.play();
    ce6.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ce7)) {
    blockHit.play();
    ce7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ce8)) {
    blockHit.play();
    ce8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ce9)) {
    blockHit.play();
    ce9.destroy();
    score = score + 5;
    counter = counter + 1;
  }

  if (ball.bounceOff(cf1)) {
    blockHit.play();
    cf1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cf2)) {
    blockHit.play();
    cf2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cf3)) {
    blockHit.play();
    cf3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cf4)) {
    blockHit.play();
    cf4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cf5)) {
    blockHit.play();
    cf5.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cf6)) {
    blockHit.play();
    cf6.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cf7)) {
    blockHit.play();
    cf7.destroy();
    score = score + 5;
    counter = counter + 1;
  }

  if (ball.bounceOff(cg1)) {
    blockHit.play();
    cg1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cg2)) {
    blockHit.play();
    cg2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cg3)) {
    blockHit.play();
    cg3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cg4)) {
    blockHit.play();
    cg4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(cg5)) {
    blockHit.play();
    cg5.destroy();
    score = score + 5;
    counter = counter + 1;
  }

  if (ball.bounceOff(ch1)) {
    blockHit.play();
    ch1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ch2)) {
    blockHit.play();
    ch2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ch3)) {
    blockHit.play();
    ch3.destroy();
    score = score + 5;
    counter = counter + 1;
  }

  

  if (ball2.bounceOff(paddle)) {
    ball2.velocityX = random(-12, 12);
    ball2.velocityY = random(-12, -10);
  }

  if (ball2.bounceOff(ca1)){
    blockHit.play();
    ca1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ca2)){
    blockHit.play();
    ca2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ca3)){
    blockHit.play();
    ca3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ca4)){
    blockHit.play();
    ca4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ca5)){
    blockHit.play();
    ca5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ca6)){
    blockHit.play();
    ca6.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ca7)){
    blockHit.play();
    ca7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ca8)){
    blockHit.play();
    ca8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ca9)){
    blockHit.play();
    ca9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ca10)){
    blockHit.play();
    ca10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ca11)){
    blockHit.play();
    ca11.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ca12)){
    blockHit.play();
    ca12.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ca13)){
    blockHit.play();
    ca13.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ca14)){
    blockHit.play();
    ca14.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ca15)){
    blockHit.play();
    ca15.destroy();
    score = score + 5;
    counter = counter + 1;
  }

  if (ball2.bounceOff(cb0)) {
    blockHit.play();
    cb0.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cb1)) {
    blockHit.play();
    cb1.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cb2)) {
    blockHit.play();
    cb2.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cb3)) {
    blockHit.play();
    cb3.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cb4)) {
    blockHit.play();
    cb4.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cb5)) {
    blockHit.play();
    cb5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cb6)) {
    blockHit.play();
    cb6.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cb7)) {
    blockHit.play();
    cb7.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cb8)) {
    blockHit.play();
    cb8.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cb9)) {
    blockHit.play();
    cb9.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cb10)) {
    blockHit.play();
    cb10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cb11)) {
    blockHit.play();
    cb11.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cb12)) {
    blockHit.play();
    cb12.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cb13)) {
    blockHit.play();
    cb13.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cb14)) {
    blockHit.play();
    cb14.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cb15)) {
    blockHit.play();
    cb15.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cb16)) {
    blockHit.play();
    cb16.destroy();
    score = score + 10;
    counter = counter + 1;
  }

  if (ball2.bounceOff(cc1)) {
    blockHit.play();
    cc1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cc2)) {
    blockHit.play();
    cc2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cc3)) {
    blockHit.play();
    cc3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cc4)) {
    blockHit.play();
    cc4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cc5)) {
    blockHit.play();
    cc5.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cc6)) {
    blockHit.play();
    cc6.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cc7)) {
    blockHit.play();
    cc7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cc8)) {
    blockHit.play();
    cc8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cc9)) {
    blockHit.play();
    cc9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cc10)) {
    blockHit.play();
    cc10.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cc11)) {
    blockHit.play();
    cc11.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cc12)) {
    blockHit.play();
    cc12.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cc13)) {
    blockHit.play();
    cc13.destroy();
    score = score + 5;
    counter = counter + 1;
  }

  if (ball2.bounceOff(cd1)) {
    blockHit.play();
    cd1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cd2)) {
    blockHit.play();
    cd2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cd3)) {
    blockHit.play();
    cd3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cd4)) {
    blockHit.play();
    cd4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cd5)) {
    blockHit.play();
    cd5.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cd6)) {
    blockHit.play();
    cd6.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cd7)) {
    blockHit.play();
    cd7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cd8)) {
    blockHit.play();
    cd8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cd9)) {
    blockHit.play();
    cd9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cd10)) {
    blockHit.play();
    cd10.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cd11)) {
    blockHit.play();
    cd11.destroy();
    score = score + 5;
    counter = counter + 1;
  }

  if (ball2.bounceOff(ce1)) {
    blockHit.play();
    ce1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ce2)) {
    blockHit.play();
    ce2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ce3)) {
    blockHit.play();
    ce3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ce4)) {
    blockHit.play();
    ce4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ce5)) {
    blockHit.play();
    ce5.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ce6)) {
    blockHit.play();
    ce6.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ce7)) {
    blockHit.play();
    ce7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ce8)) {
    blockHit.play();
    ce8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ce9)) {
    blockHit.play();
    ce9.destroy();
    score = score + 5;
    counter = counter + 1;
  }

  if (ball2.bounceOff(cf1)) {
    blockHit.play();
    cf1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cf2)) {
    blockHit.play();
    cf2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cf3)) {
    blockHit.play();
    cf3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cf4)) {
    blockHit.play();
    cf4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cf5)) {
    blockHit.play();
    cf5.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cf6)) {
    blockHit.play();
    cf6.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cf7)) {
    blockHit.play();
    cf7.destroy();
    score = score + 5;
    counter = counter + 1;
  }

  if (ball2.bounceOff(cg1)) {
    blockHit.play();
    cg1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cg2)) {
    blockHit.play();
    cg2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cg3)) {
    blockHit.play();
    cg3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cg4)) {
    blockHit.play();
    cg4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(cg5)) {
    blockHit.play();
    cg5.destroy();
    score = score + 5;
    counter = counter + 1;
  }

  if (ball2.bounceOff(ch1)) {
    blockHit.play();
    ch1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ch2)) {
    blockHit.play();
    ch2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ch3)) {
    blockHit.play();
    ch3.destroy();
    score = score + 5;
    counter = counter + 1;
  }


  if (counter == 80) {
    level = 3;
    counter = 0;
    ball.x = displayWidth-40;
    ball.y = displayHeight/10;
    ball.velocityX = 0;
    ball.velocityY = 15;

    ball2.x = displayWidth-40;
    ball2.y = displayHeight/10;
    ball2.velocityY = 0;
    ball2.velocityX = 0;
    ball2.visible = false;
  }
}

if (level == 3) {
  ba1.visible = true;
  ba2.visible = true;
  ba3.visible = true;
  ba4.visible = true;
  ba5.visible = true;
  ba6.visible = true;
  ba7.visible = true;
  ba8.visible = true;
  ba9.visible = true;
  ba10.visible = true;
  ba11.visible = true;
  ba12.visible = true;
  ba13.visible = true;
  ba14.visible = true;
  ba15.visible = true;

  bb1.visible = true;
  bb2.visible = true;
  bb3.visible = true;
  bb4.visible = true;
  bb5.visible = true;
  bb6.visible = true;
  bb7.visible = true;
  bb8.visible = true;
  bb9.visible = true;
  bb10.visible = true;
  bb11.visible = true;
  bb12.visible = true;
  bb13.visible = true;
  bb14.visible = true;
  bb15.visible = true;

  bc1.visible = true;
  bc2.visible = true;
  bc3.visible = true;
  bc4.visible = true;
  bc5.visible = true;
  bc6.visible = true;
  bc7.visible = true;
  bc8.visible = true;
  bc9.visible = true;
  bc10.visible = true;
  bc11.visible = true;
  bc12.visible = true;
  bc13.visible = true;
  bc14.visible = true;
  bc15.visible = true;

  bd1.visible = true;
  bd2.visible = true;
  bd3.visible = true;
  bd4.visible = true;
  bd5.visible = true;
  bd6.visible = true;
  bd7.visible = true;
  bd8.visible = true;
  bd9.visible = true;
  bd10.visible = true;
  bd11.visible = true;
  bd12.visible = true;
  bd13.visible = true;
  bd14.visible = true;
  bd15.visible = true;

  be1.visible = true;
  be2.visible = true;
  be3.visible = true;
  be4.visible = true;
  be5.visible = true;
  be6.visible = true;
  be7.visible = true;
  be8.visible = true;
  be9.visible = true;
  be10.visible = true;
  be11.visible = true;
  be12.visible = true;
  be13.visible = true;
  be14.visible = true;
  be15.visible = true;

  bf1.visible = true;
  bf2.visible = true;
  bf3.visible = true;
  bf4.visible = true;
  bf5.visible = true;
  bf6.visible = true;
  bf7.visible = true;
  bf8.visible = true;
  bf9.visible = true;
  bf10.visible = true;
  bf11.visible = true;
  bf12.visible = true;
  bf13.visible = true;
  bf14.visible = true;
  bf15.visible = true;

  bg1.visible = true;
  bg2.visible = true;
  bg3.visible = true;
  bg4.visible = true;
  bg5.visible = true;
  bg6.visible = true;
  bg7.visible = true;
  bg8.visible = true;
  bg9.visible = true;
  bg10.visible = true;
  bg11.visible = true;
  bg12.visible = true;
  bg13.visible = true;
  bg14.visible = true;
  bg15.visible = true;

  bh1.visible = true;
  bh2.visible = true;
  bh3.visible = true;
  bh4.visible = true;
  bh5.visible = true;
  bh6.visible = true;
  bh7.visible = true;
  bh8.visible = true;
  bh9.visible = true;
  bh10.visible = true;
  bh11.visible = true;
  bh12.visible = true;
  bh13.visible = true;
  bh14.visible = true;
  bh15.visible = true;

  bi1.visible = true;
  bi2.visible = true;
  bi3.visible = true;
  bi4.visible = true;
  bi5.visible = true;
  bi6.visible = true;
  bi7.visible = true;
  bi8.visible = true;
  bi9.visible = true;
  bi10.visible = true;
  bi11.visible = true;
  bi12.visible = true;
  bi13.visible = true;
  bi14.visible = true;
  bi15.visible = true;

  bj1.visible = true;
  bj2.visible = true;
  bj3.visible = true;
  bj4.visible = true;
  bj5.visible = true;
  bj6.visible = true;
  bj7.visible = true;
  bj8.visible = true;
  bj9.visible = true;
  bj10.visible = true;
  bj11.visible = true;
  bj12.visible = true;
  bj13.visible = true;
  bj14.visible = true;
  bj15.visible = true;


  if (ball.bounceOff(paddle)) {
    ball.velocityX = random(-12, 12);
    ball.velocityY = random(-12, -10);
  }


  if (ball.bounceOff(ba1)){
    blockHit.play();
    ba1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ba2)){
    blockHit.play();
    ba2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ba3)){
    blockHit.play();
    ba3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ba4)){
    blockHit.play();
    ba4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ba5)){
    blockHit.play();
    ba5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(ba6)){
    blockHit.play();
    ba6.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(ba7)){
    blockHit.play();
    ba7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ba8)){
    blockHit.play();
    ba8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ba9)){
    blockHit.play();
    ba9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ba10)){
    blockHit.play();
    ba10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(ba11)){
    blockHit.play();
    ba11.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(ba12)){
    blockHit.play();
    ba12.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ba13)){
    blockHit.play();
    ba13.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ba14)){
    blockHit.play();
    ba14.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(ba15)){
    blockHit.play();
    ba15.destroy();
    score = score + 5;
    counter = counter + 1;
  }


  if (ball.bounceOff(bb1)){
    blockHit.play();
    bb1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bb2)){
    blockHit.play();
    bb2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bb3)){
    blockHit.play();
    bb3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bb4)){
    blockHit.play();
    bb4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bb5)){
    blockHit.play();
    bb5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bb6)){
    blockHit.play();
    bb6.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bb7)){
    blockHit.play();
    bb7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bb8)){
    blockHit.play();
    bb8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bb9)){
    blockHit.play();
    bb9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bb10)){
    blockHit.play();
    bb10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bb11)){
    blockHit.play();
    bb11.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bb12)){
    blockHit.play();
    bb12.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bb13)){
    blockHit.play();
    bb13.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bb14)){
    blockHit.play();
    bb14.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bb15)){
    blockHit.play();
    bb15.destroy();
    score = score + 5;
    counter = counter + 1;
  }


  if (ball.bounceOff(bc1)){
    blockHit.play();
    bc1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bc2)){
    blockHit.play();
    bc2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bc3)){
    blockHit.play();
    bc3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bc4)){
    blockHit.play();
    bc4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bc5)){
    blockHit.play();
    bc5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bc6)){
    blockHit.play();
    bc6.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bc7)){
    blockHit.play();
    bc7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bc8)){
    blockHit.play();
    bc8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bc9)){
    blockHit.play();
    bc9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bc10)){
    blockHit.play();
    bc10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bc11)){
    blockHit.play();
    bc11.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bc12)){
    blockHit.play();
    bc12.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bc13)){
    blockHit.play();
    bc13.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bc14)){
    blockHit.play();
    bc14.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bc15)){
    blockHit.play();
    bc15.destroy();
    score = score + 5;
    counter = counter + 1;
  }


  if (ball.bounceOff(bd1)){
    blockHit.play();
    bd1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bd2)){
    blockHit.play();
    bd2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bd3)){
    blockHit.play();
    bd3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bd4)){
    blockHit.play();
    bd4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bd5)){
    blockHit.play();
    bd5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bd6)){
    blockHit.play();
    bd6.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bd7)){
    blockHit.play();
    bd7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bd8)){
    blockHit.play();
    bd8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bd9)){
    blockHit.play();
    bd9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bd10)){
    blockHit.play();
    bd10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bd11)){
    blockHit.play();
    bd11.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bd12)){
    blockHit.play();
    bd12.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bd13)){
    blockHit.play();
    bd13.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bd14)){
    blockHit.play();
    bd14.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bd15)){
    blockHit.play();
    bd15.destroy();
    score = score + 5;
    counter = counter + 1;
  }


  if (ball.bounceOff(be1)){
    blockHit.play();
    be1.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(be2)){
    blockHit.play();
    be2.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(be3)){
    blockHit.play();
    be3.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(be4)){
    blockHit.play();
    be4.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(be5)){
    blockHit.play();
    be5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(be6)){
    blockHit.play();
    be6.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(be7)){
    blockHit.play();
    be7.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(be8)){
    blockHit.play();
    be8.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(be9)){
    blockHit.play();
    be9.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(be10)){
    blockHit.play();
    be10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(be11)){
    blockHit.play();
    be11.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(be12)){
    blockHit.play();
    be12.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(be13)){
    blockHit.play();
    be13.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(be14)){
    blockHit.play();
    be14.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(be15)){
    blockHit.play();
    be15.destroy();
    score = score + 10;
    counter = counter + 1;
  }


  if (ball.bounceOff(bf1)){
    blockHit.play();
    bf1.destroy();
    counter = counter + 1;
    score = score + 10;
  }
  if (ball.bounceOff(bf2)){
    blockHit.play();
    bf2.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bf3)){
    blockHit.play();
    bf3.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bf4)){
    blockHit.play();
    bf4.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bf5)){
    blockHit.play();
    bf5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bf6)){
    blockHit.play();
    bf6.destroy();
    counter = counter + 1;
    score = score + 10;
  }
  if (ball.bounceOff(bf7)){
    blockHit.play();
    bf7.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bf8)){
    blockHit.play();
    bf8.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bf9)){
    blockHit.play();
    bf9.destroy();
    counter = counter + 1;
    score = score + 10;
  }
  if (ball.bounceOff(bf10)){
    blockHit.play();
    bf10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bf11)){
    blockHit.play();
    bf11.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bf12)){
    blockHit.play();
    bf12.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bf13)){
    blockHit.play();
    bf13.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bf14)){
    blockHit.play();
    bf14.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bf15)){
    blockHit.play();
    bf15.destroy();
    score = score + 10;
    counter = counter + 1;
  }


  if (ball.bounceOff(bg1)){
    blockHit.play();
    bg1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bg2)){
    blockHit.play();
    bg2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bg3)){
    blockHit.play();
    bg3.destroy();
    score = score + 5;
    counter = counter + 1;

  }
  if (ball.bounceOff(bg4)){
    blockHit.play();
    bg4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bg5)){
    blockHit.play();
    bg5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bg6)){
    blockHit.play();
    bg6.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bg7)){
    blockHit.play();
    bg7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bg8)){
    blockHit.play();
    bg8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bg9)){
    blockHit.play();
    bg9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bg10)){
    blockHit.play();
    bg10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bg11)){
    blockHit.play();
    bg11.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bg12)){
    blockHit.play();
    bg12.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bg13)){
    blockHit.play();
    bg13.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bg14)){
    blockHit.play();
    bg14.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bg15)){
    blockHit.play();
    bg15.destroy();
    score = score + 5;
    counter = counter + 1;
  }


  if (ball.bounceOff(bh1)){
    blockHit.play();
    bh1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bh2)){
    blockHit.play();
    bh2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bh3)){
    blockHit.play();
    bh3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bh4)){
    blockHit.play();
    bh4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bh5)){
    blockHit.play();
    bh5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bh6)){
    blockHit.play();
    bh6.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bh7)){
    blockHit.play();
    bh7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bh8)){
    blockHit.play();
    bh8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bh9)){
    blockHit.play();
    bh9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bh10)){
    blockHit.play();
    bh10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bh11)){
    blockHit.play();
    bh11.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bh12)){
    blockHit.play();
    bh12.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bh13)){
    blockHit.play();
    bh13.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bh14)){
    blockHit.play();
    bh14.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bh15)){
    blockHit.play();
    bh15.destroy();
    score = score + 5;
    counter = counter + 1;
  }


  if (ball.bounceOff(bi1)){
    blockHit.play();
    bi1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bi2)){
    blockHit.play();
    bi2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bi3)){
    blockHit.play();
    bi3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bi4)){
    blockHit.play();
    bi4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bi5)){
    blockHit.play();
    bi5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bi6)){
    blockHit.play();
    bi6.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bi7)){
    blockHit.play();
    bi7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bi8)){
    blockHit.play();
    bi8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bi9)){
    blockHit.play();
    bi9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bi10)){
    blockHit.play();
    bi10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bi11)){
    blockHit.play();
    bi11.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bi12)){
    blockHit.play();
    bi12.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bi13)){
    blockHit.play();
    bi13.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bi14)){
    blockHit.play();
    bi14.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bi15)){
    blockHit.play();
    bi15.destroy();
    score = score + 5;
    counter = counter + 1;
  }


  if (ball.bounceOff(bj1)){
    blockHit.play();
    bj1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bj2)){
    blockHit.play();
    bj2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bj3)){
    blockHit.play();
    bj3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bj4)){
    blockHit.play();
    bj4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bj5)){
    blockHit.play();
    bj5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bj5)){
    blockHit.play();
    bj5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bj6)){
    blockHit.play();
    bj6.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bj7)){
    bj7.destroy();
    blockHit.play();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bj8)){
    blockHit.play();
    bj8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bj9)){
    blockHit.play();
    bj9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bj10)){
    blockHit.play();
    bj10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bj11)){
    bj11.destroy();
    blockHit.play();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball.bounceOff(bj12)){
    blockHit.play();
    bj12.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bj13)){
    blockHit.play();
    bj13.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bj14)){
    blockHit.play();
    bj14.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball.bounceOff(bj15)){
    blockHit.play();
    bj15.destroy();
    score = score + 5;
    counter = counter + 1;
  }


  if (ball2.bounceOff(paddle)) {
    ball2.velocityX = random(-12, 12);
    ball2.velocityY = random(-12, -10);
  }


  if (ball2.bounceOff(ba1)){
    blockHit.play();
    ba1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ba2)){
    blockHit.play();
    ba2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ba3)){
    blockHit.play();
    ba3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ba4)){
    blockHit.play();
    ba4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ba5)){
    blockHit.play();
    ba5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ba6)){
    blockHit.play();
    ba6.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ba7)){
    blockHit.play();
    ba7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ba8)){
    blockHit.play();
    ba8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ba9)){
    blockHit.play();
    ba9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ba10)){
    blockHit.play();
    ba10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ba11)){
    blockHit.play();
    ba11.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ba12)){
    blockHit.play();
    ba12.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ba13)){
    blockHit.play();
    ba13.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ba14)){
    blockHit.play();
    ba14.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(ba15)){
    blockHit.play();
    ba15.destroy();
    score = score + 5;
    counter = counter + 1;
  }


  if (ball2.bounceOff(bb1)){
    blockHit.play();
    bb1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bb2)){
    blockHit.play();
    bb2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bb3)){
    blockHit.play();
    bb3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bb4)){
    blockHit.play();
    bb4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bb5)){
    blockHit.play();
    bb5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bb6)){
    blockHit.play();
    bb6.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bb7)){
    blockHit.play();
    bb7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bb8)){
    blockHit.play();
    bb8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bb9)){
    blockHit.play();
    bb9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bb10)){
    blockHit.play();
    bb10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bb11)){
    blockHit.play();
    bb11.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bb12)){
    blockHit.play();
    bb12.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bb13)){
    blockHit.play();
    bb13.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bb14)){
    blockHit.play();
    bb14.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bb15)){
    blockHit.play();
    bb15.destroy();
    score = score + 5;
    counter = counter + 1;
  }


  if (ball2.bounceOff(bc1)){
    blockHit.play();
    bc1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bc2)){
    blockHit.play();
    bc2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bc3)){
    blockHit.play();
    bc3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bc4)){
    blockHit.play();
    bc4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bc5)){
    blockHit.play();
    bc5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bc6)){
    blockHit.play();
    bc6.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bc7)){
    blockHit.play();
    bc7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bc8)){
    blockHit.play();
    bc8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bc9)){
    blockHit.play();
    bc9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bc10)){
    blockHit.play();
    bc10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bc11)){
    blockHit.play();
    bc11.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bc12)){
    blockHit.play();
    bc12.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bc13)){
    blockHit.play();
    bc13.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bc14)){
    blockHit.play();
    bc14.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bc15)){
    blockHit.play();
    bc15.destroy();
    score = score + 5;
    counter = counter + 1;
  }


  if (ball2.bounceOff(bd1)){
    blockHit.play();
    bd1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bd2)){
    blockHit.play();
    bd2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bd3)){
    blockHit.play();
    bd3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bd4)){
    blockHit.play();
    bd4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bd5)){
    blockHit.play();
    bd5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bd6)){
    blockHit.play();
    bd6.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bd7)){
    blockHit.play();
    bd7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bd8)){
    blockHit.play();
    bd8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bd9)){
    blockHit.play();
    bd9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bd10)){
    blockHit.play();
    bd10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bd11)){
    blockHit.play();
    bd11.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bd12)){
    blockHit.play();
    bd12.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bd13)){
    blockHit.play();
    bd13.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bd14)){
    blockHit.play();
    bd14.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bd15)){
    blockHit.play();
    bd15.destroy();
    score = score + 5;
    counter = counter + 1;
  }


  if (ball2.bounceOff(be1)){
    blockHit.play();
    be1.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(be2)){
    blockHit.play();
    be2.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(be3)){
    blockHit.play();
    be3.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(be4)){
    blockHit.play();
    be4.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(be5)){
    blockHit.play();
    be5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(be6)){
    blockHit.play();
    be6.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(be7)){
    blockHit.play();
    be7.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(be8)){
    blockHit.play();
    be8.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(be9)){
    blockHit.play();
    be9.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(be10)){
    blockHit.play();
    be10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(be11)){
    blockHit.play();
    be11.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(be12)){
    blockHit.play();
    be12.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(be13)){
    blockHit.play();
    be13.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(be14)){
    blockHit.play();
    be14.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(be15)){
    blockHit.play();
    be15.destroy();
    score = score + 10;
    counter = counter + 1;
  }


  if (ball2.bounceOff(bf1)){
    blockHit.play();
    bf1.destroy();
    counter = counter + 1;
    score = score + 10;
  }
  if (ball2.bounceOff(bf2)){
    blockHit.play();
    bf2.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bf3)){
    blockHit.play();
    bf3.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bf4)){
    blockHit.play();
    bf4.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bf5)){
    blockHit.play();
    bf5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bf6)){
    blockHit.play();
    bf6.destroy();
    counter = counter + 1;
    score = score + 10;
  }
  if (ball2.bounceOff(bf7)){
    blockHit.play();
    bf7.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bf8)){
    blockHit.play();
    bf8.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bf9)){
    blockHit.play();
    bf9.destroy();
    counter = counter + 1;
    score = score + 10;
  }
  if (ball2.bounceOff(bf10)){
    blockHit.play();
    bf10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bf11)){
    blockHit.play();
    bf11.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bf12)){
    blockHit.play();
    bf12.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bf13)){
    blockHit.play();
    bf13.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bf14)){
    blockHit.play();
    bf14.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bf15)){
    blockHit.play();
    bf15.destroy();
    score = score + 10;
    counter = counter + 1;
  }


  if (ball2.bounceOff(bg1)){
    blockHit.play();
    bg1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bg2)){
    blockHit.play();
    bg2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bg3)){
    blockHit.play();
    bg3.destroy();
    score = score + 5;
    counter = counter + 1;

  }
  if (ball2.bounceOff(bg4)){
    blockHit.play();
    bg4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bg5)){
    blockHit.play();
    bg5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bg6)){
    blockHit.play();
    bg6.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bg7)){
    blockHit.play();
    bg7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bg8)){
    blockHit.play();
    bg8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bg9)){
    blockHit.play();
    bg9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bg10)){
    blockHit.play();
    bg10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bg11)){
    blockHit.play();
    bg11.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bg12)){
    blockHit.play();
    bg12.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bg13)){
    blockHit.play();
    bg13.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bg14)){
    blockHit.play();
    bg14.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bg15)){
    blockHit.play();
    bg15.destroy();
    score = score + 5;
    counter = counter + 1;
  }


  if (ball2.bounceOff(bh1)){
    blockHit.play();
    bh1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bh2)){
    blockHit.play();
    bh2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bh3)){
    blockHit.play();
    bh3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bh4)){
    blockHit.play();
    bh4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bh5)){
    blockHit.play();
    bh5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bh6)){
    blockHit.play();
    bh6.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bh7)){
    blockHit.play();
    bh7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bh8)){
    blockHit.play();
    bh8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bh9)){
    blockHit.play();
    bh9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bh10)){
    blockHit.play();
    bh10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bh11)){
    blockHit.play();
    bh11.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bh12)){
    blockHit.play();
    bh12.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bh13)){
    blockHit.play();
    bh13.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bh14)){
    blockHit.play();
    bh14.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bh15)){
    blockHit.play();
    bh15.destroy();
    score = score + 5;
    counter = counter + 1;
  }


  if (ball2.bounceOff(bi1)){
    blockHit.play();
    bi1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bi2)){
    blockHit.play();
    bi2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bi3)){
    blockHit.play();
    bi3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bi4)){
    blockHit.play();
    bi4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bi5)){
    blockHit.play();
    bi5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bi6)){
    blockHit.play();
    bi6.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bi7)){
    blockHit.play();
    bi7.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bi8)){
    blockHit.play();
    bi8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bi9)){
    blockHit.play();
    bi9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bi10)){
    blockHit.play();
    bi10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bi11)){
    blockHit.play();
    bi11.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bi12)){
    blockHit.play();
    bi12.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bi13)){
    blockHit.play();
    bi13.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bi14)){
    blockHit.play();
    bi14.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bi15)){
    blockHit.play();
    bi15.destroy();
    score = score + 5;
    counter = counter + 1;
  }


  if (ball2.bounceOff(bj1)){
    blockHit.play();
    bj1.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bj2)){
    blockHit.play();
    bj2.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bj3)){
    blockHit.play();
    bj3.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bj4)){
    blockHit.play();
    bj4.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bj5)){
    blockHit.play();
    bj5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bj5)){
    blockHit.play();
    bj5.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bj6)){
    blockHit.play();
    bj6.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bj7)){
    bj7.destroy();
    blockHit.play();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bj8)){
    blockHit.play();
    bj8.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bj9)){
    blockHit.play();
    bj9.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bj10)){
    blockHit.play();
    bj10.destroy();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bj11)){
    bj11.destroy();
    blockHit.play();
    score = score + 10;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bj12)){
    blockHit.play();
    bj12.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bj13)){
    blockHit.play();
    bj13.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bj14)){
    blockHit.play();
    bj14.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (ball2.bounceOff(bj15)){
    blockHit.play();
    bj15.destroy();
    score = score + 5;
    counter = counter + 1;
  }
  if (counter == 150) {
    ball.destroy();
    ball2.destroy();
    timeOver.destroy();
    aloo.destroy();
    aloo2.destroy();
    aloo3.destroy();
    sec = 0;
    seco = 999999999;
    gameOver.visible = true;
  }
}

    if (lives == 3 && ball.y > displayHeight+10){
      ball.x = displayWidth-40;
      ball.y = displayHeight/10;
      lives = lives - 1;
      live1.destroy();
    }
    else if (lives == 2 && ball.y > displayHeight+10){
      ball.x = displayWidth-40;
      ball.y = displayHeight/10;
      lives = lives - 1;
      live2.destroy();
    }
    else if (lives == 1 && ball.y > displayHeight+10){
      ball.x = displayWidth-40;
      ball.y = displayHeight/10;
      lives = lives - 1;
      live3.destroy();
    }

  /*if(seco <= 0){
    textSize(30);
    textFont('Stencil');
    fill('red');
    text('Time left for reset - '+timeleft, displayWidth/2-150, 50);
  }

  if(timeleft <= 0){
    timeleft = 18;
  }*/

  if (lives == 0){
    ball.destroy();
    ball2.destroy();
    aloo.destroy();
    aloo2.destroy();
    aloo3.destroy();
    live3.destroy();
    paddle.x = displayWidth/2;
    sec = 0;
    seco = 999999999;
    gameOver.visible = true;
    //restart.visible = true;
  }

  textSize(30);
  textFont('Stencil');
  fill('red');
  text('Score: '+score, 20, 30);
  text('Time Left: '+sec, displayWidth/2+50, 30);
  text('Level: '+level, displayWidth/2-200, 30);

  drawSprites();
}