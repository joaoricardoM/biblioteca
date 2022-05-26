import express from "express";
import db from "./config/dbConnect.js";
import Book from "./models/Book.js"

db.on("error", console.log.bind(console, 'erro de conexão'));
db.once("open", () => {
    console.log("conexão com o banco feita!")
})

const app = express();

app.use(express.json());

// const book = [
//     {id: 1, "titulo": "stranger"},
//     {id: 2, "titulo": "O hobbit"},
// ]

app.get('/', (req, res) => {
    res.status(200).send('Curso Node');
})

app.get('/book', (req, res) => {
    Book.find((err, book) => {
        res.status(200).json(Book);
    })
})

app.get('/book/:id', (req, res) => {
    let index = getBook(req.params.id)
    res.status(200).json(Book[index])
})

app.post('/book', (req, res) => {
    Book.push(req.body);
    res.status(201).send('cadastrado com sucesso')
})

app.put('/book/:id', (req, res) => {
    let index = getBook(req.params.id)
    Book[index].titulo = req.body.titulo;
    res.status(200).json(Book)
})

app.delete('/book/:id', (req, res) => {
    let {id} = req.params;
    let index = getBook(id)
    Book.splice(index, 1)
    res.send(`book ${id} removed with successfully`)
})

function getBook(id) {
    return Book.findIndex( book => book.id == id);
}

export default app;