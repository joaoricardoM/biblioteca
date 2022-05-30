import author from '../models/autor.js'

class autorController {

    static listAutor = (req, res) => {
        author.find((err, author) => {
            res.status(200).json(author);
        })
    }

    static listAutorById = (req, res) => {
        const id = req.params.id;

        author.findById(id, (err, author) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - error don't have id ${id}` })
            }else {
                res.status(200).send(author)
            }
        })
    }

    static registerAutor = (req, res) => {
        let author = new author(req.body)

        author.save((err) => {

            if (err) {
                res.status(500).send({ message: `${err.message} - error register Autor failed` })
            } else {
                res.status(201).send(author.toJSON())
            }
        })
    }

    static updateAutor = (req, res) => {
        const id = req.params.id;

        author.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Autor is update it successfully' })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }

    static deleteAutor = (req, res) => {
        const id = req.params.id;

        author.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Autor is deleted it successfully'})
            } else {
                res.status(500).send({ message: `${err.message} - error ${id} is not valid or not exist` })
            }
        })
    }

}

export default autorController;