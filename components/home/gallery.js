import { Box, Image, Grid, Close } from 'theme-ui'
import React, { useState } from 'react'
export default function gallery() {
  const [highlightedImage, setHighlightedImage] = useState('')
  return (
    <Box p={['2px', '16px', '16px']}>
      <Box
        sx={{
          position: 'absolute',
          zIndex: '999',
          paddingLeft: '15px',
          marginTop: '-12px',
          fontSize: '3em',
        }}
      >
        <Close
          sx={{
            background: 'var(--theme-ui-colors-background)',
            cursor: 'pointer',
            '&:hover': {
              transform: highlightedImage == '' ? 'scale(1.05)' : 'scale(1)',
            },
            display: highlightedImage != '' ? 'default' : 'none',
          }}
          onClick={() => setHighlightedImage('')}
        />
      </Box>
      <Grid
        gap={2}
        columns={highlightedImage == '' ? 2 : 1}
        sx={{ gridAutoRows: '1fr', transition: 'all 1.2s ease-in-out' }}
        gap={24}
      >
        <Image
          src="https://cloud-k8e1qgdog-hack-club-bot.vercel.app/0img_20210303_121530.jpg"
          width="100%"
          onClick={() => setHighlightedImage(1)}
          sx={{
            borderRadius: '8px',
            transition:
              highlightedImage == ''
                ? 'all .2s ease-in-out'
                : 'all 0s ease-in-out',
            display:
              highlightedImage == '' || highlightedImage == 1
                ? 'block'
                : 'none',
            '&:hover': {
              transform: highlightedImage == '' ? 'scale(1.05)' : 'scale(1)',
            },
            height: highlightedImage == '' ? '150px' : null,
            mb: highlightedImage == '' ? '0px' : '8px',
            maxHeight: '324px',
            objectFit: 'cover',
          }}
        />
        <Image
          src="https://cloud-5as5oy7wo-hack-club-bot.vercel.app/0gwa00115.jpg"
          width="100%"
          onClick={() => setHighlightedImage(2)}
          sx={{
            borderRadius: '8px',
            transition:
              highlightedImage == ''
                ? 'all .2s ease-in-out'
                : 'all 0s ease-in-out',
            display:
              highlightedImage == '' || highlightedImage == 2
                ? 'block'
                : 'none',
            '&:hover': {
              transform: highlightedImage == '' ? 'scale(1.05)' : 'scale(1)',
            },
            height: highlightedImage == '' ? '150px' : null,
            mb: highlightedImage == '' ? '0px' : '8px',
            maxHeight: '324px',
            objectFit: 'cover',
          }}
        />
        <Image
          src="https://cloud-13rfbxxig-hack-club-bot.vercel.app/0gwa00041.jpg"
          width="100%"
          onClick={() => setHighlightedImage(3)}
          sx={{
            borderRadius: '8px',
            transition:
              highlightedImage == ''
                ? 'all .2s ease-in-out'
                : 'all 0s ease-in-out',
            display:
              highlightedImage == '' || highlightedImage == 3
                ? 'block'
                : 'none',
            '&:hover': {
              transform: highlightedImage == '' ? 'scale(1.05)' : 'scale(1)',
            },
            height: highlightedImage == '' ? '150px' : null,
            mb: highlightedImage == '' ? '0px' : '8px',
            maxHeight: '324px',
            objectFit: 'cover',
          }}
        />
        <Image
          src="https://cloud-iehty0x6o-hack-club-bot.vercel.app/0gwa00107.jpg"
          width="100%"
          onClick={() => setHighlightedImage(4)}
          sx={{
            borderRadius: '8px',
            transition:
              highlightedImage == ''
                ? 'all .2s ease-in-out'
                : 'all 0s ease-in-out',
            display:
              highlightedImage == '' || highlightedImage == 4
                ? 'block'
                : 'none',
            '&:hover': {
              transform: highlightedImage == '' ? 'scale(1.05)' : 'scale(1)',
            },
            height: highlightedImage == '' ? '150px' : null,
            maxHeight: '324px',
            mb: highlightedImage == '' ? '0px' : '8px',
            objectFit: 'cover',
          }}
        />
      </Grid>
    </Box>
  )
}
