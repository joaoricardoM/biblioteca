import express from 'express';

import BookController from '../controllers/bookController.js';

const router = express.Router();

router
    .get('/book', BookController.listBook)

    export default router;