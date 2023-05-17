# Wimbo

**Wimbo** is a web application that lets users to perform CRUD operation on songs.

## Live

you can find the deployed app [here](https://wimbo.fly.dev)

## Getting Started

Before you start to work on this project make sure if you have latest version of Node.js and Yarn and follow the following procedures.
```bash
yarn && cd api; yarn
echo "<your mongodb uri>" > .env
yarn start # start api
cd .. && yarn dev # on another terminal to start vite
```

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
