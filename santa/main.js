/**
 * @type {{
 *   firstName: string;
 *   lastName: string;
 *   products: string[];
 *   area: string;
 * }[]}
 */
const companionList = [
    {
        firstName: 'Géza',
        lastName: 'Kiss',
        area: 'plastic',
        products: ['kisauto', 'barbibaba']
    },
    {
        firstName: 'Ferenc',
        lastName: 'Tóth',
        area: 'paper',
        products: ['könyv']
    },
    {
        firstName: 'Gábor',
        lastName: 'Nagy',
        area: 'plastic',
        products: ['zokni']
    },
]
const factory = new Factory(); //példányosítás

document.getElementById('companion').addEventListener('submit',function(e){
    e.preventDefault();
    const form =  e.currentTarget
    addCompanion(form, factory);
});

document.getElementById('product').addEventListener('submit',function(e){
    e.preventDefault();
    const form = e.currentTarget;
    addProductForm(form, factory)
});

/**
 * table render
 */
function initTable(){

    for (let i = 0; i < companionList.length; i++){

        const adat = companionList[i]; //lista aktualis eleme
        const companion = new Companion(i, adat.firstName, adat.lastName, adat.area);  //aktualis elem reszeit adja meg a classnek


        for (const termek of adat.products){  // az adat.products bol az a datokat a termékme rakjuk a termékbe ideiglenes értéknek, amit a product_list = []; listahoz fuzunk
            companion.procuctAdd(termek);
        }


        factory.Addmano(companion);
    }

    

    // TODO 6
}


initTable()

console.log(factory)

/**
 * 
 * eventlistener callback for the button click of companion
 * 
 * @param {EventTarget} e 
 */
function checkEventListener(e){
    const row = e.currentTarget.parentElement.parentElement;
    const companionId = row.id;
    // TODO 10
}
