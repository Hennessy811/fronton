import React from "react"

import { Box, Button, Typography } from "@mui/material"
import Head from "next/head"
import Image from "next/image"

import AppBar from "@shared/components/AppBar"

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Fronon</title>
      </Head>
      <AppBar />

      <Box position="relative" height="95vh">
        <Image
          src="/img/hero1.svg"
          layout="fill"
          objectFit="cover"
          alt="hero image"
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          color="white"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          px={4}
        >
          <Typography variant="h2" textAlign="center" maxWidth="md">
            MVP для стартапа под ключ
          </Typography>
          <Typography variant="h4" textAlign="center" maxWidth="md">
            Запускаем проекты, которые 🚀 -{">"} 💰
          </Typography>

          <Box mt={4} display="flex">
            <Button variant="contained" color="primary" size="large">
              Request a demo
            </Button>

            <Box ml={2}>
              <Button variant="outlined" color="secondary" size="large">
                Portfolio
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box position="relative" height="100vh">
        <Image
          src="/img/hero2.svg"
          layout="fill"
          objectFit="cover"
          alt="hero image"
        />

        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          color="white"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          px={4}
        >
          <Typography variant="h3" textAlign="center" maxWidth="md">
            Все наши беки делают Auth ☝️
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
