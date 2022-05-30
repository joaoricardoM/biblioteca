import express from 'express';
import autorController from '../controllers/autorController.js';

const router = express.Router()

router
    .get("/author", autorController.listAutor)
    .get("/author/:id", autorController.listAutorById)
    .post("/author", autorController.registerAutor)
    .put("/author/:id", autorController.updateAutor)
    .delete("/author/:id", autorController.deleteAutor)

export default router;