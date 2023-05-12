import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { Provider } from "react-redux"
import store from "./store"
import { preset } from "@rebass/preset"
import { ThemeProvider } from "emotion-theming"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={preset}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
