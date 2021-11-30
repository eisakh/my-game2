class Game{
    constructor(){
        this.playerMoving = false;
        this.leftKeyActive=false
    }
    getState(){
       database.ref("gameState") .on("value",(data)=>{
           gameState=data.val()
       })
       
    }
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
    start(){
        if(gameState===0){
            player=new Player()
        player.getCount()  ;
        form=new Form() ; 
        form.display();

        }
       
        goku=createSprite(150,displayHeight/2+100);
        
        goku.addImage("rightImggoku",gokuImg)
        goku.addImage("leftImggoku",glim)
        goku.changeImage("rightImggoku")
        goku.scale=0.4
        vegeta=createSprite(displayWidth-150,displayHeight/2+100);
      
        vegeta.addImage("leftImgvegeta",vegetaImg)
        vegeta.addImage("rightImgvegeta",vrim)
        vegeta.changeImage("leftImgvegeta")
        vegeta.scale=0.4
        playerArr=[goku,vegeta]
    }
    play(){
        form.hide();
        Player.getPlayerInfo()
        if(allPlayers!==undefined){
            background(bg)
            var x=0
            var y=0
var index=0

            for(var plr in allPlayers){
                x=allPlayers[plr].positionX
                y=allPlayers[plr].positionY
                index=index+1
                playerArr[index-1].position.x=x;
                playerArr[index-1].position.y=y
if (index===player.index){

    this.handlePlayerControls()
}
            }
        }
      
        drawSprites()
    }
    handlePlayerControls(){
        if (keyIsDown(UP_ARROW)) {
            this.playerMoving = true;
            player.positionY -= 10;
            player.update();
          }
          if(keyIsDown(LEFT_ARROW)){
             this.leftKeyActive=true
            
              if(player.index===1){
                player.positionX-=10
               
                  player.animation="leftImggoku"
player.update();
                  goku.changeImage(player.animation)
              }
              else{
                player.positionX-=10
               
                  player.animation="leftImgvegeta"
player.update()
                  vegeta.changeImage(player.animation)

              }
          }
          if(keyIsDown(RIGHT_ARROW)){
            this.leftKeyActive=false;
           
            if(player.index===1){
                goku.changeImage("rightImggoku")
                player.positionX+=10
                player.update();
            }
            else{
                vegeta.changeImage("rightImgvegeta")
                player.positionX+=10
                player.update();
            }
        }
    }
   
}