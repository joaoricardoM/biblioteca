import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
    {
        id: { type: String },
        Editor: { type: String, required: true },
        NumeroPaginas: { type: Number },
        author: { type: String, required: true },
        titulo: { type: String, required: true },
    }
);

const book = mongoose.model('book', bookSchema);

export default book;