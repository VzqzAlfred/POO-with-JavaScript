//      PROTOTIPOS DE OBJETOS

let bookPrototype = {
    getResumen: function(){
        return document.write(`
            <div>
                <ul>
                    <li><strong>${this.title}</strong> was written in ${this.year} by <i>${this.author}</i></li>.
                </ul>
            </div>
        `)
    },
    getYears: function(){
        const years = new Date().getFullYear() - this.year
        return document.write(`
            ${this.title} has ${years} years.
        `)
    },
}

/*Primera forma
            //  CREANDO LOS OBJETOS Y SUS PROPIEDADES
    // Digo que me cree un libro a partir de la estructura anterior
let Book1 = Object.create(bookPrototype)
Book1.title = 'Looking for Alaska'
Book1.author = 'Marco Polo'
Book1.year = 2005

Book1.getResumen()  
console.log(Book1)
Book1.getYears()
*/



//Segunda forma 
let Book1 = Object.create(bookPrototype, {
    title:{value: 'Looking for Alaska'},
    author:{value:'Marco Polo'},
    year:{value: 2002}
})

console.log(Book1)
Book1.getResumen()
Book1.getYears()





