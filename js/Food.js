class Food{
    constructor(){
        this.foodStock = null;
        this.image = loadImage('images/Milk.png');
    }

    getFoodStock(){
        var foodCountRef = database.ref("Food");
        foodCountRef.on("value", (data)=>{
            this.foodStock = data.val();
        })
    }

    updateFoodStock(foodS){
        database.ref("/").update({
            Food: foodS
        })
    }

    display(){
        var foodCountRef = database.ref("Food");
        foodCountRef.on("value", (data)=>{
            this.foodStock = data.val();
        })
        console.log(this.foodStock);
        var x = 80, y = 100;

        //imageMode(CENTER)
        //this.image(this.image, 720, 220, 70, 70)

        if(this.foodStock!= 0){
            for(var i = 0; i<this.foodStock; i++){
                if(i%10==0){
                    x = 80;
                    y = y+50;
                }
                image(this.image, x, y, 50, 50);
                x = x+20;
            }
        }
    }
}