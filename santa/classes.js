
class Factory{
    constructor(){ //nem kell semmi se a constructorba mert meghíváskor nem adunk meg semmit.
        this.manok_lista = []; //azárt tömb mert így tudunk manókat hozzáadni majd
    }

    Addmano(mano) { //nem kell manok lista mert osztalyon belul vagyunk
        this.manok_lista.push(mano); //this azért kell mert rámutat 

    }


 // TODO 1, 2, 3, 4, 9, 10
}












class Companion{
        constructor(id, kernev, veznev,reszleg){
        this.product_list = [];

        this.id = id;
        this.kernev = kernev;
        this.veznev = veznev;
        this.reszleg = reszleg;
    }

       Osszevon(){
        
        return this.kernev + " " + this.veznev;

    }

       procuctAdd(product){
        this.product_list.push(product);
    }
 // TODO 5
}