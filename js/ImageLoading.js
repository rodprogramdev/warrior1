var carPic = document.createElement("img");
var otherCarPic = document.createElement("img");
var trackPics = [];

var picsToLoad = 0; //set automatically based on imageList in loadImages

function countLoadedImagesAndLaunchIfReady() {
  picsToLoad--;
 console.log(picsToLoad);
  if (picsToLoad == 0) {
    imageLoadingDoneSoStartGame();
  }
}

function beginLoadingImage(imgVar,fileName){
    imgVar.onload = countLoadedImagesAndLaunchIfReady;
    imgVar.src = "images/"+ fileName; 
}

// function switchCostume(leftCostume,rightCostume,jumpCostume){
//     var costumeList = [
//         {varName: carPic, rightCostume:"warrior.png"},
//         {varName: carPic, leftCostume:"warrior2.png"},
//     ];
    
//     picsToLoad = imageList.length;
// }

function loadImageForTrackCode(trackCode, fileName){
    trackPics[trackCode] = document.createElement("img");
    beginLoadingImage(trackPics[trackCode],fileName);
}

function loadImages() {
    var imageList = [
        {varName: carPic, theFile:"rocketMan3.png"},
        
        {trackType: TRACK_ROAD, theFile:"track_road2.png"},
        {trackType: TRACK_WALL, theFile:"bricks3.png"},
        {trackType: TRACK_SLINGSHOT, theFile:"tirador.png"},
        {trackType: TRACK_LADDER, theFile:"track_ladder.png"},
        {trackType: TRACK_LADDER_CONNECTOR, theFile:"track_ladderConnector.png"},
        {trackType: TRACK_KEY, theFile:"key2.png"},
        {trackType: TRACK_DOOR, theFile:"track_door.png"},
        {trackType: WORLD_TRAP, theFile:"world_trap.png"}



    ];
    

    picsToLoad = imageList.length;
   
    for(var i=0; i<imageList.length; i++){
        if(imageList[i].varName != undefined) {
        beginLoadingImage(imageList[i].varName, imageList[i].theFile);
        } else{
            loadImageForTrackCode(imageList[i].trackType, imageList[i].theFile);
        }
    }
   
}
