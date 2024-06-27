import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './assets/styles/global.js'
import theme from './assets/styles/theme.js'

import Login from './assets/pages/Login.jsx'
import Register from './assets/pages/Register.jsx'
import Home from './assets/pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle /> 
      
      <RouterProvider router={router} />

    </ThemeProvider>
  </React.StrictMode>,
)
