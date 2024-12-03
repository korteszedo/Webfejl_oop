class Player {
    constructor(nickname, playedmatch) {
        this.nickname = nickname;
        this.playedmatch = playedmatch;
    }

    play() {
        this.playedmatch++;
        console.log(this.nickname, this.playedmatch);
    }

    getTrierlvl() {
        if (this.playedmatch <= 3) {
            return "A tier";
        }
        if (this.playedmatch > 3 && this.playedmatch < 6) {
            return "B tier";
        } else {
            return "C tier";
        }
    }
}

function printTierLevel(player) {
    console.log(`${player.nickname} a ${player.getTrierlvl()} szinten van`);
}

const gombszab = new Player("Gombszab", 0);

gombszab.play();
printTierLevel(gombszab);

gombszab.play();
printTierLevel(gombszab);

gombszab.play();
printTierLevel(gombszab);

gombszab.play();
printTierLevel(gombszab);

function Személy(név) {
    this.név = név || "Géza";
}

Személy.prototype.getNév = function () {
    return this.név;
};

function Diák(név, iskola) {
    Személy.call(this, név);
    this.iskola = iskola;
}

Object.setPrototypeOf(Diák.prototype, Személy.prototype);

const diák = new Diák("Karcsi", "Gimnázium");
console.log(diák.getNév());

class SzemélyClass {
    constructor(név) {
        this.név = név;
    }

    getNév() {
        return this.név;
    }
}

class DiákClass extends SzemélyClass {
    constructor(név, iskola) {
        super(név);
        this.iskola = iskola;
    }
}

const modernDiák = new DiákClass("Réka", "Főiskola");
console.log(modernDiák.getNév());
console.log(modernDiák.iskola);

class Állat {
    constructor(név) {
        this.név = név || "Ismeretlen állat";
    }

    hangotAd() {
        console.log(`${this.név} hangot ad.`);
    }
}

class Madár extends Állat {
    repül() {
        console.log(`${this.név} repül.`);
    }
}

class Emlős extends Állat {
    sétál() {
        console.log(`${this.név} sétál.`);
    }
}

const galamb = new Madár("Galamb");
galamb.hangotAd();
galamb.repül();

const tigris = new Emlős("Tigris");
tigris.hangotAd();
tigris.sétál();
