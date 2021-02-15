import { Box, Grid, Container, Heading, Text } from 'theme-ui'

let footer = () => (
<Box bg="blue" color="white">
  <Container py={4}>
    <Grid columns={2}>
      <Heading sx={{ fontSize: '18px' }}>
        MYP Personal Project Exhibition 2021
      </Heading>
      <Heading
        sx={{ fontSize: '16px', fontWeight: '400', textAlign: 'right' }}
      >
        Website by{' '}
        <a
          href="https://github.com/sampoder"
          style={{
            color: 'white',
            fontWeight: '600',
            textDecoration: 'none',
          }}
        >
          @sampoder
        </a>
        , open sourced{' '}
        <a
          href="https://github.com/sampoder/personal-project-showcase"
          style={{
            color: 'white',
            fontWeight: '600',
            textDecoration: 'none',
          }}
        >
          here
        </a>
        .
      </Heading>
    </Grid>
  </Container>
</Box>)

export default footer