import express from "express";

const app = express();

app.use(express.json());

const book = [
    {id: 1, "titulo": "stranger"},
    {id: 2, "titulo": "O hobbit"},
]

app.get('/', (req, res) => {
    res.status(200).send('Curso Node');
})

app.get('/book', (req, res) => {
    res.status(200).json(book);
})

app.get('/book/:id', (req, res) => {
    let index = getBook(req.params.id)
    res.status(200).json(book[index])
})

app.post('/book', (req, res) => {
    book.push(req.body);
    res.status(201).send('cadastrado com sucesso')
})

app.put('/book/:id', (req, res) => {
    let index = getBook(req.params.id)
    book[index].titulo = req.body.titulo;
    res.status(200).json(book)
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