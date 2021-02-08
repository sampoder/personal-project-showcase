import {
  Avatar,
  Button,
  Box,
  Container,
  Image,
  Grid,
  Heading,
  Text,
} from 'theme-ui'
import Emoji from './emoji'

let avatarList = ({
  maker,
  name,
  emojis,
  query,
  desc = 'I built a very wonderful thing that many people love and really was amazing to build and I felt so so great when i showcased it',
}) => (
  <Box
    bg="rgba(14, 144, 219, 0.2)"
    sx={{
      '&:hover': {
        bg: 'rgba(14, 144, 219, 0.4)',
      },
      cursor: 'pointer',
      borderRadius: '8px',
      width: ['calc(100% - 8px)', 'auto', 'auto'],
      display:
        query != ''
          ? name.toUpperCase().includes(query.toUpperCase())
            ? 'inline-block'
            : maker.toUpperCase().includes(query.toUpperCase())
            ? 'inline-block'
            : 'none'
          : 'inline-block',
    }}
  >
    <Box
      sx={{
        height: '175px',
        pt: '16px',
        borderRadius: '8px',
        background:
          'url(https://images.unsplash.com/photo-1552415274-73ad7198cb93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2091&q=80)',
        backgroundSize: 'cover',
      }}
    >
      <Box
        ml="16px"
        p="8px"
        sx={{
          bg: 'white',
          width: 'max-content',
          verticalAlign: 'middle',
          borderRadius: '8px',
          fontSize: '16px',
        }}
      >
        <Emoji emoji={emojis} />
      </Box>
    </Box>

    <Box pt="4px" pb="4px" pr="8px" pl="8px" m="8px">
      <Text
        sx={{
          verticalAlign: 'middle',
          fontSize: ['16px', '14px', '14px'],
        }}
      >
        <Text sx={{ fontWeight: '700' }}>{name}</Text>{' '}
        <Text sx={{ fontWeight: '500' }}>(by {maker})</Text>
        <Text sx={{ paddingTop: '4px' }} as="p">
          {desc.slice(0, 100)}
          {desc.length > 100 ? '...' : ''}
        </Text>
      </Text>
    </Box>
  </Box>
)

export default avatarList
