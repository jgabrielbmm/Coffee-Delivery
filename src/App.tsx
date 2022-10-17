import { ThemeProvider } from 'styled-components'
import { GlobalStyled } from './styles/global'
import { Router } from './Router'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { ShoppingCartContextProvider } from './contexts/ShoppingCartContext'
import { AddressContextProvider } from './contexts/AddressContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ShoppingCartContextProvider>
          <AddressContextProvider>
            <Router />
          </AddressContextProvider>
        </ShoppingCartContextProvider>
      </BrowserRouter>
      <GlobalStyled />
    </ThemeProvider>
  )
}
