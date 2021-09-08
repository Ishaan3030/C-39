class Form{
  constructor(){
    this.input = createInput("").attribute("placeholder","Enter your name");
    this.playButton = cretaeButton("Play");
    this.titleImg = createImg("./assets/title.png","game title");
    this.greeting = createElement("h2");
  }

  setElementsPosition(){
    this.titleImg.position(120,50);
    this.input.position(width/2 - 110, height/2 - 80);
    this.playButton.position(width/2 - 90, height/2 - 20);
    this.greeting.position(120,50);
  }

  setElementsStyle(){
    
  }

  hide(){
    
  }

  handleMousePressed(){
    
  }

  display(){
    
  }

  
}
