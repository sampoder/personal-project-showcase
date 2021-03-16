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

import Link from 'next/link'

let avatarList = ({
  maker,
  name,
  emojis,
  query,
  override,
  yt,
  slug,
  desc = 'I built a very wonderful thing that many people love and really was amazing to build and I felt so so great when i showcased it',
}) => (
  <Link href={`/${slug}`}>
    <Box
      bg="rgba(14, 144, 219, 0.2)"
      sx={{
        '&:hover': {
          bg: 'rgba(14, 144, 219, 0.4)',
          transform: 'scale(1.02)',
          transition: '0.5s ease',
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
          background: `url(${
            override
              ? override
              : `https://i.ytimg.com/vi/${yt}/maxresdefault.jpg`
          })`,
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
  </Link>
)

export default avatarList
