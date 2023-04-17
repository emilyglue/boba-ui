import { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import './App.css'
import ResponseBox from './components/ResponseBox'
import Title from './components/Title'
import { themeOptions } from './customTheme'
import Info from './components/Info'

const theme = createTheme(themeOptions)
function App () {
  const [bobaKey, setBobaKey] = useState<null | number>(null)
  const [shouldGetBoba, setShouldGetBoba] = useState<null | number>(null)
  const onClick = () => {
    const randomNum = Math.random()
    setBobaKey(randomNum)
    setShouldGetBoba(Math.round(randomNum))
  }

  return (
    <ThemeProvider theme={theme}>
      <Info />
      <Title onClick={onClick} shouldGetBoba={shouldGetBoba} />
      <ResponseBox
        bobaKey={bobaKey}
        onClick={onClick}
        shouldGetBoba={shouldGetBoba}
      />
    </ThemeProvider>
  )
}

export default App
