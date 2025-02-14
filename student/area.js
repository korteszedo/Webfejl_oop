class Area{
    /**
     * @type {HTMLDivElement}
     */
    #div

    /**
     * @returns {HTMLDivElement}
     */
    get div(){
        return this.#div
    }

    /**
     * 
     * @param {String} className 
     */
    constructor(className){
        const container = this.#getComtainer();
        this.#div = document.createElement('div');
        this.#div.className = className;
        container.appendChild(this.#div)
    }

    /**
     * 
     * 
     * 
     * @returns {HTMLDivElement}
     */
    #getComtainer(){
        let container = document.querySelector('.container');
        if(!container){
            container = document.createElement('div');
            container.className = 'container';
            document.body.appendChild(container);
        }
        return container
    }


}

/**
 * létre hoz egy details területet a megadott css osztályra
 */
class DetailsAerea extends Area{

    /**
     * 
     * @param {string} className 
     */
    constructor(className){
        super(className);
    } 

}

class StudentsAarea extends Area{
    
    /**
     * @param {Manager} manager
     * @param {string} className 
     */
    constructor(className, manager){
        super(className);
        manager.setAddCallBack((student) => {
            const studentCard = document.createElement('div');
            studentCard.className = 'student-card';
            const nameSpan = document.createElement('span');
            nameSpan.textContent = student.name;
            nameSpan.style.color = student.bad ? 'red' : 'black'
            studentCard.appendChild(nameSpan);
            studentCard.appendChild(document.createElement('br'));
            
            const averageSpan = document.createElement('span');
            averageSpan.textContent = student.average;
            studentCard.appendChild(averageSpan);
            this.div.appendChild(studentCard)
        })
    } 
}