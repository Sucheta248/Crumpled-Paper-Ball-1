class Dustbin{

    constructor (x,y,width,height){

        var options = {
            isStatic: true
        }
        
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);

        this.width = width;
        this.height = height;

    }

    display(){

        var pos = this.body.position;
        fill ("white");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);

    }

}