import { getAllSamplePostsAsPath, sampleAPI } from '../../lib/api.js'
import Layout from '../../components/Layout.js'
import { useRouter } from 'next/router'

export default function Post({ sample = '' }) {

  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <Layout>
      {sample}
    </Layout >
  )
}

export async function getStaticPaths() {
  const list = getAllSamplePostsAsPath();
  return {
    paths: list,
    fallback: false
  }
}

export const getStaticProps = async () => {
  return {
    props: sampleAPI()
  }
}
