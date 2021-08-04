        const TRACK_W = 50;
        const TRACK_H = 40; 
        const TRACK_GAP = 2;
        const TRACK_COLS = 20;
        const TRACK_ROWS = 15; 
        var levelOne = [ 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,  
            1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,
            1,1,1,1,1,0,0,0,0,0,0,5,0,0,1,0,0,0,0,1,
            1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,
            1,1,0,0,8,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,
            1,1,0,0,4,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,  
            1,1,0,0,4,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,
            1,0,0,0,4,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,
            1,0,0,0,4,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,
            1,5,0,0,0,0,0,0,0,1,0,0,6,0,0,0,0,0,0,1,
            1,0,1,0,1,1,0,0,0,6,0,0,1,0,0,0,0,0,0,1,  
            1,1,1,7,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            6,2,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

        var levelTwo = [ 4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,  
                          4,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,1,1,4,
                          1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,4,4,4,1,
                          1,0,0,0,0,0,0,1,1,5,0,0,0,0,3,0,4,4,4,1,
                          1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,4,4,4,1,
                          4,4,4,0,0,1,1,4,4,4,1,1,0,0,0,0,1,0,0,1,  
                          4,4,4,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,
                          1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,
                          1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,
                          1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,
                          1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,  
                          1,4,4,0,1,4,1,1,1,1,1,1,1,5,1,1,0,2,2,1,
                          1,4,4,1,1,4,4,1,1,1,1,1,1,1,1,4,0,0,0,1,
                          1,4,4,1,1,4,4,4,4,4,4,4,1,1,4,4,4,4,1,1,
                          1,1,1,1,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      
          var levelThree = [ 4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,  
                            4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,4,
                            1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                            1,0,0,0,0,0,0,1,1,5,0,0,0,0,0,0,0,0,0,1,
                            1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,
                            4,0,0,0,1,1,1,4,4,4,1,1,0,0,0,0,1,0,0,1,  
                            4,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,
                            1,0,0,0,1,0,0,3,0,1,0,0,0,0,0,0,1,0,0,1,
                            1,0,0,0,1,0,0,3,0,0,0,0,1,0,0,0,1,0,0,1,
                            1,0,0,0,1,0,0,3,0,0,0,0,1,0,0,0,0,0,0,1,
                            1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,  
                            1,2,2,0,1,4,1,1,1,1,1,1,1,4,1,1,0,0,0,1,
                            1,0,0,0,1,4,4,1,1,1,1,1,1,1,1,4,5,0,0,1,
                            1,0,0,0,1,4,4,4,4,4,4,4,1,1,4,4,4,4,1,1,
                            1,1,1,1,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4];
             var levelFour = [ 4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,  
                                4,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,1,1,4,
                                1,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,1,
                                1,0,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,
                                1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,
                                4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,1,  
                                4,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,
                                1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                                1,1,1,1,1,1,1,1,4,4,4,4,4,4,4,4,1,0,0,1,
                                1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                                1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,4,4,4,1,  
                                1,0,0,4,4,4,1,0,0,0,0,0,3,4,4,4,4,4,4,1,
                                1,0,0,0,0,0,0,0,0,0,0,0,3,4,4,4,4,4,4,1,
                                1,5,4,4,4,4,4,4,4,4,1,4,1,1,4,4,4,4,1,1,
                                1,1,1,1,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4];
        var levelList = [levelOne,levelTwo,levelThree,levelFour];
        var levelNow = 0;
        var trackGrid = [];      

        const TRACK_ROAD = 0;
        const TRACK_WALL = 1;
        const TRACK_PLAYERSTART = 2;
        const TRACK_GOAL = 3;
        const TRACK_LADDER = 4;
        const TRACK_KEY = 5;
        const TRACK_DOOR = 6;
        const WORLD_TRAP =7;
        const TRACK_LADDER_CONNECTOR = 8;
        // const TRACK_COIN = 6;

        

        // function isObstacleAtColRow(col,row){
        //     if(col >=  0 && col < TRACK_COLS &&
        //         row >= 0 && row < TRACK_ROWS){
        //             var trackIndexUnderCoord = rowColToArrayIndex(col,row);
        //             return (trackGrid[trackIndexUnderCoord] != TRACK_ROAD);
        //         } else {
        //             return false;
        //         }
            
        // }

        function returnTileTypeAtColRow(col,row){
            if(col >=  0 && col < TRACK_COLS &&
                row >= 0 && row < TRACK_ROWS){
                    var trackIndexUnderCoord = rowColToArrayIndex(col,row);
                    return trackGrid[trackIndexUnderCoord];
                } else {
                    return TRACK_WALL;
                }
            
        }


    //     function carTrackHandling(whichCar) {
    //       var carTrackCol = Math.floor(whichCar.x / TRACK_W);
    //       var carTrackRow = Math.floor(whichCar.y / TRACK_H);
    //       var trackIndexUnderCar = rowColToArrayIndex(carTrackCol, carTrackRow);

    //       if (carTrackCol >= 0 && carTrackCol < TRACK_COLS &&
    //           carTrackRow >= 0 && carTrackRow < TRACK_ROWS) {
    //           var tileHere = returnTileTypeAtColRow(carTrackCol,carTrackRow);
                

    //            if (tileHere == TRACK_GOAL){
    //             // whichCar.speed *= -0.5;
    //             //   alert(whichCar.name + "Wins!");
    //             // console.log(whichCar.name + "WINS!");
    //             // loadLevel(levelList);
    //             //  var audio = new Audio('esrom.wav')
    //             // var audio = new Audio('blackfirewins.wav')
               
    //                 var audio = new Audio('esrom.wav')
    //                 audio.play();
               
                   
    //                    nextLevel();     
                   
    //                     // newLevel()
                    
    //           }else if (tileHere != TRACK_ROAD) {
    //                  whichCar.x -= Math.cos(whichCar.ang) * whichCar.speed;
	// 		         whichCar.y -= Math.sin(whichCar.ang) * whichCar.speed;
    //                  whichCar.speed *= -0.5;
    //           }// end of track found
    //       }// end of valid col and row
    //    }// end of carTrackHandling function

    function getTileIndexAtPixelCoord(atX, atY) {
        var warriorWorldCol = Math.floor(atX / TRACK_W);
        var warriorWorldRow = Math.floor(atY / TRACK_H);
        var worldIndexUnderWarrior = rowColToArrayIndex(warriorWorldCol, warriorWorldRow);
    
        if(warriorWorldCol >= 0 && warriorWorldCol < TRACK_COLS &&
            warriorWorldRow >= 0 && warriorWorldRow < TRACK_ROWS) {
            return worldIndexUnderWarrior;
        } // end of valid col and row
    
        return undefined;
    } // end of warriorWorldHandling func
    
      

      function rowColToArrayIndex(col, row) {
        return col + TRACK_COLS * row;
    }

    function tileTypeHasTransparency(checkTileType){
        return(checkTileType == TRACK_GOAL ||
               checkTileType == TRACK_KEY ||
               checkTileType == TRACK_DOOR);
    }

    function drawTracks() {

      var arrayIndex = 0;
      var drawTileX = 0;
      var drawTileY = 0;
      for (var eachRow=0;eachRow<TRACK_ROWS; eachRow++) {
          for (var eachCol=0;eachCol<TRACK_COLS;eachCol++) {
		    
              var arrayIndex = rowColToArrayIndex(eachCol, eachRow); 
              var tileKindHere = trackGrid[arrayIndex];
              var useImg = trackPics[tileKindHere];
           

           if( tileTypeHasTransparency(tileKindHere) ) {
				canvasContext.drawImage(trackPics[TRACK_ROAD],drawTileX,drawTileY);
			}
			canvasContext.drawImage(useImg,drawTileX,drawTileY);
              drawTileX += TRACK_W;
              arrayIndex++;
          } // end of for each col      
          drawTileY += TRACK_H;
          drawTileX = 0;
             
      } //endof for each row

  }//end of drawTracks()

  