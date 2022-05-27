import express from 'express';
import Book from './BookRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Welcome"})
    })

    app.use(
        express.json(),
        Book
    )
}

export default routes;