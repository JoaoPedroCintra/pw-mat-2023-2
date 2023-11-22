import React from 'react'
<<<<<<< HEAD
import HeaderBar from './ui/HeaderBar'
import './App.css'
import {ThemeProvider} from '@mui/material/styles'
import theme from './utils/theme'
import Box from '@mui/material/Box'

function App() {
  

  return (
    <>
    <ThemeProvider theme={theme}>
      <Box sx={{
        width: '100vw', // toda a largura da janela
        minHeight: '100vh', // no mínimo, toda a altura da janela
        backgroundColor:'background.default' // cinza escuro
      }}>
        <HeaderBar/>
      </Box>
    </ThemeProvider>
=======
import './App.css'
import HeaderBar from './ui/HeaderBar'
import { ThemeProvider } from '@mui/material/styles'
import theme from './utils/theme'
import Box from '@mui/material/Box'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'

import Homepage from './pages/Homepage'
import CarList from './pages/CarList'
import CustomerList from './pages/CustomerList'

function App() {

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline /> { /* Reseta o CSS padrão e o adapta para o tema */ }
          <Box sx={{
            width: '100vw',     // toda a largura da janela
            minHeight: '100vh',  // no mínimo, toda a altura da janela
            // cinza escuro, no modo dark
            backgroundColor: 'background.default' 
          }}>
            <HeaderBar />
            <Box sx={{ m: '25px' /* Margem de 25px de todos os lados */ }}>
              <Routes>
                <Route path="/" element={ <Homepage /> } />
                <Route path="/cars" element={ <CarList /> } />
                <Route path="/customers" element={ <CustomerList /> } />
              </Routes>
            </Box>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
>>>>>>> d9c0c456e6f2adf388e9867d0429adb4b6f3f7c2
    </>
  )
}

export default App
