class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(4);
            stroke(84,39,15);
            if(pointA.x<280){
                line(pointA.x-20, pointA.y, pointB.x-25, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x-2, pointB.y);
            }
            else{
                strokeWeight(3);
                line(pointA.x+25, pointA.y, pointB.x-25, pointB.y);
                line(pointA.x+25,pointA.y, pointB.x-2, pointB.y);
            }
        }    
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(bodyA){
        this.sling.bodyA = bodyA;
    }
}