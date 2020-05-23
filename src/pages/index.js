import React from "react"
import JSONData from "../../content/movie-ratings.json"
import { Link } from "gatsby"
import { ResponsiveBar } from "@nivo/bar"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ResponsiveBar
      data={JSONData.content}
      indexBy="title"
      keys={["DP", "JG", "ML", "JS"]}
      groupMode="grouped"
      minValue="0"
      maxValue="100"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      colors={{ scheme: "nivo" }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  </Layout>
)

export default IndexPage
