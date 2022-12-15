import mongoose from 'mongoose'
import connection from '../connection.js'
import data from './bookmarks.json' assert { type: 'json' }
import Bookmark from '../models/Bookmark.js'

// Bookmark
//   .deleteMany({})
//   .then(() => Bookmark.create(data))
//   .then(() => console.log("Done!"))
//   .then(() => mongoose.disconnect())
//   .catch(error => console.log("Error", error))

try {
    await Bookmark.deleteMany({})
    await Bookmark.create(data)
    console.log('SUPERDONNNNENNe')
    mongoose.disconnect()
} catch (error) {
    console.error('Error!', error)
}
