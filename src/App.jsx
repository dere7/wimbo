import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./screens/Home"
import AddSong from "./screens/AddSong"
import Root from "./screens/Root"
import ErrorPage from "./screens/ErrorPage"
import { Global, css } from "@emotion/react"
import UpdateSong, { loader as updateSongLoader } from "./screens/UpdateSong"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/songs/add",
        element: <AddSong />,
      },
      {
        path: "/songs/:id/edit",
        element: <UpdateSong />,
        loader: updateSongLoader,
      },
    ],
  },
])

function App() {
  return (
    <>
      <Global
        styles={css`
          body {
            background-color: #eee;
            margin: 0;
            padding: 0;
            font-family: system-ui, sans-serif;
          }
        `}
      />
      <RouterProvider router={router} />
    </>
  )
}

export default App
