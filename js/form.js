class Form{
    constructor(){
        this.input=createInput("").attribute("placeholder","Enter your name");
        this.title=createElement("h2");
        this.button=createButton("PLAY");
        this.greeting=createElement("h2")

    }
    hide(){
        this.title.hide()
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
    display(){
        this.title.class("gameTitle");
        this.title.html("Battle of the Sayens");
        this.title.position(displayWidth/2-300,0);
      
        this.input.position(displayWidth/2-80,displayHeight/2-30);
        this.button.position(displayWidth/2-20,displayHeight/2);

        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            playerCount+=1;
            player.name=this.input.value();
            player.index=playerCount;
            player.updateCount(playerCount);
            player.update();
            this.greeting.class("greetings")
            this.greeting.html("Hello "+player.name +" wait for the enemy")
            this.greeting.position(displayWidth/2-300,displayHeight/4)
        })
    }

}