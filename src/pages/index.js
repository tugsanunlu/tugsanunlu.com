import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MediumPostList from "../components/medium-post-list"
import Axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../utils/fontawesome'

const IndexPage = () => {
  const [mediumPosts, setMediumPosts] = useState(0)
  useEffect(() => {
    Axios.get(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tugsanunlu"
    ).then(resp => {
      setMediumPosts(resp.data.items.filter(item => item.categories.length));
    })
  }, [])

  return (
    <Layout>
      <SEO title="home" />
      {mediumPosts
        ? <MediumPostList posts={mediumPosts} />
        : (<center>
          <FontAwesomeIcon icon={["fas", "spinner"]} spin />
        </center>)
      }
    </Layout>
  )
}

export default IndexPage