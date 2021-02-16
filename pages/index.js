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
import { contexts } from '../contexts'
import Intro from '../components/home/intro.mdx'
import Header from '../components/home/header.js'
import Footer from '../components/footer.js'
import GlobalContext from '../components/global-context'
import AvatarComponent from '../components/avatar-list'
import React, { useState } from 'react'
import Meta from '../components/meta'
import Gallery from '../components/home/gallery.js'

function App(props) {
  const [query, setQuery] = useState('')
  return (
    <Box p={0} sx={{ width: '100%' }} m={0}>
      <Meta />
      <Header />
      <Container py={2} pb={4}>
        <Grid gap={2} columns={[1, 2, 2]}>
          <Box>
            <Intro />
          </Box>
          <Gallery />
        </Grid>
      </Container>
      <Box bg="blue" color="white">
        <Container py={4}>
          <Heading>Projects by Global Context</Heading>
          <Grid columns={[1, 2, 3]} pt={3} gap="12px">
            {contexts.map(context => (
              <GlobalContext
                slug={context.params.slug}
                emoji={context.params.emoji}
                name={context.params.name}
              />
            ))}
          </Grid>
        </Container>
      </Box>
      <Box>
        <Container py={4}>
          <Grid columns={[1, 1, 1]}>
            <Heading sx={{ paddingTop: '8px' }}>Project Directory</Heading>
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
              }}
            />
          </Grid>
          <Box ml="-10px" mt="8px">
            {props.data.map(project => (
              <AvatarComponent
                key={project.fields['Record ID']}
                maker={project.fields['Student Name']}
                name={project.fields['Project Name']}
                emojis={project.fields['3 Emoji Desc']}
                slug={project.slug}
                query={query}
              />
            ))}
          </Box>
        </Container>
      </Box>
      <Footer />
      <style>{`::placeholder {
      font-size: 1.1em;
    }`}</style>
    </Box>
  )
}

export async function getStaticProps() {
  const AirtablePlus = require('airtable-plus')
  var GithubSlugger = require('github-slugger')

  const airtable = new AirtablePlus({
    baseID: process.env.AIRTABLE_BASE,
    apiKey: process.env.AIRTABLE_TOKEN,
    tableName: 'Students',
  })

  var slugger = new GithubSlugger()

  const data = (await airtable.read({})).map(data => ({
    id: data.id,
    fields: data.fields,
    slug: slugger.slug(data.fields['Student Name']),
  }))

  console.log(data[0].fields)

  return {
    props: {
      data,
    },
  }
}

export default App
