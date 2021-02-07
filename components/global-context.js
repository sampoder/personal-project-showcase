import { Button, Box, Container, Image, Grid, Heading, Text } from 'theme-ui'
import Emoji from './emoji'

let globalContext = ({ name, emoji }) => (
  <Box
    sx={{
      bg: '#005a85',
      borderRadius: '8px',
      padding: '16px',
      cursor: 'pointer',
      '&:hover': {
        bg: 'rgba(0, 90, 133, 0.8)',
      },
    }}
    className="global-context"
  >
    <Text>
      <Emoji emoji={emoji} />
      <span style={{ marginLeft: '8px' }}>
        <b>{name}</b>
      </span>
    </Text>
  </Box>
)

export default globalContext
