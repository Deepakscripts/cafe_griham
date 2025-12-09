import ExploreCategories from '@/components/ExploreCategories'
import CoffeeLanding from '@/components/HeroSection'
import React from 'react'

function Home() {
  return (
    <>
    <div className=' flex flex-col items-center bg-gray-100  ' >
        <CoffeeLanding/>
        <ExploreCategories/>
    </div>
    </>
  )
}

export default Home