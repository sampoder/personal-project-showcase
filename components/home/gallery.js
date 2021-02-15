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
          src="/1.jpg"
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
          src="https://images.unsplash.com/photo-1440423226932-e7096a66f1c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
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
          src="https://images.unsplash.com/photo-1559727801-763c7c950494?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
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
          src="https://images.unsplash.com/photo-1584612924768-54be89e74165?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
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
