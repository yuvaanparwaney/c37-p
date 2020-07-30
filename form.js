class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Hurdles Game");
      this.title.position(displayWidth/2 - 610, 0);
  
      this.input.position(displayWidth/2 - 610 , displayHeight/2 - 350);
      this.button.position(displayWidth/2 - 550, displayHeight/2-300);
  2
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        name = this.input.value();
        this.greeting.html("Hello " + name + "!")
        this.greeting.position(displayWidth/2 - 589, displayHeight/4-170);
      });
  
    }
  }
  
