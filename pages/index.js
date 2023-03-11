import { sampleAPI } from '../lib/api'
import Layout from '../components/Layout';


export default function Index({ sample = '' }) {
  return (
    <Layout>
      {sample}
    </Layout>
  )
}

export const getStaticProps = async () => {
  return {
    props:  sampleAPI()
  }
}
