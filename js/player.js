class Player{
    constructor(){
this.index=null;
this.name=null;
this.life=4;
this.positionX=0;
this.animation=null;
this.positionY=displayHeight/2+100;
    }
    getCount(){
       database.ref("playerCount") .on("value",(data)=>{
          playerCount=data.val()
       })
       
    }
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }
    update(){
        var playerIndex="players/player"+this.index;
    if(this.index===1){
        this.positionX=150
        this.animation="rightImggoku"
    }
    else{
        this.positionX=displayWidth-150
        this.animation="leftImgvegeta"
    }
        database.ref(playerIndex).update({
            name:this.name,
            life:this.life,
animation:this.animation,
            positionX:this.positionX,
            positionY:this.positionY
        })
    }
   static getPlayerInfo(){
database.ref('players').on("value",(data)=>{
    allPlayers=data.val()
})

}
    }
