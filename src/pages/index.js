import React from "react"
import JSONData from "../../content/movie-ratings.json"
import { line } from "d3-shape"
import { ResponsiveBar } from "@nivo/bar"

import Layout from "../components/layout"
import SEO from "../components/seo"

const LineLayer = ({ bars, xScale, yScale }) => {
  const lineGenerator = line()
    .x(bar => xScale(bar.data.indexValue) + bar.width / 2 + bar.width * 1.5)
    .y(bar =>
      yScale(
        Object.values(bar.data.data)
          .filter(datum => Number.isInteger(datum))
          .reduce((prev, curr) => prev + curr) /
          (Object.values(bar.data.data).length - 1)
      )
    )
  return (
    <path
      d={lineGenerator(
        [
          ...new Map(bars.map(bars => [bars.data.indexValue, bars])).values(),
        ].sort((a, b) => a.data.index - b.data.index)
      )}
      fill="none"
      stroke="rgba(0, 2, 35, 0.25)"
    />
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Movie Club" />
    <ResponsiveBar
      data={JSONData.content}
      indexBy="title"
      keys={["DP", "JG", "ML", "JS"]}
      groupMode="grouped"
      minValue={0}
      maxValue={100}
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
      layers={["grid", "axes", "bars", "markers", "legends", LineLayer]}
    />
  </Layout>
)

export default IndexPage
