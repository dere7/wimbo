const fetchSongs = async () => {
  const response = await fetch("/songs")
  const songs = response.json()
  return songs
}

const getSong = async (id) => {
  const response = await fetch(`/songs/${id}`)
  const song = response.json()
  return song
}

const addSong = async (data) => {
  const response = await fetch(`/songs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  const song = response.json()
  return song
}

const updateSong = async (id, data) => {
  const response = await fetch(`/songs/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  const song = response.json()
  return song
}

const deleteSong = async (id) => {
  await fetch(`/songs/${id}`, {
    method: "DELETE",
  })
}

const songsService = {
  fetchSongs,
  getSong,
  addSong,
  deleteSong,
  updateSong,
}

export default songsService
