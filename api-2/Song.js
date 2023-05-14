const mongoose = require("mongoose")

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  artwork: {
    type: String,
  },
  url: {
    type: String,
  },
})

songSchema.set("toJSON", {
  transform: (_, obj) => {
    obj.id = obj._id
    delete obj._id
    delete obj.__v
  },
})

const Song = mongoose.model("Song", songSchema)
module.exports = Song
