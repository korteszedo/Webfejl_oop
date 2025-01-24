let a = { nev: "adadadadad" }; //létrehozunk egy objektumot és a nev-hez hozzácsatoljuk a nevet.

function fun(parameter) { //létrehozunk egy függvényt
    console.log(parameter.nev); // kiírjuk parameter paramétert, és rámutatunk az objektum nev részére
}


fun(a); //meghívjuk a függvényt

const funC = (parameter) => console.log(parameter.nev); //ez egy "másfajta" függvény, csak rövidebb és egyszerűbb

funC(a); //meghívjuk a függvényt

const obj = { //léltrehozok egy objektumot
    funcNev: (parameter) =>{console.log(parameter.nev)}, //obejktum elso ertekenek a nev kilogolás függvényt adom
    funcKor: (parameter) =>{console.log(parameter.kor)} //objektum 2. érétkének a a kor kilogolását adomn meg
}

let b = { //létrehozok egy objektumot. amiben a értékeket adok meg a nev és a kornak
    nev: "asdadasd11",
    kor: 19,
}


obj.funcNev(b); //meghivom az objektum elso funkciojat
obj.funcKor(b); //meghivom au objektum masik funkciojat