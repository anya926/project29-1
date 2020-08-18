class Box{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
            'friction':0.001,
            'density':0.001
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;

        World.add(world, this.body);
    }
    display(){
        console.log(this.body.speed);
        if(this.body.speed<3){
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();
          }    
          else{
            World.remove(world, this.body);
            push();
            //tint(255,125);
            //rect(this.body.position.x,this.body.position.y,this.width,this.height);
            this.visibility = this.visibility-5;
            pop();
          }
    }
};