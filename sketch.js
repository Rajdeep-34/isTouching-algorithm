var fixedrect, movingrect


function setup() 
{
  createCanvas(800,400);
  
  fixedrect = createSprite(400,200,50,80);
  fixedrect.shapeColor = "cyan";

  movingrect = createSprite(200,200,30,70);
  movingrect.shapeColor = "cyan";

}

function draw()
{
  background(0);  
  movingrect.x = mouseX;
  movingrect.y = mouseY;

  if(isTouching(fixedrect, movingrect)){
    movingrect.shapeColor = "orange";
    fixedrect.shapeColor = "orange";
  }
  else
  {
    fixedrect.shapeColor = "cyan";
    movingrect.shapeColor = "cyan";
  }

  console.log(fixedrect.y - movingrect.y);


  drawSprites();
}

