import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'
import './App.css'
import Outcome from './Layers/Outcome';
function App() {
  const router = createBrowserRouter([{
    path: '/', element: <Outcome></Outcome>,
    children: [
      { path: '/', element: <Home></Home> },
      { path: '/home', element: <Home></Home> },
      { path: '/about', element: <About></About> },
      { path: '/resume', element: <Resume></Resume> },
      { path: '/portfolio', element: <Portfolio></Portfolio> },
      { path: '/contact', element: <Contact></Contact> }
    ]

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
