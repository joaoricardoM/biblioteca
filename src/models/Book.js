import mongoose from 'mongoose';

const bookSchema = new  mongoose.Schema(
    {
        id: { type: String },
        title: { type: String, required: true },
        author: { type: String, required: true },
        Editor: { type: String, required: true },
        NumeroPaginas: { type: Number }
    }
);

const book = mongoose.model('book', bookSchema);

export default book;