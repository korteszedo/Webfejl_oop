alert("buzi alex");


function Player(nickname, playedmatch){
    this.nickname = nickname;
    this.playedmatch = playedmatch;
    
}


Player.prototype.play = function(){
    this.playedmatch ++;
    
    console.log(this.nickname, this.playedmatch)
}


Player.prototype.getTrierlvl = function(){
    if(this.playedmatch <= 3){
        return "A tier"
    }
    if (this.playedmatch > 3 && this.playedmatch < 6) {
        return "B tier"
    } else {
        return "C tier"
    }
}

const gombszab = new Player("gombszab", 1);
gombszab.play()
gombszab.play()
gombszab.play()

console.log(gombszab.getTrierlvl());



