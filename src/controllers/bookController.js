import Book from '../models/Book.js'

class BookController {

    static listBook = (req, res) => {
        Book.find()
            .populate('author')
            .exec((err, Book) => {
            res.status(200).json(Book);
        })
    }

    static listBookById = (req, res) => {
        const id = req.params.id;

        Book.findById(id)
        .populate('author', 'name')
        .exec((err, Book) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - error don't have id ${id}` })
            } else {
                res.status(200).send(Book)
            }
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

        Book.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: 'book is update it successfully' })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }

    static deleteBook = (req, res) => {
        const id = req.params.id;

        Book.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: 'book is deleted it successfully' })
            } else {
                res.status(500).send({ message: `${err.message} - error ${id} is not valid or not exist` })
            }
        })
    }

    static listBookEditor = (req, res) => {
        const Editor = req.query.editor

        Book.find({'editor': Editor }, {}, (err, Book) => {
            res.status(200).send(Book)
        })
    }

}

export default BookController;