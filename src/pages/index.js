import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Medium from "../components/medium"
import Axios from "axios"

const IndexPage = () => {
  const [items, setItems] = useState(0)
  useEffect(() => {
    Axios.get(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tugsanunlu"
    ).then(resp => {
      setItems(resp.data.items)
    })
  }, [])

  return (
    <Layout>
      <SEO title="home" />
      <Medium items={items} />
    </Layout>
  )
}

export default IndexPage
