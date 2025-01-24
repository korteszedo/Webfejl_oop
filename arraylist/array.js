class ArrayList {
    /**
     * @type {Number} szamnak definialja a hosszt
     */
    #hossz; // hossz csak egy privat objektum ami csak a classon belul van
    #obj;

    get Count() {
        return this.#hossz; // visszaadja a hossz erteket
    }

    constructor() {
        this.#hossz = 0; // a hosszt 0-ra állítjuk
        this.#obj = {}; // az obj-t adattárolónak állítjuk be
    }

    Add(item) {
        const i = this.#hossz; // elkértük az aktuális hosszt
        this.#obj[i] = item; // belso objektumnak az aktuális index tulajdonságának beállítjuk az item paraméterét
        this.#hossz++; // növeljük a hossz tulajdonság értékét
        Object.defineProperty(this, i, {
            get: function () {
                return this.#obj[i]; // visszaadja az aktuális elemet
            },
            set: function (value) {
                this.#obj[i] = value; // beállítja az aktuális elemet
            }
        });
    }

    Clear() {
        this.#hossz = 0; // lenullázzuk a hosszt
        this.#obj = {}; // "lenullázzuk" az obj-t
    }
}

// Példa használat
const csirke = {};
csirke.a = 'def';
console.log(csirke);

const alma = {};
Object.defineProperty(alma, 'nev', {
    value: 'Ferenc', writable: true
});
alma.nev = "asd";
console.log(alma);
