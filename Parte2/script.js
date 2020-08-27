/*      PROTOTIPOS (Prototype)
    Son todos los objetos que tienen JavaScript
*/

function Books(title, author, year){
    this.title = title,
    this.author = author, 
    this.year = year
/*    this.getResumen = function(){
        document.write(`
        <div>
            <ul>
                <li>
                    <strong>${title}</strong> was written in ${year} by <i>${author}</i>.
                </li>
            </ul>
        </div>
        `)
    }   
*/
}
const Book1 = new Books('The Lord Of The Rings', 'J.R.R Tolkien', 1929)
const Book2 = new Books('Sodoma', 'Marquéz de Sade', 1850)


//      AGREGAREMOS AHORA EL MÉTODO A LA FUNCIÓN BOOKS
Books.prototype.getResumen = function(){
    return document.write(`
    <div>
        <ul>
            <li><strong>${this.title}</strong> was written in ${this.year} by <i>${this.author}</i></li>.
        </ul>
    </div>
    `)
}

    // TIMPO QUE LLEVA EL LIBRO DESDE QUE SE PUBLICO 
Books.prototype.getYears = function(){
                // Con date obtenemos el año actual en el que estamos.
    const years = new Date().getFullYear() - this.year
                // Le restamos el año que tiene el libro para saber cuantos años lleva el libro desde que fue hecho.
    return document.write(`
    ${this.title} has ${years} years.
    `)
}

Book1.getResumen()
Book1.getYears()
Book2.getResumen()
Book2.getYears()

    // Agregando una nuestra propiedad a la funcion BOOKS
Books.prototype.revisado = function(newYear){
    this.year = newYear,
    this.modify = true;
}
// Agregando el nuevo año
Book1.revisado(2001)
// viendo las modificaciones
document.write(`
<div>
    ${Object.values(Book1)}
</div>    
`)


//      HACIENDO HERENCIA 

function Revista(title, author, year, month){
            // this porque hace que llame dentro del objeto BOOKS
    Books.call(this, title, author, year),
    this.month = month
      //call: llama los párametros de Books 
}


//  HERENCIA DEL PROTOTYPE
Revista.prototype = Object.create(Books.prototype)
            // Asigno que cree de la funcion libros los mismos métodos de BOOKS

Revista.prototype.constructor = Revista


const revista1 = new Revista('Revista 1', 'Alfred', 1996, 'March')
document.write(`
    <div>
        ${Object.values(revista1)}
    </div>
`)


Revista.prototype.revisado = function(newYear){
    this.year = newYear
    this.modificado = true
}

revista1.revisado(2012)
document.write(`
${Object.values(revista1)}
`)


console.log(revista1);