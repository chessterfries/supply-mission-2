class Drop{

    constructor(x,y,width,height){

        var options = {
           isStatic:true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);

    }

    display(){

        var droppos = this.body.position;

        rectMode(CENTER);
        fill("red");
        rect(droppos.x,droppos.y,this.width,this.height);

    }

}