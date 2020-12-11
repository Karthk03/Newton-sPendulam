class Rope
{
    constructor(bodyA, pointB){
        var options = 
        {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 200
        }
        this.rope = Matter.Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.rope);
    }

    display()
    {
        strokeWeight(4);
        var pointB = this.pointB;
        var pointA = this.rope.bodyA.position;
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}