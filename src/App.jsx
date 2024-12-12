import "./App.css"

import Nav from "./components/Nav.jsx"
import Body from "./components/Body.jsx"
import Footer from './components/Footer.jsx'

import Home from "./components/Home.jsx"

import About from "./components/About.jsx";

import Emma from "./components/Emma.jsx"


import Gallery from "./components/gallery.jsx"

import Gold from "./components/Gold.jsx"


import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <Body />,
        },

        {
          path: "/about",
          element: <About />,
        },

        {
          path: "/emma",
          element: <Emma />,
        },

        {
          path: "/gallery",
          element: <Gallery />,
        },

        {
          path: "/gold",
          element: <Gold />,
        },
      ],
    },

    {},
  ]);
  

  return (
    <>
    <RouterProvider router={router} />
    </>
   
  )
}

export default App
