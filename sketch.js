var squares;
var orbs = [];


function setup()    {
    createCanvas(900, 900);
    squares = 15;
    
    
    for (var i = 0; i < squares; i++)  {
        line(i*(width/squares), 0, i*(width/squares), height);
        
        for (var j = 0; j < squares; j++)  {
            line(0, j*(height/squares), width, j*(height/squares));
            
            
            orbs.push(new Orb(j*(height/squares)+((height/squares)/2), i*(width/squares)+((width/squares)/2)));
            //ellipse(j*(height/rows)+((height/rows)/2), i*(width/cols)+((width/cols)/2), 10, 10);
        }
    }

}


function draw() {
    background(255/2);
    stroke(255);
        for (var i = 1; i < squares; i++)  {
        line(i*(width/squares), 0, i*(width/squares), height);
        
        for (var j = 1; j < squares; j++)  {
            line(0, j*(height/squares), width, j*(height/squares));
        }
        }


    for (var k = 0; k < orbs.length; k++)   {
        orbs[k].display();
        if (orbs[k].pressed())    {
            orbs.splice(k, 1);
        }
    }


    
}
