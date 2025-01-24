let a = { nev: "adadadadad" }; //létrehozunk egy objektumot és a nev-hez hozzácsatoljuk a nevet.

function fun(parameter) { //létrehozunk egy függvényt
    console.log(parameter.nev); // kiírjuk parameter paramétert, és rámutatunk az objektum nev részére
}


fun(a); //meghívjuk a függvényt

const funC = (parameter) => console.log(parameter.nev); //ez egy "másfajta" függvény, csak rövidebb és egyszerűbb

funC(a); //meghívjuk a függvényt

const obj = {
    funcNev: (parameter) =>{console.log(parameter.nev)},
    funcKor: (parameter) =>{console.log(parameter.kor)}
}

let b = {
    nev: "asdadasd",
    kor: 19,
}


obj.funcNev(b);
obj.funcKor(b);