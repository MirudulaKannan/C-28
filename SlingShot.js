class SlingShot{
    constructor(bodyA, point2){
        var options = {
            bodyA: bodyA,
            pointB: point2,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = point2;
        this.slingShot = Constraint.create(options);
        World.add(world, this.slingShot);
    }

    display(){
        if(this.slingShot.bodyA){
           var pointA = this.slingShot.bodyA.position;
           strokeWeight(4);
           line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
        }
    }

    fly(){
        this.slingShot.bodyA = null;
    }
    
}