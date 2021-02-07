import {
  Avatar,
  Button,
  Box,
  Container,
  Image,
  Grid,
  Heading,
  Input,
  Text,
  Flex,
} from 'theme-ui'
import Intro from '../components/intro.mdx'
import GlobalContext from '../components/global-context'
import AvatarComponent from '../components/avatar-list'

const App = () => {
  return (
    <Box p={0} sx={{ width: '100%' }} m={0}>
      <Box
        sx={{
          background: `linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.74),
      rgba(0, 0, 0, 0.64)
    ),url(https://i.gifer.com/HseP.gif)`,
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
      <Container py={2} pb={4}>
        <Grid gap={2} columns={[1, 2, 2]}>
          <Box>
            <Intro />
          </Box>
          <Box p={['2px', '16px', '16px']}>
            <Grid
              gap={2}
              columns={[2, 2, 2]}
              sx={{ gridAutoRows: '1fr' }}
              gap={24}
            >
              <Image
                src="/1.jpg"
                width="100%"
                style={{ borderRadius: '8px' }}
                height="150px"
              />
              <Image
                src="/1.jpg"
                width="100%"
                style={{ borderRadius: '8px' }}
                height="150px"
              />
              <Image
                src="/1.jpg"
                width="100%"
                style={{ borderRadius: '8px' }}
                height="150px"
              />
              <Image
                src="/1.jpg"
                width="100%"
                style={{ borderRadius: '8px' }}
                height="150px"
              />
            </Grid>
          </Box>
        </Grid>
      </Container>
      <Box bg="blue" color="white">
        <Container py={4}>
          <Heading>Projects by Global Context</Heading>
          <Grid columns={[2, 2, 3]} pt={3} gap="12px">
            <GlobalContext emoji="👨‍👩‍👧‍👦" name="Identities and relationships" />
            <GlobalContext emoji="🕰" name="Orientation in space and time" />
            <GlobalContext emoji="💃" name="Personal and cultural expression" />
            <GlobalContext
              emoji="🔬"
              name="Scientific and technical innovation"
            />
            <GlobalContext emoji="🌏" name="Globalization and sustainability" />
            <GlobalContext emoji="👨‍👩‍👧‍👦" name="Fairness and development" />
          </Grid>
        </Container>
      </Box>
      <Box>
        <Container py={4}>
          <Grid columns={2}>
            <Heading sx={{ paddingTop: '8px' }}>
              Explore All The Projects
            </Heading>
            <Input placeholder="Search 🔎" sx={{ border: '1px dashed lightgrey', textAlign: 'right' }} />
          </Grid>
          <Box ml="-10px" mt="8px">
            <AvatarComponent
              maker="Sam Poder"
              name="Climatator"
              emojis="🌏🔥🥽"
            />
            <AvatarComponent
              maker="Arsh Shrivastava"
              name="Kid-friendly Stock Simulator"
              emojis="💰📈"
            />
            <AvatarComponent
              maker="Neil Ghosh"
              name="Dementia Smart Mirror"
              emojis="🧠🪞👵"
            />
            <AvatarComponent
              maker="Neer Vikas Verma"
              name="Robot Hand"
              emojis="🦾🤖"
            />
            <AvatarComponent
              maker="Sam Poder"
              name="Climatator: Simulating Climate Change"
              emojis="🌏🔥🥽"
            />
            <AvatarComponent
              maker="Arsh Shrivastava"
              name="Stock Simulator"
              emojis="💰📈"
            />
            <AvatarComponent
              maker="Neil Ghosh"
              name="Dementia Smart Mirror"
              emojis="🧠🪞👵"
            />
            <AvatarComponent
              maker="Neer Vikas Verma"
              name="Robot Hand"
              emojis="🦾🤖"
            />
            <AvatarComponent
              maker="Sam Poder"
              name="Climatator: A Climate Change Simulator"
              emojis="🌏🔥🥽"
            />
            <AvatarComponent
              maker="Arsh Shrivastava"
              name="Stock Simulator"
              emojis="💰📈"
            />
            <AvatarComponent
              maker="Neil Ghosh"
              name="Dementia Smart Mirror"
              emojis="🧠🪞👵"
            />
            <AvatarComponent
              maker="Neer Vikas Verma"
              name="Robot Hand"
              emojis="🦾🤖"
            />
            <AvatarComponent
              maker="Sam Poder"
              name="Climatator: A Climate Change Simulator"
              emojis="🌏🔥🥽"
            />
            <AvatarComponent
              maker="Arsh Shrivastava"
              name="Stock Simulator"
              emojis="💰📈"
            />
            <AvatarComponent
              maker="Neil Ghosh"
              name="Dementia Smart Mirror"
              emojis="🧠🪞👵"
            />
            <AvatarComponent
              maker="Neer Vikas Verma"
              name="Robot Hand"
              emojis="🦾🤖"
            />
            <AvatarComponent
              maker="Sam Poder"
              name="Climatator: A Climate Change Simulator"
              emojis="🌏🔥🥽"
            />
            <AvatarComponent
              maker="Arsh Shrivastava"
              name="Stock Simulator"
              emojis="💰📈"
            />
            <AvatarComponent
              maker="Neil Ghosh"
              name="Dementia Smart Mirror"
              emojis="🧠🪞👵"
            />
            <AvatarComponent
              maker="Neer Vikas Verma"
              name="Robot Hand"
              emojis="🦾🤖"
            />
            <AvatarComponent
              maker="Sam Poder"
              name="Climatator: A Climate Change Simulator"
              emojis="🌏🔥🥽"
            />
            <AvatarComponent
              maker="Arsh Shrivastava"
              name="Stock Simulator"
              emojis="💰📈"
            />
            <AvatarComponent
              maker="Neil Ghosh"
              name="Dementia Smart Mirror"
              emojis="🧠🪞👵"
            />
            <AvatarComponent
              maker="Neer Vikas Verma"
              name="Robot Hand"
              emojis="🦾🤖"
            />
            <AvatarComponent
              maker="Sam Poder"
              name="Climatator: A Climate Change Simulator"
              emojis="🌏🔥🥽"
            />
            <AvatarComponent
              maker="Arsh Shrivastava"
              name="Stock Simulator"
              emojis="💰📈"
            />
            <AvatarComponent
              maker="Neil Ghosh"
              name="Dementia Smart Mirror"
              emojis="🧠🪞👵"
            />
            <AvatarComponent
              maker="Neer Vikas Verma"
              name="Robot Hand"
              emojis="🦾🤖"
            />
            <AvatarComponent
              maker="Sam Poder"
              name="Climatator: A Climate Change Simulator"
              emojis="🌏🔥🥽"
            />
            <AvatarComponent
              maker="Arsh Shrivastava"
              name="Stock Simulator"
              emojis="💰📈"
            />
            <AvatarComponent
              maker="Neil Ghosh"
              name="Dementia Smart Mirror"
              emojis="🧠🪞👵"
            />
            <AvatarComponent
              maker="Neer Vikas Verma"
              name="Robot Hand"
              emojis="🦾🤖"
            />
            <AvatarComponent
              maker="Sam Poder"
              name="Climatator: A Climate Change Simulator"
              emojis="🌏🔥🥽"
            />
            <AvatarComponent
              maker="Arsh Shrivastava"
              name="Stock Simulator"
              emojis="💰📈"
            />
            <AvatarComponent
              maker="Neil Ghosh"
              name="Dementia Smart Mirror"
              emojis="🧠🪞👵"
            />
            <AvatarComponent
              maker="Neer Vikas Verma"
              name="Robot Hand"
              emojis="🦾🤖"
            />
            <AvatarComponent
              maker="Sam Poder"
              name="Climatator: A Climate Change Simulator"
              emojis="🌏🔥🥽"
            />
            <AvatarComponent
              maker="Arsh Shrivastava"
              name="Stock Simulator"
              emojis="💰📈"
            />
            <AvatarComponent
              maker="Neil Ghosh"
              name="Dementia Smart Mirror"
              emojis="🧠🪞👵"
            />
            <AvatarComponent
              maker="Neer Vikas Verma"
              name="Robot Hand"
              emojis="🦾🤖"
            />
            <AvatarComponent
              maker="Sam Poder"
              name="Climatator: A Climate Change Simulator"
              emojis="🌏🔥🥽"
            />
            <AvatarComponent
              maker="Arsh Shrivastava"
              name="Stock Simulator"
              emojis="💰📈"
            />
            <AvatarComponent
              maker="Neil Ghosh"
              name="Dementia Smart Mirror"
              emojis="🧠🪞👵"
            />
            <AvatarComponent
              maker="Neer Vikas Verma"
              name="Robot Hand"
              emojis="🦾🤖"
            />
            <AvatarComponent
              maker="Sam Poder"
              name="Climatator: A Climate Change Simulator"
              emojis="🌏🔥🥽"
            />
            <AvatarComponent
              maker="Arsh Shrivastava"
              name="Stock Simulator"
              emojis="💰📈"
            />
            <AvatarComponent
              maker="Neil Ghosh"
              name="Dementia Smart Mirror"
              emojis="🧠🪞👵"
            />
            <AvatarComponent
              maker="Neer Vikas Verma"
              name="Robot Hand"
              emojis="🦾🤖"
            />
          </Box>
        </Container>
      </Box>
      <Box bg="blue" color="white">
        <Container py={4}>
          <Heading sx={{ fontSize: '18px' }}>Personal Project</Heading>
        </Container>
      </Box>
    </Box>
  )
}

export default App
