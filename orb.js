function Orb (x, y)  {
    this.x = x;
    this.y = y;
    this.rad = 10;
    this.rand = random(10);
    
    
    this.display = function()   {
        if (this.rand < 4.5)    {
            fill(255);
        }   else if (this.rand < 9 ) {
            fill(0);
        }   else    {
            fill(255, 0, 0);
        }
        noStroke();
        ellipse(this.x, this.y, (width/squares)/2, (height/squares)/2);
    };
        this.pressed = function()   {
            var d = dist(mouseX, mouseY, this.x, this.y);
            if (d < (width/squares)/2 && mouseIsPressed)   {
                return true;
            }
            
        };
    
    
}
