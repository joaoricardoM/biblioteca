import express from 'express';
import autorController from '../controllers/autorController.js';

const router = express.Router()

router
    .get("/autor", autorController.listAutor)
    .get("/autor/:id", autorController.listAutorById)
    .post("/autor", autorController.registerAutor)
    .put("/autor/:id", autorController.updateAutor)
    .delete("/autor/:id", autorController.deleteAutor)

export default router;