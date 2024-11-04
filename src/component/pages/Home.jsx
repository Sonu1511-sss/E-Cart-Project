import React from 'react'
import Hero from '../Hero'
import LatestCollection from '../LatestCollection'
import BestSeller from '../BestSeller'
import OverPolicy from '../OverPolicy'

function Home() {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OverPolicy/>
    </div>
  )
}

export default Home