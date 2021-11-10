class Board{

    constructor(x,y,width,height){
        var options={
            isStatic: true
        }
        this.body = rectangle(x,y,width,height,options);

        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;

        this.image = "./assets/background.png"

        World.add(world,this.body)
    }


}

function display(){

    var pos = this.body.position;

    push();

ImageMode(CENTER);
image(this.image,pos.x,pos.y,this.width,this.height);

pop();

}
