import mongoose from 'mongoose'

const bookmarkSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true
    },
    url: String
})

export default mongoose.model('Bookmark', bookmarkSchema)
