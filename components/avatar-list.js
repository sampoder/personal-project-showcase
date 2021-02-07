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

let avatarList = ({ maker, name, emojis, query }) => (
  <Box
    bg="rgba(14, 144, 219, 0.2)"
    pt="8.1px"
    pb="10px"
    pr="16px"
    pl="16px"
    m="8px"
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
    <Text sx={{ verticalAlign: 'middle', fontSize: '16px' }}>{emojis}</Text>
    <Text
      sx={{
        verticalAlign: 'middle',
        paddingLeft: '4px',
        fontSize: ['16px', '14px', '14px'],
      }}
    >
      {name} (by {maker})
    </Text>
    <style>{`::placeholder {
      font-size: 1.1em;
    }`}</style>
  </Box>
)

export default avatarList
