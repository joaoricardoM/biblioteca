import Book from '../models/Book.js';

class BookController {

    static listBook = (req, res) => {
        Book.find((err, Book) => {
            res.status(200).json(Book);
        }
    )}
    static registerBook = (req, res) => {
        let book = new Book(req.body)  
        
        book.save((err) => {
            
            if (err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar o livro`})         
            } else {
                res.status(201).send(book.toJSON())
            }
        })
    }
}   

export default BookController;