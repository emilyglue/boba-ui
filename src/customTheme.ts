import { ThemeOptions } from '@mui/material/styles'

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5'
    },
    secondary: {
      main: '#f50057'
    }
  },
  typography: {
    h1: {
      fontWeight: 900,
      textTransform: 'uppercase',
      '@media (max-width:600px)': {
        fontSize: '5rem'
      }
    },
    h2: {
      fontWeight: 900
    },
    h4: {
      textTransform: 'lowercase'
    }
  }
}
