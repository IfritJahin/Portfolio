import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'
import './App.css'
import useWindowSize from './useWindowSize';
import Outcome from './Layers/Outcome';
import Footer from './components/Footer';
function App() {
  const router = createBrowserRouter([{
    path: '/', element: <Outcome></Outcome>,
    children: [
      { path: '/', element: <Home></Home> },
      { path: '/Portfolio/', element: <Home></Home> },
      { path: '/about', element: <About></About> },
      { path: '/resume', element: <Resume></Resume> },
      { path: '/portfolio', element: <Portfolio></Portfolio> },
      { path: '/contact', element: <Contact></Contact> },
    ],
  },

  { path: '/*', element: <div>This Route Not Found</div> }
  ])
  return (

    <div>
      <RouterProvider router={router}>

      </RouterProvider>


    </div>

  )
}

export default App
