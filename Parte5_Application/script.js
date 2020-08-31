const secret = new WeakMap()    
        // WeakMap(): hace que las propiedades no puedan ser mostradas en consola
        // Al restringuir las propiedades tenemos que hacer *get y set*

class bookStore {
    constructor(title, author, price){
       const properties = {
        title: title,
        author: author,
        price: `$${price}`
       }
        // permite modificar propiedades del constructor
        // set():  Hace modificaciones a la propiedad
        secret.set(this, {properties})

        // Permite obtener nuestras propiedades privadas
        // get():  Hace lectura de propiedades
        // secret.get()
    }

    get title(){
        return secret.get(this).properties.title
    }

    set title(newTitle){
        return secret.set(this).properties.title = newTitle 
    }

    get author(){
        return secret.get(this).properties.author
    }

    set author(newAuthor){
        return secret.set(this).properties.author = newAuthor 
    }
    
    get price(){
        return secret.get(this).properties.price
    }

    set price(newPrice){
        return secret.set(this).properties.price = newPrice
    }

}


class Comics extends bookStore{
    constructor(title, author, price, ilustrator){
        super(title, author, price)
        this.ilustrator = ilustrator
    }
            // Como es un arreglo de ilustradores va entre corchetes
    addIlustrator(newIlustrator = []) {
        this.ilustrator.push(newIlustrator)
    }
}

class ShoppingCart {
    constructor(){
        this.prducts = []
    }

    addProduct(amount, price){
                        // genera una copia del arreglo anterior 
        this.products.push( ...[Array(amount).fill(price)]);
    }

    showProducts(){
        return console.log(this.prducts);
    }

    calcTotal(){         
        return this.prducts.map(price => price )           // 0 es el que recibe el acumulator
                            .reduce((acumulator, price) => acumulator + price, 0)
    }

    printTicket(){
        return console.log(`Total a pagar: ${this.calcTotal()}`);
    }
}


let book1 = new bookStore('1984','G.O', 150)
let book2 = new bookStore('Looking for Alaska', 'G.M', 120)

document.write(`${book1.title}`)
console.log(book1.title)
document.write(`${book1.author}`)
console.log(book1.author)
document.write(`${book1.price}`)
console.log(book1.price)


let comic1 = new Comics('The killing joke', 'A.M', 250)

console.log(comic1.title);
console.log(comic1.author);
console.log(comic1.price);
console.log(comic1.ilustrator);
// Agregando un ilustrador, como es un arreglo tiene que ir entre corchetes
comic1.ilustrator = ['Ma.L']
console.log(comic1.ilustrator);
// Agregando otro ilustrador, ya sin [] porque ya se declaro en el método
comic1.addIlustrator('L.O')
console.log(comic1.ilustrator);

document.write(`
    <div>${comic1.title}</div>
    <div>${comic1.author}</div>
    <div>${comic1.price}</div>
    <div>${comic1.ilustrator}</div>
`)


const cart = new ShoppingCart()

cart.addProduct(2, book1.price);
cart.showProducts()