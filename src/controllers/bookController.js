import Book from '../models/Book.js'

class BookController {

    static listBook = (req, res) => {
        Book.find((err, Book) => {
            res.status(200).json(Book);
        })
    }
    static registerBook = (req, res) => {
        let book = new Book(req.body)

        book.save((err) => {

            if (err) {
                res.status(500).send({ message: `${err.message} - error register book failed` })
            } else {
                res.status(201).send(book.toJSON())
            }
        })
    }

    static updateBook = (req, res) => {
        const id = req.params.id;
        
        Book.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err) {
                res.status(200).send({ message: 'book is update if successfuly'})
            } else {
                res.status(500).send({ message: err.message})
            }
        })
    }
}

export default BookController;