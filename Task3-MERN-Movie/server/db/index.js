
const mongoose = require('mongoose')

mongoose
    .connect(
        process.env.MONGO_URI || 'mongodb://mongodb:27017/cinema',
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .catch(e => {
        console.error('MongoDB connection error:', e.message)
    })

const db = mongoose.connection

module.exports = db
