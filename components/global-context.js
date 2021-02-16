import { Button, Box, Container, Image, Grid, Heading, Text } from 'theme-ui'
import Emoji from './emoji'
import Link from 'next/link'

let globalContext = ({ name, emoji, slug }) => (
  <Link href={slug ? `context/${slug}` : ''}>
    <Box
      sx={{
        bg: '#005a85',
        borderRadius: '8px',
        padding: '16px',
        cursor: slug ? 'pointer' : 'default',

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
  </Link>
)

export default globalContext
