var dog,sadDog,happyDog;
var database;
var feed, addFood, foodObj;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  database = firebase.database();
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed = createButton("Feed the Dog");
  feed.position(700, 95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800, 95);
  addFood.mousePressed(addFoods);

  foodObj = new Food();

}

function draw() {
  background(46,139,87);

  foodObj.display();
  drawSprites();
}




//function to update food stock and last fed time
function feedDog(){
  foodObj.getFoodStock()
  if(foodObj.foodStock>0){
    dog.addImage(happyDog);
    dog.scale=0.15;
    foodObj.foodStock = foodObj.foodStock-1
    foodObj.updateFoodStock(foodObj.foodStock);
  }
}

function addFoods(){
  foodObj.getFoodStock()
  foodObj.foodStock = foodObj.foodStock+1
  foodObj.updateFoodStock(foodObj.foodStock);
}

