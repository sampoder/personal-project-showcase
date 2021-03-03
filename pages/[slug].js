import { Button, Box, Container, Heading, Text } from 'theme-ui'
import React, { useState } from 'react'
import Meta from '../components/meta'
import Emoji from '../components/emoji'
import ReactPlayer from 'react-player/youtube'
import { useRouter } from 'next/router'
import Footer from '../components/footer'
import { Animated } from 'react-animated-css'

function App(props) {
  if(!props.data){
    return <Text>404</Text>
  }
  const [video, toggleVideo] = useState('0')
  const [back, toggleBack] = useState(false)
  const router = useRouter()
  function headBack() {
    toggleBack(true)
    router.back()
  }
  return (
    <Box p={0} sx={{ width: '100%', bg: 'black' }} m={0}>
      <Meta
        image={`https://i.ytimg.com/vi/${props.data['fields']['Youtube ID']}/maxresdefault.jpg`}
        title={`${props.data['fields']['Project Name']}`}
      />
      <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
        <Box
          sx={{
            background: `linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.94),
      rgba(0, 0, 0, 0.74)
    ),url(https://i.ytimg.com/vi/${props.data['fields']['Youtube ID']}/maxresdefault.jpg)`,
            backgroundSize: 'cover',
            color: 'white',
            fontSize: '1.3rem!important',
            width: '100%',
            backgroundPosition: 'center',
            height: '100vh',
            display: video != '1' ? 'default' : 'none',
          }}
        >
          <Container py={4} pt={6}>
            <Box
              ml="0px"
              mb="4px"
              sx={{
                width: 'max-content',
                verticalAlign: 'middle',
                borderRadius: '8px',
                fontSize: '36px',
              }}
            >
              <Heading
                sx={{
                  bg: 'white',
                  color: 'black',
                  borderRadius: '8px',
                  fontSize: '0.5em',
                  p: '4px',
                  pb: '5px',
                  verticalAlign: '8px',
                  pl: '6px',
                  display: 'inline-block',
                  pr: '6px',
                  mr: '8px',
                  cursor: 'pointer',
                }}
                onClick={() => headBack()}
              >
                {'< Back'}
              </Heading>
              <Emoji emoji={props.data['fields']['3 Emoji Desc']} />
            </Box>
            <Heading
              sx={{
                fontSize: ['2.3rem', '4rem', '4rem'],
                marginBottom: '16px',
                maxWidth: '600px',
              }}
            >
              {title(props.data['fields']['Project Name'])}
            </Heading>
            <Text
              sx={{
                fontSize: '1.3rem!important',
                fontWeight: '600',
                marginTop: '0px',
                paddingTop: '0px',
                lineHeight: '1.8',
              }}
            >
              {' '}
              Created by: {title(props.data['fields']['Student Name'])}
              <br />
              Global Context: {title(props.data['fields']['Global Context'])}
              <br />
              <Button
                mt="12px"
                onClick={() => toggleVideo('1')}
                sx={{ lineHeight: '1.3' }}
              >
                {video != '0.1' ? 'Play Demo' : 'Resume Demo'}
              </Button>
            </Text>
          </Container>
        </Box>
      </Animated>
      <Box
        onClick={() => toggleVideo('0.1')}
        sx={{ display: video != '1' ? 'none' : 'default' }}
      >
        <ReactPlayer
          width="100vw"
          height="100vh"
          playing={video == '1' ? true : false}
          style={{ pointerEvents: 'none' }}
          url={`https://www.youtube.com/watch?v=${props.data['fields']['Youtube ID']}`}
          onClick={() => toggleVideo('0.1')}
          onEnded={() => toggleVideo('0')}
          config={{
            youtube: {
              playerVars: {
                showinfo: 0,
                autoplay: 0,
                modestbranding: 1,
                rel: 0,
              },
            },
          }}
        />
      </Box>
      {!back ? <Footer /> : ''}
    </Box>
  )
}

export async function getStaticPaths() {
  var GithubSlugger = require('github-slugger')
  const AirtablePlus = require('airtable-plus')

  const airtable = new AirtablePlus({
    baseID: process.env.AIRTABLE_BASE,
    apiKey: process.env.AIRTABLE_TOKEN,
    tableName: 'Students',
  })
  var slugger = new GithubSlugger()
  const paths = (await airtable.read({})).map(data => ({
    params: {
      slug: slugger.slug(data.fields['Student Name']),
      id: data.id,
    },
  }))
  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  var lodash = require('lodash')
  var GithubSlugger = require('github-slugger')
  const AirtablePlus = require('airtable-plus')

  const airtable = new AirtablePlus({
    baseID: process.env.AIRTABLE_BASE,
    apiKey: process.env.AIRTABLE_TOKEN,
    tableName: 'Students',
  })

  var slugger = new GithubSlugger()
  try {
    const path = lodash.filter(
      (await airtable.read({})).map(data => ({
        params: {
          slug: slugger.slug(
            typeof data != 'undefined' ? data.fields['Student Name'] : '404',
          ),
          id: data.id,
        },
      })),
      path => path.params.slug === params.slug,
    )[0]

    const res = await airtable.find(path.params.id)

    return {
      props: {
        data: res,
      },
      revalidate: 30,
      notFound: typeof res.id == "undefined" ? true : false,
    }
  } catch (e) {
    console.log(e)
    return {}
  }
}

export default App
