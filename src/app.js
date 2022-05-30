import express from "express";
import db from "./config/dbConnect.js";
import Book from "./models/Book.js";
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'erro de conexão'));
db.once("open", () => {
    console.log("conexão com o banco feita!")
})

const app = express();

routes(app);

app.get('/books/:id', (req, res) => {
    let index = getBook(req.params.id)
    res.json(Book[index])
})

app.put('/books/:id', (req, res) => {
    let index = getBook(req.params.id)
    Book[index].titulo = req.body.titulo;
    res.json(Book)
})

app.delete('/books/:id', (req, res) => {
    let {id} = req.params;
    let index = getBook(id)
    Book.splice(index, 1)
    res.send(`book ${id} removed with successfully`)
})

function getBook(id) {
    return Book.findIndex( book => book.id == id);
}

export default app;