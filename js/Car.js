
// const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.2;
// const TURN_RATE = 0.06;
// const MIN_SPEED_TO_TURN = 0.5;
const PLAYER_MOVEMENT_SPEED = 3.0;
const JUMP_POWER = 15;
const GRAVITY = 0;


function carClass() {
  // var sound = document.getElementById("carSound");
  // var play = 0;

  this.x = 75;
  this.y = 75;
  // this.ang = 0;
  // this.speed = 0;
  this.myCarPic;
  this.name = "Untitled Car";

  this.keyHeld_Gas = false;
  this.keyHeld_Reverse = false;
  this.keyHeld_TurnLeft = false;
  this.keyHeld_TurnRight = false;
  this.keyHeld_Jump = false;
  // this.sound = false;

  this.controlKeyUp;
  this.controlKeyRight;
  this.controlKeyDown;
  this.controlKeyLeft;
  this.controlKeyJump;
  // this.playSound = function(){
  //   if(play == 0){
  //     play = 1;
  //     sound.play();
  //   }else{
  //     play = 0;
  //     sound.pause();
  //   }
  // }

  this.setupInput = function (upKey, rightKey, downKey, leftKey, jumpKey) {
    this.controlKeyUp = upKey;
    this.controlKeyRight = rightKey;
    this.controlKeyDown = downKey;
    this.controlKeyLeft = leftKey;
    this.controlKeyJump = jumpKey;
  }

  
  this.reset = function(whichImage, carName) {
    this.name = carName;
    this.myCarPic = whichImage;
    //  this.speed = 0;

    for (var eachRow=0;eachRow<TRACK_ROWS;eachRow++) {
      for (var eachCol=0;eachCol<TRACK_COLS;eachCol++) {
        var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
        if (trackGrid[arrayIndex] == TRACK_PLAYERSTART) {
          trackGrid[arrayIndex] = TRACK_ROAD;
          // this.ang = -Math.PI / 2;
          this.x = eachCol * TRACK_W + TRACK_W/2;
					this.y = eachRow * TRACK_H + TRACK_H/2;
          return;
        } //end of player start if
      } // end of col for
    } // endo frow for
   console.log("NO PLAYER START FOUND!");
  } // end of carReset function

  this.move = function() {
    // this.speed *= GROUNDSPEED_DECAY_MULT;
    
    var nextX = this.x;
    var nextY = this.y;

    if (this.keyHeld_Jump){
      // this.speed += JUMP_POWER;
      // this.y - JUMP_POWER;
      nextY -= JUMP_POWER;
      console.log("JUMP_POWER")
    
  
    }else {
      nextY += GRAVITY + 10;
      console.log("GRAVITY")
    }
    
    if (this.keyHeld_Gas) {
      // this.speed += DRIVE_POWER;
      nextY -= PLAYER_MOVEMENT_SPEED;
      console.log("keyHeld_Gas");
    
    }
    if (this.keyHeld_Reverse) {
      // this.speed -= REVERSE_POWER;
      
    }
   
      if (this.keyHeld_TurnLeft) {
        nextX -= PLAYER_MOVEMENT_SPEED;
        // switchCostume(costumeList[1]);
        // this.speed -= REVERSE_POWER;
        console.log("keyHeld_TurnLeft");
       
      }
   
    if (this.keyHeld_TurnRight) {
      nextX += PLAYER_MOVEMENT_SPEED;
      console.log("keyHeld_TurnRight");
    
      // this.speed += DRIVE_POWER;
    }
    // this.x += Math.cos(this.ang) * this.speed;
    // this.y += Math.sin(this.ang) * this.speed;

    // carTrackHandling(this);
    
  var walkIntoTileIndex = getTileIndexAtPixelCoord(nextX, nextY);
  var walkIntoTileType = TRACK_WALL;

  if(walkIntoTileIndex != undefined) {
    walkIntoTileType = trackGrid[walkIntoTileIndex];
  }

  switch(walkIntoTileType) {
    case TRACK_ROAD:
      this.x = nextX;
      this.y = nextY;
      break;
    case TRACK_GOAL:
      console.log(this.name + " WINS!");
      loadLevel(levelOne);
      break;
    default:
      break;
  }


  
  }
  

  this.draw = function() {
    drawBitmapCenteredWithRotation(this.myCarPic, this.x,this.y, this.ang);
  }
}
