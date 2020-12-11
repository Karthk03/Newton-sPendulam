class Ball
{
    constructor(x,y,radius)
    {
        var options =
        {
            frictionAir: 0,
            restitution: 0.5,
            frictionStatic: 0,
            friction: 0,
            inertia: 0,
            density: 3
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }

    display()
    {
        const pos = this.body.position
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius*2);
    }
}