import express from 'express';
import bookController from '../controllers/bookController.js';

const router = express.Router()

router
    .get("/book", bookController.listBook)
    .post("/book", bookController.registerBook)
    .put("/book/:id", bookController.updateBook)

export default router;