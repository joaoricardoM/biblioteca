import mongoose from 'mongoose'

mongoose.connect('mongodb://root:Qjc7pKcD@192.168.1.247:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'library'
});

let db = mongoose.connection;

export default db;