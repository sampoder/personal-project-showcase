import { Button, Box, Container, Heading, Text } from 'theme-ui'

const App = () => {
  return (
    <Container p={0} m={0}>
      <Box
        sx={{
          background: `linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.74),
      rgba(25,25,60, 0.74)
    ),url(https://i.gifer.com/HseP.gif)`,
          backgroundSize: 'cover',
          color: 'white',
          fontSize: '1.3rem!important',
        }}
      >
        <Container py={4} variant="copy">
          <Heading sx={{ fontSize: '3rem' }}>
            This is what{' '}
            <Heading sx={{ fontSize: '7rem', marginTop: '-0.2em' }}>
              <Text sx={t => t.util.gxText('cyan', 'blue')}>we made.</Text>
            </Heading>
          </Heading>
          <Text
            sx={{
              fontSize: '1.3rem!important',
              fontWeight: '600',
              marginTop: '5px',
            }}
          >
            {' '}
            MYP Personal Project Exhibition 2021
          </Text>
        </Container>
      </Box>
      <Container py={4} variant="copy">
        Every year we've seen our older peers produce products
      </Container>
    </Container>
  )
}

export default App
