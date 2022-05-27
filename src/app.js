import express from "express";
import db from "./config/dbConnect.js";
import book from "./models/Book.js";
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'erro de conexão'));
db.once("open", () => {
    console.log("conexão com o banco feita!")
})

const app = express();

app.use(express.json());

routes(app);

// const book = [
//     {id: 1, "titulo": "stranger"},
//     {id: 2, "titulo": "O hobbit"},
// ]

app.get('/book', (req, res) => {
    book.find((err, book) => {
        res.status(200).json(book);
    })
})

app.get('/book/:id', (req, res) => {
    let index = getBook(req.params.id)
    res.json(book[index])
})

app.post('/book', (req, res) => {
    book.push(req.body);
    res.status(201).send('cadastrado com sucesso')
})

app.put('/book/:id', (req, res) => {
    let index = getBook(req.params.id)
    book[index].titulo = req.body.titulo;
    res.json(book)
})

app.delete('/book/:id', (req, res) => {
    let {id} = req.params;
    let index = getBook(id)
    book.splice(index, 1)
    res.send(`book ${id} removed with successfully`)
})

function getBook(id) {
    return book.findIndex( book => book.id == id);
}

export default app;