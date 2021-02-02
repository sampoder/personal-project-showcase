import { Button, Box, Container, Heading, Text } from 'theme-ui'

const App = () => {
  return (
    <Box
      sx={{
        background: `linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.74),
      rgba(100, 75, 37, 0.74)
    ),url(https://i.gifer.com/HseP.gif)`,
        backgroundSize: 'cover',
        color: 'white',
      }}
    >
      <Container as="main" py={4} variant="copy">
        <Heading sx={{ fontSize: '3rem' }}>
          This is what{' '}
          <Heading sx={{ fontSize: '7rem', marginTop: '-0.2em' }}>
            <Text sx={t => t.util.gxText('cyan', 'blue')}>we made.</Text>
          </Heading>
        </Heading>
        <Heading sx={{ fontSize: '1.3rem', marginTop: '5px' }}>
          {' '}
          MYP Personal Project Exhibition 2021
        </Heading>
      </Container>
    </Box>
  )
}

export default App
