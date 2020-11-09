class Divisions{
    constructor(x,y,width,height){
        var options={
            isStatic:true
  }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(Center);
        fill("white")
        rect(pos.x, pos.y, pos.width, pos.height)
    }
}