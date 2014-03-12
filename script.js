var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var context = canvas.getContext("2d");

var tileSheet = new Image();
tileSheet.addEventListener("load",eventSheetLoaded,false);
tileSheet.src = "sprite.png";

var frames = [1,2,3,4,5,6,7,8];
var findex = 0 ;
var rotation = 90;
var x = 50;
var y = 50;

var mapRows=10;
var mapCols=10;
var mapIndexOffset = -1;
var tileMap = [[32,31,31,31,1,31,31,31,31,32],
[1,1,1,1,1,1,1,1,1,1],
[32,1,26,1,26,1,26,1,1,32],
[32,26,1,1,26,1,1,26,1,32],
[32,1,1,1,26,26,1,26,1,32],
[32,1,1,26,1,1,1,26,1,32],
[32,1,1,1,1,1,1,26,1,32],
[1,1,26,1,26,1,26,1,1,1],
[32,1,1,1,1,1,1,1,1,32],
[32,31,31,31,1,31,31,31,31,32]];

function eventSheetLoaded(){
	startUp();
}

function drawScreen(){
	for (var rowCtr=0;rowCtr<mapRows;rowCtr++) {
		for (var colCtr=0;colCtr<mapCols;colCtr++){
			var tileId = tileMap[rowCtr][colCtr]+mapIndexOffset;
			var sourceX = Math.floor(tileId % 8) *32;
			var sourceY = Math.floor(tileId / 8) *32;
			context.drawImage(tileSheet, sourceX,
			sourceY,32,32,colCtr*32,rowCtr*32,32,32);
			}
	}
	var imagedata = context.getImageData(0,0,canvas.width,canvas.height);
	console.log(imagedata);
	/*context.fillStyle = "#aaaaaa";
	context.fillRect(0,0,500,500);
	context.save();
	context.setTransform(1,0,0,1,0,0)
	var angleInRadians = rotation * Math.PI / 180;
	context.translate(x+16, y+16)
	context.rotate(angleInRadians);
	var sourceX = Math.floor(frames[findex] % 8) *32;
	var sourceY = Math.floor(frames[findex] / 8) *32;
	context.drawImage(tileSheet, sourceX, sourceY,32,32,-16,-16,32,32);
	context.restore();
	findex++;
	if (findex==frames.length) {
		findex=0;
	}*/
}

function startUp(){
	gameLoop();
}

function gameLoop(){
	window.setTimeout(gameLoop,100);
	drawScreen();
}
