import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/home/home.jsx'
import Support from './components/support/support.jsx'
import Book from './components/book/book.jsx'
import Login from './components/login/login.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Signup from './components/signup/signup.jsx'
import ShowFlights from './components/ShowFlights/ShowFlights.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: (
          <>
            <Home />
            <Support />
          </>
        )
      },
      {
        path: "/book",
        element: <Book />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/showFlights",
        element: <ShowFlights />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
