import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>夏云是一个众筹网站</h1>
      <p>是一个创意项目社区</p>
      <Link to="/contact">联系我们</Link>
    </Layout>
  )
}

export default AboutPage
