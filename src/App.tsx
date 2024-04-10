import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import {Tarify} from './pages/Tarify/Tarify';

import './App.module.sass'

function App() {

  return (
    <>
      <div className='App'>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Tarify />} />
          </Routes>
        </div>
      </Router>
      </div>
    </>
  )
}

export default App
