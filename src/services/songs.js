const fetchSongs = async () => {
  const response = await fetch("/api/songs")
  const songs = response.json()
  return songs
}

const getSong = async (id) => {
  const response = await fetch(`/api/songs/${id}`)
  const song = response.json()
  return song
}

const addSong = async (data) => {
  const response = await fetch(`/api/songs`, {
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
  const response = await fetch(`/api/songs/${id}`, {
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
  const response = await fetch(`/api/songs/${id}`, {
    method: "DELETE",
  })
  const song = response.json()
  return song
}

const songsService = {
  fetchSongs,
  getSong,
  addSong,
  deleteSong,
  updateSong,
}

export default songsService
