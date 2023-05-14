# Wimbo

**Wimbo** is a web application that lets users to perform CRUD operation on songs.

## Live

you can find the deployed app [here](https://wimbo.fly.dev)

## API

- `GET /songs`
  returns all songs
- `GET /songs/:id`
  returns specific song
- `POST /songs`
  add new song with body(`{title: "...", artist: "...", artwork: "...", url: "..."}`)
- `PUT /songs/:id`
  updates existing song
- `DELETE /songs/:id`
  deletes existing song
