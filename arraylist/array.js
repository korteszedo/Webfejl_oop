class ArrayList {
    

    /**
     * @type {Number} szamnak definialja a hosszt
     */
    #hossz 
    //hossz csak egy privat objektum ami csak a classon belul van
    #obj
    
    get Count(){ //get a hossz erteket elkeri ugy hogy privat marad

        this.#hossz;

        return this.#hossz; // vissza adja a hossz erteket
    }

  
    constructor(){
        this.#hossz = 0; //a hosszt 0ra állítjuk
        this.#obj = {}; // az obj-t adat tarozonak allitjuk be
        
    }
            
    Add(item){
        const i = this.#hossz; //elkértük az aktualis hosszt
        this.#obj[i] = item; //belso objektumnak az aktualis index tulajdonsaganak beallitjuk az item parameteret 
        this.#hossz++; //növeljuk a hossz tulajdonsaganak erteket


    }       


    Clear(){
        this.#hossz = 0;
        this.#obj = {};
    }

}
const csirke = {};
csirke.a = 'def'
console.log(csirke);
