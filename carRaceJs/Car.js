
const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.06;
const MIN_SPEED_TO_TURN = 0.5;
const PLAYER_MOVEMENT_SPEED = 5;


function carClass() {
  // var sound = document.getElementById("carSound");
  // var play = 0;

  this.x = 75;
  this.y = 75;
  this.ang = 0;
  this.speed = 0;
  this.myCarPic;
  this.name = "Untitled Car";

  this.keyHeld_Gas = false;
  this.keyHeld_Reverse = false;
  this.keyHeld_TurnLeft = false;
  this.keyHeld_TurnRight = false;
  // this.sound = false;

  this.controlKeyUp;
  this.controlKeyRight;
  this.controlKeyDown;
  this.controlKeyLeft;

  // this.playSound = function(){
  //   if(play == 0){
  //     play = 1;
  //     sound.play();
  //   }else{
  //     play = 0;
  //     sound.pause();
  //   }
  // }

  this.setupInput = function (upKey, rightKey, downKey, leftKey) {
    this.controlKeyUp = upKey;
    this.controlKeyRight = rightKey;
    this.controlKeyDown = downKey;
    this.controlKeyLeft = leftKey;
  }

  
  this.reset = function(whichImage, carName) {
    this.name = carName;
    this.myCarPic = whichImage;
    this.speed = 0;

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
    this.speed *= GROUNDSPEED_DECAY_MULT;
    
    var nextX = 0;

    
    if (this.keyHeld_Gas) {
      this.speed += DRIVE_POWER;
      // var audio = new Audio('carGas10.wav')
      // audio.play();
      //  return false;
    }
    if (this.keyHeld_Reverse) {
      this.speed -= REVERSE_POWER;
      var audio = new Audio('carGas10.wav');
      audio.play();
    }
    if (Math.abs(this.speed) > MIN_SPEED_TO_TURN) {
      var audio = new Audio('Carskidding2.wav');
      if (this.keyHeld_TurnLeft) {
        this.ang -= TURN_RATE;
        if(this.keyHeld_Gas){
          audio.play();
        }else{
          audio.pause();
        }
        
        
      }
      
      if (this.keyHeld_TurnRight) {
        this.ang += TURN_RATE;
       
      }
    }
    this.x += Math.cos(this.ang) * this.speed;
    this.y += Math.sin(this.ang) * this.speed;

    carTrackHandling(this);
  
  }
  
  this.draw = function() {
    drawBitmapCenteredWithRotation(this.myCarPic, this.x,this.y, this.ang);
  }
}
