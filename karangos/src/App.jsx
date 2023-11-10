import React from 'react'
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
    </>
  )
}

export default App
