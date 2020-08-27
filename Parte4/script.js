//          CLASES

// AUXILIANDONOS DE .js DE CLASE2
class BOOKS {
    // Siempre debe hacerse un constructor para poder adquirir las propiedades de libro
    constructor(title, author, year){
        this.title = title,
        this.author = author,
        this.year = year  
    }
    getResumen(){
    return document.write(`
        <div>
            <ul>
                <li><strong>${this.title}</strong> was written in ${this.year} by <i>${this.author}</i></li>.
            </ul>
        </div>
        `)
    }
    revisado(newYear){
        this.year = newYear,
        this.modify = true;
    }

    // Para llamar a lo métodos estáticos se coloca directamente el nombre de la clase
    static ejemploDeUnMetodoEstatico(){
        return document.write(`
        <div>
            Prueba de método estático
        </div>
        `) 
    }
}

// Instancia de la clase BOOKS
let Book1 = new BOOKS('Book1', 'Pablo Neruda', 1990)
console.log(Book1)
Book1.getResumen()
Book1.revisado(2001)    // Cambia el año a 2001
// iMPRESIÓN DEL MÉTODO ESTÁTICO
BOOKS.ejemploDeUnMetodoEstatico()


//      CREANDO SUBCLASES 
    // extends es que va a heredar propiedades de BOOKS
class Revista extends BOOKS {
    constructor(title, author, year, month){
        // super: Llama métodos y atributos de la clase padre
        super(title, author, year),
        this.month = month
    }
}

//      INSTANCIA DE LA CLASE Revista

let revista1 = new Revista('HBO', 'Babará de Regil', 2008, 'December')
console.log(revista1);

revista1.getResumen()