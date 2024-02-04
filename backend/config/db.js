const mongoose = require('mongoose')

const mongoURI = 'mongodb+srv://patilmayur2745:6o1u6zJaZbGUl1gB@cluster0.lpdssk0.mongodb.net/NoteBook?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Database connected");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
}
module.exports = connectDB