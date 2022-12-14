
import { useState, } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import ApplicationShell from "./constructure/app_shell"
import { Routes, Route, BrowserRouter } from 'react-router-dom'

export default function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <BrowserRouter>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <Routes>
            <Route path='/*' element={<ApplicationShell />} />
          </Routes>
        </MantineProvider>
      </ColorSchemeProvider>
    </BrowserRouter >
  )
}