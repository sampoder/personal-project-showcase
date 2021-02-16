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
import Footer from '../../components/footer'
import Meta from '../../components/meta'
import Link from 'next/link'
import { contexts } from '../../contexts'

function App(props) {
  const [query, setQuery] = useState('')
  const [highlightedImage, setHighlightedImage] = useState('')
  return (
    <Box p={0} sx={{ width: '100%' }} m={0}>
      <Meta
        title={`${props.context.params.name} Projects`}
        name="MYP Personal Project Exhibition 2021"
      />
      <Box bg="blue" color="white">
        <Container py={3}>
          <Grid columns={[1, 2, 2]} gap="12px">
            <Link href="/">
              <Heading
                sx={{
                  pt: ['8px', '16px', '16px'],
                  textAlign: ['left', 'left', 'left'],
                  cursor: 'pointer',
                }}
              >
                MYP Personal Project Exhibition 2021
              </Heading>
            </Link>
            <Box>
              <Box
                style={{
                  width: 'auto',
                  display: 'flex',
                  justifyContent: 'right',
                  textAlign: 'right',
                }}
              >
                <Box sx={{ marginLeft: 'auto', marginRight: '0' }}>
                  <GlobalContext
                    emoji={props.context.params.emoji}
                    name={`${props.context.params.name}`}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ minHeight: '100vh' }}>
        <Container py={4}>
          <Grid columns={[1, 1, 1]}>
            <Box>
              <Text>
                The global context of <i>identities and relationships</i>{' '}
                explores identity; beliefs and values; personal, physical,
                mental, social and spiritual health; human relationships
                including families, friends, communities and cultures; what it
                means to be human.
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
              my: 3,
            }}
          />
          <Grid columns={[1, 2, 3]}>
            {props.data.map(project => (
              <Project
                key={project.fields['Record ID']}
                maker={project.fields['Student Name']}
                name={project.fields['Project Name']}
                emojis={project.fields['3 Emoji Desc']}
                yt={project.fields['Youtube ID']}
                slug={project.slug}
                query={query}
              />
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer />{' '}
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

export async function getStaticPaths() {
  return {
    paths: contexts,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  var lodash = require('lodash')
  const AirtablePlus = require('airtable-plus')
  var GithubSlugger = require('github-slugger')

  const airtable = new AirtablePlus({
    baseID: process.env.AIRTABLE_BASE,
    apiKey: process.env.AIRTABLE_TOKEN,
    tableName: 'Students',
  })

  const path = lodash.filter(
    contexts,
    data => data.params.slug === params.slug,
  )[0]

  var slugger = new GithubSlugger()

  let res = (await airtable.read({})).map(data => ({
    id: data.id,
    fields: data.fields,
    slug: slugger.slug(data.fields['Student Name']),
  }))

  res = lodash.filter(
    res,
    data => data.fields['Global Context'] === path.params.name,
  )

  return {
    props: {
      data: res,
      context: path,
    },
  }
}
