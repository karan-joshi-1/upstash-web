import Head from 'next/head'
import { Box, SimpleGrid, Container, Heading, Text } from '@chakra-ui/react'
import Investors from '../components/investors'
import Section from '../components/section'
import Bg from '../components/bg'
import Mission1 from '../components/icons/Mission1'
import Mission2 from '../components/icons/Mission2'
import Mission3 from '../components/icons/Mission3'

const MISSIONS = [
  {
    title: 'Easy',
    desc: 'Building and deploying should be as easy as a single tap.',
    icon: <Box as={Mission1} w={16} mx="auto" color="primary" />
  },
  {
    title: 'Universal',
    desc: 'To connect the world, sites should be fast from everywhere.',
    icon: <Box as={Mission2} w={16} mx="auto" color="primary" />
  },
  {
    title: 'Accessible',
    desc: 'Great care in user experience and design enables everyone.',
    icon: <Box as={Mission3} w={16} mx="auto" color="primary" />
  }
]

function MissionItem({ title, desc, icon }) {
  return (
    <Box>
      {icon}

      <Heading tag="h3" size="md" mt={5}>
        {title}
      </Heading>
      <Text mt={3} color="whiteAlpha.600">
        {desc}
      </Text>
    </Box>
  )
}

function HomePage() {
  return (
    <>
      <Head>
        <title>About - Upstash</title>
      </Head>

      <Box as="section" py={['100px', '160px']} textAlign="center">
        <Container maxW="3xl">
          <Heading as="h1" fontWeight="extrabold" size="3xl">
            We enable developers to build and publish wonderful things
          </Heading>

          <Box mt="24px" fontSize={['md', '2xl']} color="whiteAlpha.700">
            <Text>We build products for developers and designers.</Text>
            <Text>And those who aspire to become one.</Text>
          </Box>
        </Container>

        <Container maxW="4xl" mt={20}>
          <SimpleGrid columns={[1, 3]} spacing={10}>
            {MISSIONS.map((mission) => {
              return <MissionItem key={mission.title} {...mission} />
            })}
          </SimpleGrid>
        </Container>
      </Box>

      <Section py={['100px', '140px']}>
        <Bg />
        <Investors fullList />
      </Section>
    </>
  )
}

export default HomePage