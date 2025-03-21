import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.less'

import { Home } from './home'
import { Markdown } from './markdown'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/md',
    element: <Markdown />,
  },
  {
    path: '*',
    element: <Home />,
  },
])

function App() {
  return (
    // <React.StrictMode>
      <RouterProvider
        router={router}
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        } as any}
      />
    // </React.StrictMode>
  )
}

const root = createRoot(window.document.getElementById('root')!)

root.render(<App />)
