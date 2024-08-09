// Reto sumar propiedades:

const people = [
    {nombre:"juan", edad:10},
    {nombre: " laura" , edad: 14},
    { nombre: "catalina", edad: 12},
    {nombre:"julian", edad: 15 }
    
]

const sumPeople = (people) => {
    let sumTotal = 0;
    people.forEach(person => sumTotal = sumTotal + person.edad );
    console.log(sumTotal);
}



sumPeople(people)

// Reto filtrar objetos:

const products = [
    {nombre: "manzana", precio: 10},
    {nombre: "pera", precio: 15},
    {nombre: "banana", precio: 13},
    {nombre: "jabon", precio :60},
    {nombre: "arroz", precio: 70},
    {nombre: "fideos", precio: 80}
]

const filterProducts = (products) => {
    let myProducts = []
    products.forEach(product => {
        if( product.precio > 50) {
            myProducts.push(product)
        }
        console.log(myProducts)  
    });
 };

filterProducts(products);

// Reto encontrar por  propiedades:

const students = [ 
    {nombre: "juan", calficacion: 3},
    {nombre: "laura", calficacion: 4},
    {nombre: "catalina", calficacion: 5},
    {nombre: "jose", calficacion: 1},
    {nombre: "maria", calficacion: 2},
    {nombre: "pedro", calficacion: 4},
    {nombre: "andres", calficacion: 5},
]

const searchPeople = ( students, nombre ) => {                // se hace un for each y se le pone un condicional para que por cada
                                                             // ciclo se verifique si se cumple la condicion adentro del ()
    let estudiante =[];
    students.forEach(student => {
        if ( student.nombre === nombre ){
         estudiante.push(student) ;
        } 
        
        if ( student.nombre != nombre ){
         return null
        } 
          return estudiante        
    });
    console.log(estudiante)
} 

searchPeople(students,"juan")
searchPeople(students,"maria")
searchPeople(students,"veronica")


// Reto media estudiantes:

const mediaNotes = (students) => {
    let finalGrade = 0
    students.forEach(student =>
        {
            finalGrade += student.calficacion   
        
        });
    return finalGrade / students.length
}

console.log(mediaNotes(students))   

const theProducts = [
    {nombre: "carne", precio: 50},
    {nombre: "pera", precio: 15},
    {nombre: "silla", precio: 20},
    {nombre: "jabon", precio :60},
    {nombre: "arroz", precio: 70},
    {nombre: "fideos", precio: 80}
]
// me organiza de menor a mayor
const sortedPorducts = theProducts.sort(function (a,b) {
    if( a.precio > b.precio ){
        return 1
    } else{
        return -1
    }
})
console.log(sortedPorducts)
// me da el valor maximo de un arreglo
const maxPrice = (theProducts) =>{
    let productoMasCaro = theProducts[0]
    theProducts.forEach( product => {
        if (product.precio > productoMasCaro.precio){
            productoMasCaro = product
        };
    });
  return productoMasCaro

}

const finalProduct = maxPrice(theProducts)
console.log (finalProduct)


tasks = [
    {id: 1, task: "limpiar cocina"},
    {id: 2, task: "Ir al medico"},
    {id: 3, task: "Hacer ejercicio"},
    {id: 4, task: "Lavar ropa"},
    {id: 1, task: "Estudiar"},
    {id: 6, task: "Comprar comida"},
    {id: 7, task: "Limpiar cuarto"},
    {id: 4, task: "Hacer tarea"},
    {id: 9, task: "Lavar trastes"},
    {id: 1, task: "Hacer ejercicio"},
    {id: 11, task: "Comprar comida"},
    {id: 2, task: "Lavar trastes"}, 
]

const filteredTasks = (tasks) =>{
    let duplicatedtas = tasks[0]
    tasks.forEach(element => {
        
    });

}

const fruts = [ "manzana", "pera","melon","fresa","pera","manzana","manzana"]   
 
const numeroDeFrutas = (fruts) =>{
    let contadorDefrutas = []
    fruts.forEach(frut => {
        if( contadorDefrutas[frut]) {
            contadorDefrutas[frut]++; // incrementa el valor de la fruta si ya la vio
        } else{
            contadorDefrutas[frut] = 1;
        }
    }) 
    return contadorDefrutas 
}

const resultado = numeroDeFrutas(fruts)
console.log(resultado)