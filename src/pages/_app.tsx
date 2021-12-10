import React from "react"

import createCache from "@emotion/cache"
import { CacheProvider, EmotionCache } from "@emotion/react"
import { createTheme, PaletteMode, ThemeProvider } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"
import { AppProps } from "next/app"

import { ColorModeContext } from "@shared/mui/colorMode"
import { themeOptions } from "@shared/mui/theme"

const createEmotionCache = () => createCache({ key: "css" })

const clientSideEmotionCache = createEmotionCache()

interface Props extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp(props: Props): JSX.Element {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  const [mode, setMode] = React.useState<PaletteMode>("light")
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
      },
    }),
    []
  )

  const theme = React.useMemo(
    () =>
      createTheme({
        ...themeOptions,
        palette: {
          ...themeOptions.palette,
          mode,
        },
      }),
    [mode]
  )

  return (
    <CacheProvider value={emotionCache}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  )
}

export default MyApp
