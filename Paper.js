class Paper{
  constructor(x, y,radius) {
    var options={
      isStatic:false,
      'restitution':0.8,
      'friction':0.5,
      'density':1.0
    }
      this.body=Bodies.circle(x, y,radius,options);
      this.radius=radius;
      World.add(world, this.body);
    }
    display(){
      var angle
      rotate(angle);
      ellipse(this.body.position.x,this.body.position.y, this.radius);
      fill("blue")
    }
}