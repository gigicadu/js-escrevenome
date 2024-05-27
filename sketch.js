function setup() {
    createCanvas(400, 400);
    background("rgb(207,95,115)");
  }
  
  function draw() {
    
  
   stroke("rgb(84,84,201)")
    fill("purple");
    
    // console.log(mouseIsPressed);
   
    if(mouseIsPressed) {
      rect(mouseX, mouseY, 25, 30);
    }
    
  }