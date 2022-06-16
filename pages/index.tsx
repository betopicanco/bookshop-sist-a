import type { NextPage } from 'next'
import H1 from '../components/heading/H1'
import HomeSection from '../components/home'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <H1>
          Bem vinda
        </H1>
        
        <HomeSection />
      </>
    </Layout>
  )
}

export default Home;
