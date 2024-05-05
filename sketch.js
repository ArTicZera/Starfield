let stars = [];
let speed;

function setup() 
{
  createCanvas(800, 600);
  
  for (let i = 0; i < 100; i++) 
  {
    stars[i] = 
    {
      x: random(500),
      y: random(500),
      z: random(500)
    };
  }
}

function draw() 
{
  speed = 5;
  
  background(0);
  
  for (let i = 0; i < 100; i++) 
  {
    let star = stars[i];
    
    star.z -= speed;
    
    if (star.z < 1) 
    {
      star.z = 500;
      star.x = (random(2) - 1) * random(500);
      star.y = (random(2) - 1) * random(500);
    }
    
    let x = (star.x / star.z) * width / 2 + width / 2;
    let y = (star.y / star.z) * height / 2 + height / 2;

    noStroke();
    ellipse(x, y, 5, 5);
  }
}
