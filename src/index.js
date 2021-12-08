import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
import App from './App'

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='test' element={<App />} />
    </Routes>
  </HashRouter>,
  document.getElementById('root')
)
