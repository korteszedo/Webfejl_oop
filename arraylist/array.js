class ArrayList {
    // Privát változók, csak ezen osztályon belül érhetők el
    #state  // Az adatok tárolására szolgáló objektum
    #count  // Az elemek száma
    /**
     * @type {ArrayHTMLTable}
     */
    #htmlArray;  // Ha van megadott HTML táblázat, akkor abban is megjeleníti az adatokat

    // A lista aktuális elemszámát adja vissza
    get Count() {
        return this.#count;
    }
    
    // Konstruktor: Inicializálja az objektumot
    constructor(array = undefined) {
        this.#count  = 0;
        this.#state = {}; // Kezdetben üres objektum
        this.#htmlArray = array; // Opcionálisan egy HTML táblázathoz csatlakozhat
    }

    // Új elem hozzáadása a listához
    Add(param) {
        const index = this.#count; // Az aktuális index meghatározása
        this.#state[index] = param; // Az adat mentése a belső objektumba

        // Dinamikus tulajdonságot adunk az osztály példányához
        Object.defineProperty(this, index, {
            get: () => this.#state[index], // Lekérés
            enumerable: true, // A tulajdonság megjelenjen a ciklusokban
            configurable: true, // Lehetővé teszi a törlést
            set: (value) => { this.#state[index] = value; } // Beállítás
        });

        // Ha van HTML táblázat, frissítsük azt is
        if (this.#htmlArray) {
            this.#htmlArray.addPersonRow(param);
        }

        this.#count++; // Növeljük az elemek számát
    }

    // Az összes elem törlése a listából
    Clear() {
        console.log('Clear kezdődik');
        for (const key in this) {
            delete this[key]; // Minden tulajdonság törlése
        }
        this.#count = 0; // Visszaállítjuk az elemszámot
        this.#state = {}; // Az állapotot is töröljük
        console.log('Clear vége');
    }
}

// Egyedi HTML elem, ami egy táblázatként működik
class ArrayHTMLTable extends HTMLElement {
    #tbody; // A táblázat törzse

    connectedCallback() {
        const table = document.createElement('table'); // Táblázat létrehozása
        this.append(table);

        this.#tbody = document.createElement('tbody'); // Táblázat törzse
        table.append(this.#tbody);

        const thead = document.createElement('thead'); // Fejléc létrehozása (hibás név javítva)
        table.append(thead);
    }

    // Egy új sor hozzáadása a táblázathoz
    addPersonRow(item) {
        const tr = document.createElement('tr'); // Új sor létrehozása
        this.#tbody.appendChild(tr);

        const td1 = document.createElement('td');
        td1.textContent = item.nev; // Név oszlop
        tr.appendChild(td1);

        const td2 = document.createElement('td');
        td2.textContent = item.kor; // Kor oszlop
        tr.appendChild(td2);
    }
}

// Példányosítunk egy ArrayList objektumot
const a = new ArrayList();
a.Add({ nev: "Laci", kor: 18 });
a.Add({ nev: "Sanyi", kor: 21 });
a.Clear(); // Lista kiürítése
console.log(a);

// Egyedi HTML elem regisztrálása
customElements.define('array-t', ArrayHTMLTable);

// Létrehozunk egy táblázat objektumot és hozzáadjuk a DOM-hoz
const Htmltable = new ArrayHTMLTable();
document.body.appendChild(Htmltable);

// Új lista létrehozása, ami egy HTML táblázathoz is kapcsolódik
const b = new ArrayList(Htmltable);
b.Add({ nev: "Laci", kor: 18 });
b.Add({ nev: "Sanyi", kor: 21 });

// Gomb létrehozása és hozzáadása az oldalhoz
const button = document.createElement('button');
button.innerHTML = "Hozzáad";
document.body.appendChild(button);

// Gomb eseménykezelője
button.addEventListener('click', () => {
    b.Add({ nev: "Yapaki", kor: 22 }); // Hozzáad egy új személyt a listához
});
