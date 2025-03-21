import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.less'
import { Home } from './home'

const root = createRoot(window.document.getElementById('root')!)

function App() {
  return (
    <div>
      <Home />
    </div>
  )
}
root.render(<App />)
