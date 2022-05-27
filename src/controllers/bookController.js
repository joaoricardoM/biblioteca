import Book from '../models/Book.js';

class BookController {

    static listBook = (req, res) => {
        Book.find((err, Book) => {
            res.status(200).json(Book);
        }
    )}
}   

export default BookController;