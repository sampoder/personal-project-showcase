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
        height: '200px',
        pt: '16px',
        borderRadius: '8px',
        background:
          'url(https://images.unsplash.com/photo-1552415274-73ad7198cb93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2091&q=80)',
        backgroundSize: 'cover',
      }}
    >
      <Box sx={{ display: 'flex', height: '25%', alignItems: 'flex-start' }}>
        <Box
          ml="16px"
          p="8px"
          sx={{
            bg: 'rgba(0, 0, 0, 0.50)',
            color: 'black',
            width: 'max-content',
            verticalAlign: 'middle',
            borderRadius: '8px',
            fontSize: '16px',
            lineHeight: '1.6',
            p: '8px 12px',
            width: 'max-content',
          }}
        >
          <Emoji emoji={emojis} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', height: '75%', alignItems: 'flex-end' }}>
        <Box sx={{ pb: '8px', width: 'calc(100%)' }}>
          <Box
            ml="16px"
            p="8px"
            sx={{
              bg: 'rgba(0, 0, 0, 0.50)',
              color: 'white',
              width: 'max-content',
              verticalAlign: 'middle',
              borderRadius: '8px',
              fontSize: '16px',
              lineHeight: '1.6',
              p: '8px 12px',
              width: 'calc(100% - 16px - 16px)',
            }}
          >
            <Text sx={{ fontWeight: '700' }}>{name}</Text> <br />
            <Text sx={{ fontWeight: '400' }}>{maker}</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
)

export default avatarList
