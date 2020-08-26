const subject = new String('Hola')
console.log(typeof(subject))    // Un objeto


/*          OBJETOS LITERALES
    Cuando utilizamos está estructura, de tipo JSON que permite definir
    las propiedades y métodos de un objeto  
*/

const book1 = {
    title: 'Sodoma',
    autor: 'Marquáz',
    year: 2013,
    //Se le puede agregar métodos a los objetos
    getResumen(){
        console.log(`"${this.title}", this book was written by ${this.autor} in the year ${this.year}`)
    }
}

const book2 = {
    title: 'Book 2',
    autor: 'Tolkien',
    year: 2015,
    getResumen(){
        console.log(`"${this.title}", this book was written by ${this.autor} in the year ${this.year}`)
    }
}

console.log(book1)
console.log(book2)
    // Este es una forma de imprimir valores de los objetos
console.log(Object.values(book2))
// document.write(Object.values(book2))
    // Imprimir propiedades de los objetos
console.log(Object.keys(book2))
// document.write(Object.keys(book2))

console.log(book1.getResumen());
console.log(book2.getResumen());




/*     OBJETOS CON CONSTRUCTOR      */

function dog(name, age, color){
    this.name = name,
    this.age = age,
    this.color = color,
    this.resumen = function(){
        return console.log(`${this.name} is ${this.age} and it's color ${this.color}`);
    }
}
   
console.log(typeof(dog))    // Al poner que es, es una función

    // CREANDO SUS INSTANCIAS DE DOG1 haciendolo OBJETO

// Aqui lo hacemos objeto
const dog1 = new dog('Bell', 3, 'White with gray') 
// console.log(typeof(dog1))

    // CREANDO OTRO OBJETO
const dog2 = new dog('Gretchen', '3 months', 'White with brown')
console.log(Object.values(dog2));


console.log(dog1.resumen())
console.log(dog2.resumen())