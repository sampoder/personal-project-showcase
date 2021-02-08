import {
  Avatar,
  Button,
  Box,
  Container,
  Image,
  Grid,
  IconButton,
  Heading,
  Input,
  Text,
  Close,
  Flex,
} from 'theme-ui'
import GlobalContext from '../../components/global-context'
import Project from '../../components/large-list'
import React, { useState } from 'react'
import Meta from '../../components/meta'
import Link from 'next/link'

function App() {
  const [query, setQuery] = useState('')
  const [highlightedImage, setHighlightedImage] = useState('')
  return (
    <Box p={0} sx={{ width: '100%' }} m={0}>
      <Meta
        title="Identities and Relationships Projects"
        name="MYP Personal Project Exhibition 2021"
      />
      <Box bg="blue" color="white">
        <Container py={3}>
          <Grid columns={[1, 2, 2]} gap="12px">
            <Box>
              <GlobalContext
                style={{ width: 'auto' }}
                emoji="👨‍👩‍👧‍👦"
                name="Identities and relationships"
              />
            </Box>
            <Link href="/">
              <Heading
                sx={{ pt: '16px', textAlign: 'right', cursor: 'pointer' }}
              >
                MYP Personal Project Exhibition 2021
              </Heading>
            </Link>
          </Grid>
        </Container>
      </Box>
      <Box sx={{minHeight: '100vh'}}>
        <Container py={4}>
          <Grid columns={[1, 2, 2]}>
            <Box>
              <Text>
                The global context of <i>identities and relationships</i>{' '}
                explores identity; beliefs and values; personal, physical,
                mental, social and spiritual health; human relationships
                including families, friends, communities and cultures; what it
                means to be human.
                <br /> <br />
                The following projects explore some, if not all of these
                concepts.
              </Text>
            </Box>
          </Grid>
          <Input
            onChange={e => setQuery(e.target.value)}
            placeholder={['Search the projects']}
            sx={{
              border: '1px dashed lightgrey',
              textAlign: ['left', 'left', 'left'],
              maxWidth: '600px',
              '::placeholder': {
                color: 'muted',
              },
              my: 3
            }}
          />
          <Grid columns={3}>
          
            <Project
              maker="Sam Poder"
              name="Climatator"
              emojis="🌏🔥🥽"
              query={query}
            />
            <Project
              maker="Arsh Shrivastava"
              name="Kid-friendly Stock Simulator"
              emojis="💰📈"
              query={query}
            />
            <Project
              maker="Neil Ghosh"
              name="Dementia Smart Mirror"
              emojis="🧠🪞👵"
              query={query}
            />
            <Project
              maker="Neer Vikas Verma"
              name="Robot Hand"
              emojis="🦾🤖"
              query={query}
            />
            <Project
              maker="Sam Poder"
              name="Climatator"
              emojis="🌏🔥🥽"
              query={query}
            />
            <Project
              maker="Arsh Shrivastava"
              name="Kid-friendly Stock Simulator"
              emojis="💰📈"
              query={query}
            />
            <Project
              maker="Neil Ghosh"
              name="Dementia Smart Mirror"
              emojis="🧠🪞👵"
              query={query}
            />
            <Project
              maker="Neer Vikas Verma"
              name="Robot Hand"
              emojis="🦾🤖"
              query={query}
            />
            <Project
              maker="Sam Poder"
              name="Climatator"
              emojis="🌏🔥🥽"
              query={query}
            />
            <Project
              maker="Arsh Shrivastava"
              name="Kid-friendly Stock Simulator"
              emojis="💰📈"
              query={query}
            />
            <Project
              maker="Neil Ghosh"
              name="Dementia Smart Mirror"
              emojis="🧠🪞👵"
              query={query}
            />
            <Project
              maker="Neer Vikas Verma"
              name="Robot Hand"
              emojis="🦾🤖"
              query={query}
            />
            <Project
              maker="Sam Poder"
              name="Climatator"
              emojis="🌏🔥🥽"
              query={query}
            />
            <Project
              maker="Arsh Shrivastava"
              name="Kid-friendly Stock Simulator"
              emojis="💰📈"
              query={query}
            />
            <Project
              maker="Neil Ghosh"
              name="Dementia Smart Mirror"
              emojis="🧠🪞👵"
              query={query}
            />
            <Project
              maker="Neer Vikas Verma"
              name="Robot Hand"
              emojis="🦾🤖"
              query={query}
            />
            <Project
              maker="Sam Poder"
              name="Climatator"
              emojis="🌏🔥🥽"
              query={query}
            />
            <Project
              maker="Arsh Shrivastava"
              name="Kid-friendly Stock Simulator"
              emojis="💰📈"
              query={query}
            />
            <Project
              maker="Neil Ghosh"
              name="Dementia Smart Mirror"
              emojis="🧠🪞👵"
              query={query}
            />
            <Project
              maker="Neer Vikas Verma"
              name="Robot Hand"
              emojis="🦾🤖"
              query={query}
            />
            <Project
              maker="Sam Poder"
              name="Climatator"
              emojis="🌏🔥🥽"
              query={query}
            />
            <Project
              maker="Arsh Shrivastava"
              name="Kid-friendly Stock Simulator"
              emojis="💰📈"
              query={query}
            />
            <Project
              maker="Neil Ghosh"
              name="Dementia Smart Mirror"
              emojis="🧠🪞👵"
              query={query}
            />
            <Project
              maker="Neer Vikas Verma"
              name="Robot Hand"
              emojis="🦾🤖"
              query={query}
            />
          </Grid>
        </Container>
      </Box>
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
      </Box>
      <style>
        {`
        
        .global-context{
          width: max-content;
          cursor: default!important
        }
        `}
      </style>
    </Box>
  )
}

export default App
