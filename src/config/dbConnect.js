import mongoose from 'mongoose';

mongoose.connect('mongodb://192.168.1.247:27017/library');

let db = mongoose.connection;

export default db;