class Student{
    
    /**
     * @type {Number}
     */
    #average;

    /**
     * @type {string}
     */
    #name

    /**
     * @type {string}
     */
    #comments
    
    /**
     * @type {boolean}
     */
    #bad;

    get average(){
        return this.#average;
    }

    get name(){
        return this.#name;
    }

    get bad(){
        return this.#bad;
    }

    get comments(){
        return this.#comments
    }

    /**
     * 
     * @param {string} name 
     * @param {Number} average 
     * @param {string} comment 
     * @param {boolean} bad 
     */
    constructor(name, average, comment, bad){
        this.#average = average;
        this.#name  = name;
        this.#comments = comment;
        this.#bad = bad;
    }
}

