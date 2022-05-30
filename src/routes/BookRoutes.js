import express from 'express';
import bookController from '../controllers/bookController.js';

const router = express.Router()

router
    .get("/book", bookController.listBook)
    .get("/book/:id", bookController.listBookById)
    .post("/book", bookController.registerBook)
    .put("/book/:id", bookController.updateBook)
    .delete("/book/:id", bookController.deleteBook)

export default router;