import { Box, Container, Heading, Text } from 'theme-ui'

let header = () => (
  <Box
    sx={{
      background: `linear-gradient(
                  0deg,
                  rgba(0, 0, 0, 0.74),
                  rgba(0, 0, 0, 0.64)
                  ),url(https://cloud-46pddfenw-hack-club-bot.vercel.app/0ezgif-2-c21a68f0957c.gif)`,
      backgroundSize: 'cover',
      color: 'white',
      fontSize: '1.3rem!important',
      width: '100%',
    }}
  >
    <Container py={4}>
      <Heading sx={{ fontSize: ['1.8rem', '3rem', '3rem'] }}>
        This is what{' '}
        <Heading
          sx={{ fontSize: ['3.7rem', '7rem', '7rem'], marginTop: '-0.2em' }}
        >
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
)

export default header
