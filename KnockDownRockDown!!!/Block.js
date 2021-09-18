class Block{
    
    constructor(x, y, width, height){
        
        var options = {
            //width: width,
            //height: height,
            //image: image,
            //randval: randval,
            restitution: 0.6,
            friction: 0.5,
            density: 0.4,
            isStatic : false
        }
        this.randval = Math.round(random(1,3));
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.visibility = 255;
        this.image = loadImage("blockimg.png");
        this.image2 = loadImage("blockimg2.png");
        this.image3 = loadImage("blockimg3.png");
        
    }
    display(){
        if(this.body.speed < 3){
            var angle = this.body.angle
        var pos = this.body.position
        push();
        
        translate(pos.x, pos.y);
        rotate(angle);
        
        //rectMode(CENTER);
        //rect(0,0,this.width,this.height);
        
        //this.body.debug = true;
        randval = Math.round(random(1,3));
        if(this.randval === 1){
            image(this.image, 0, 0 ,this.width, this.height);
        } else if(this.randval === 2){
            image(this.image2, 0, 0, this.width, this.height);
        } else if(this.randval === 3){
            image(this.image3, 0, 0, this.width, this.height);
        }
        pop();
        } else{
            World.remove(world, this.body);
            push();
            this.visibility -= 5;
            tint(255,this.visiblity);
            pop();
        }
        }
    }