const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]

//tugas ka seuleusoe;

class Person{
    constructor(obj){
        this.firstname1 = obj.firstname1
        this.firstname2 = obj.firstname2
        this.lastname = obj.lastname

    }

    render(parent_element){ //html element kell bele fiam


        const tr = document.createElement('tr');
        parent_element.appendChild(tr);


        const firstname1 = document.createElement('td');
        firstname1.innerHTML = this.firstname1;
        tr.appendChild(firstname1);


        if (this.firstname2 == undefined){
            firstname1.colSpan = 2;
        }
        else{
            const firstname2 = document.createElement('td');
            firstname2.innerHTML = this.firstname2;
            tr.appendChild(firstname2);
        }

        const lastname = document.createElement('td');
        lastname.innerHTML = this.lastname;
        tr.appendChild(lastname);

    }
}