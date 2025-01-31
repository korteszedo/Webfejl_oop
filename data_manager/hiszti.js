/**
 * @typedef {{nev:String, eletkor:Number}} Person //tipus deklaracio Personnak van egy eletkor es egy nev tipusa
 * @callback Updatecallback
 * @param {} person
 * @returns {void}
 */



class Datamanager{

    /**
     * @type {Person[]} 
     */
    #array
    /**
     * @type {Updatecallback}
     */
    #updatecallback

    /**
     * 
     * @param {Person#array[]} array 
     */
    constructor(array = []){

        this.array = []
        this.#array = this.array;

        this.#updatecallback = () => {}

    }

    /**
     * 
     * @param {}
     */
    setupdatecallback(callback) {

        this.#updatecallback = callback
        this.#updatecallback(this.#array)
    }


   /**
    * 
    * @param {Person[]} asd 
    */

    add(asd){
        this.#array.push(asd);
        this.#updatecallback(this.#array)
    }


    /**
     * 
     * @param {String} asdasd 
     */
    filetname(asdasd){
        const result = [];

        for(let i = 0; i < this.#array.length; i++){
            if (asdasd === this.#array[i].nev){
                result[i] = this.#array[i]
            }
        }
        this.#updatecallback(result)
    }

    /**
     * 
     * @param {Number} asd 
     */

    filterage(asd){
        const result = [];

        for(let i = 0; i < this.#array.length; i++){
            if (asd === this.#array[i].eletkor){
                result[i] = this.#array[i]
            }
        }
        this.#updatecallback(result)
    }


}


/**
 * @param {Datamanager} datamanager
 */

class Datatable{


    constructor(datamanager){
        const table = document.createElement('table')
        document.body.appendChild(table)
    
        const header = document.createElement('thead')
        table.appendChild(header)

        const tbody = document.createElement('tbody')
        table.appendChild(tbody)

        const fejlec = document.createElement('tr');

        const nev_nev = document.createElement('td');
        nev_nev.innerHTML = "név"

        const kor_kor = document.createElement('td');
        kor_kor.innerHTML = "kor"


        header.appendChild(fejlec);
        fejlec.appendChild(nev_nev);
        fejlec.appendChild(kor_kor);


        datamanager.setupdatecallback((persons)=> {
            tbody.innerHTML = ''
            for(let i = 0; i < persons.length; i++){

                const sor = document.createElement('tr')
                tbody.appendChild(sor)

                const nev = document.createElement('td');
                nev.innerHTML = persons[i].nev

                const kor = document.createElement('td');
                kor.innerHTML = persons[i].kor
            }
        })
    }
}

const datamanager2 = new Datamanager([
    {
        nev: "asdasdad",
        kor: 23
    },
    {
        nev: "asdasd46346ad",
        kor: 12
    },
    {
        nev: "as3432432dasdad",
        kor: 40
    },
    {
        nev: "sd",
        kor: 3
    }
])

const datatable = new Datatable(datamanager2);