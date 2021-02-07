import { Button, Box, Container, Image, Grid, Heading, Text } from 'theme-ui'

let globalContext = ({ name, emoji }) => (
  <Box sx={{ borderRadius: '8px', padding: '16px' }} bg="#005a85">
    <Text>
      {emoji}
      <span style={{ marginLeft: '8px' }}>
        <b>{name}</b>
      </span>
    </Text>

  </Box>
)

export default globalContext
