import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        id: { type: String },
        editor: { type: String, required: true },
        author: { type: String, required: true },
        numeroPaginas: { type: Number },
        titulo: { type: String, required: true },
    }
);

const Book = mongoose.model('Books', bookSchema);

export default Book;