/**
 * @callback AddCallback
 * @param {Student} student
 * 
 * @callback SelectCallback
 * @param {Student} student
 */

class Manager{
    /**
     * @type {Student[]}
     */
    #array

    /**
     * @type {SelectCallback}
     */
    #selectCallback

    /**
     * @type {AddCallback}
     */
    #addCallback

    constructor(){
        this.#array = [];
    }

    /**
     * 
     * @param {AddCallback} callback 
     */
    setAddCallBack(callback){
        this.#addCallback = callback
    }

    /**
     * @param {SelectCallback} callback
     */
    setSelectAddCallBack(callback){
        this.#selectCallback = callback;
    }


    /**
     * 
     * @param {Student} student 
     */
    add(student){
        this.#array.push(student);
        this.#addCallback(student);
    }

    /**
     * 
     * @param {Student} student 
     */
    select(student){
        this.#selectCallback(student);
    }
}