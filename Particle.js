class Particle
{
	constructor(x,y,r)
	{
		var options={			
			restitution:0.3,
			}
		this.x=x;
		this.y=y;
		this.r=r
        this.body=Bodies.circle(x, y, r, options)
        this.color=color(random(0,255),random(0,255), random(0,255));p        
		World.add(world, this.body);

	}
	display()
	{
	var pos = this.body.position
	var angle = this.body.angle

			push()
			translate(paperpos.x, paperpos.y);
			rotate(angle)
			//imageMode(CENTER);
			noStroke()
			fill(this.color)
			ellipseMode(RADIUS)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}
