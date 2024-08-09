
const personas =[
    {nombre:"marleny", edad: 60},
    {nombre: "yeliani" , edad: 40},
    {nombre: " rubiela", edad:18},
    {nombre: "yurleidy", edad: 9},
    {nombre: "kevin" , edad:16}
]

const addProperty = (personas) =>{
    personas.forEach(persona =>{
        if(persona.edad >= 18 ){
             persona.mayorEdad = true;
        }else{
            persona.mayorEdad =false
        }

    });
}

addProperty(people)
console.log(people)

// Reto de filtrar por datos:

const books = [
    { name: "Lulu", author: "Juan Manuel" , year:1900 , pages:400 },
    { name: "Cien años de soledad ", author: "Gabriel garcia Marquez" , year:1967  , pages:600 },
    { name: "Cazadores de sombras", author: "kate" , year:2009  , pages:700 },
    { name: "Marcos", author: "clara algo" , year:2020  , pages:200 },
    { name: "Margaritas", author: "Manolo castañeda" , year:2006  , pages:550 },
    { name: "juan", author: "Monolo" , year:200 , pages:400 }

]

const findBooks = (books) =>{
    let filteredBooks = []
    books.forEach(book =>{
        if( book.year > 2000 && book.pages > 300)
            {filteredBooks.push(book)
        }
        console.log(filteredBooks)
    })
}
findBooks(books);


const tasks =[
    { id:1 , task: "limpiar cocina", condition: "incompleta" },
    { id:2 , task: "Ir al medico", condition: "pendiente" },
    { id:3 , task: "leer", condition: "completa" },
    { id:4 , task: "lavar baños", condition: "incompleta" },
    { id:5 , task: "doblar la ropa", condition: "incompleta" },
    { id:6 , task: "estudiar", condition: "pendiente" },
    { id:7 , task: "lavar ropa", condition: "incompleta" },
    { id:8 , task: "concinar", condition: "completa" },
]

const filterTasks = (tasks) => {
    let taskStatus = [];
    tasks.forEach(task => {
        if (task.id % 2 !== 0) {
            taskStatus.push({
                id: task.id,
                task: task.task,
                condition: "completada"
            });
        } 
    });
    return taskStatus;
}

const updatedTasks = filterTasks(tasks);
console.log(updatedTasks);

