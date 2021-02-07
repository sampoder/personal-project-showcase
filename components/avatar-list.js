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

let avatarList = ({ maker, name, emojis }) => (
  <Box
    bg="rgba(14, 144, 219, 0.2)"
    pt="8.1px"
    pb="10px"
    pr="16px"
    pl="16px"
    m="8px"
    sx={{ borderRadius: '8px', display: 'inline-block' }}
  >
    <Text
      sx={{ verticalAlign: 'middle', fontSize: '16px' }}
    >
      {emojis}
    </Text>
    <Text
      sx={{ verticalAlign: 'middle', paddingLeft: '4px', fontSize: '14px' }}
    >
      {name} (by {maker})
    </Text>
  </Box>
)

export default avatarList
