require("dotenv").config()
require("express-async-errors")
const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const multer = require("multer")
const Song = require("./Song")
const cors = require("cors")
const path = require("path")

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "static")
  },
  filename(req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9)
    const { ext } = path.parse(file.originalname)
    cb(null, file.fieldname + "-" + uniqueSuffix + ext)
  },
})

const upload = multer({ storage })

const app = express()
app.use(express.static("public"))
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

app.get("/songs", async (req, res) => {
  const songs = await Song.find()
  res.json(songs)
})

app.get("/songs/:id", async (req, res) => {
  const song = await Song.findById(req.params.id)
  if (song) res.json(song)
  else res.status(404).end()
})

app.post("/songs", async (req, res) => {
  const song = new Song(req.body)
  const newSong = await song.save()
  res.status(201).json(newSong)
})

app.post(
  "/songs/files",
  upload.fields([
    { name: "artwork", maxCount: 1 },
    { name: "song", maxCount: 1 },
  ]),
  (req, res) => {
    res.status(201).json({
      artwork: req.files.artwork[0].path,
      song: req.files.song[0].path,
    })
  }
)

app.put("/songs/:id", async (req, res) => {
  const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  if (song) res.json(song)
  else res.status(404).end()
})

app.delete("/songs/:id", async (req, res) => {
  await Song.findByIdAndDelete(req.params.id)
  res.status(204).end()
})

app.post("/upload", upload.single("file"), (req, res) => {
  res.json
})

app.get("/status", (req, res) => {
  res.json({ status: "OK" })
})

app.use((req, res) => {
  res
    .status(404)
    .json({ error: "the route you are looking for does not exist" })
})

app.use((error, req, res) => {
  switch (error.name) {
    case "ValidationError":
      res.status(400).json({ error: error.message })
      break
    case "CastError":
      res.status(400).json({ error: "malformed id" })
      break
    default:
      console.log(error)
      res.status(500).json({ error: "something went wrong. It is not you." })
  }
})

mongoose.connect(process.env.DB).then(() => {
  console.log("Connected to DB")
  const PORT = process.env.PORT || 8080
  app.listen(PORT, () => console.log("🚀 Server is running on Port", PORT))
})
