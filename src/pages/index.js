import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MediumPostList from "../components/medium-post-list"
import Axios from "axios"

const IndexPage = () => {
  const [mediumPosts, setMediumPosts] = useState(0)
  useEffect(() => {
    Axios.get(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tugsanunlu"
    ).then(resp => {
      setMediumPosts(resp.data.items)
    })
  }, [])

  return (
    <Layout>
      <SEO title="home" />
      <MediumPostList posts={mediumPosts} />
    </Layout>
  )
}

export default IndexPage
