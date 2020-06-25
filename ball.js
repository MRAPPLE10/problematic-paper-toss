class Ball {
    constructor(x,y,radius){
        var options = {
            'restitution':0.5,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        var radius= this.body.radius;
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius, this.radius);
    }
}
