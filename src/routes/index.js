import express from 'express';
import Book from './BookRoutes.js';
import autor from './authorsRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Welcome"})
    })

    app.use(
        express.json(),
        Book,
        autor
    )
}

export default routes;