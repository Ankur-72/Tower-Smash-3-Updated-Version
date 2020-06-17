class Block {
    constructor(x,y,width,height) {
      var options = {
        restitution:0.5,
        friction: 0.0,
        //  isStatic: false
      }
      
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.visibility = 525;
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }

    /*attach(body){
      this.sling.bodyA = body;
  }*/

    display(color){
     
      if(this.body.speed < 4){
              fill(color);
              var angle= this.body.angle;
              var pos = this.body.position;
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
              fill(color);
              this.visiblity = this.visiblity - 5;
              // tint(255,this.Visiblity);
              pop();
         
       }
    }
  }