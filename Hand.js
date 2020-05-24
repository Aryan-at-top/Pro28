class Hand{
    constructor(paper,hi){
    var options={
        bodyA:paper,
        pointB:hi,
        length:5,
        stiffness:0.1
    }
    this. constraint=Matter.Constraint.create(options)
    World.add(world,this.constraint)
    }
    display(){
    if (this.constraint.bodyA!=null){
        push();
        strokeWeight(2)
        line(this.constraint.bodyA.position.x,this.constraint.bodyA.position.
            y,this.constraint.pointB.x,this.constraint.pointB.y)
        pop();    
        
    }
    }
    freedom(){
    this.constraint.bodyA=null
    }
    }