import React from 'react'
import Banner from '../Components/Home/Banner'
import Products from '../Components/Home/Products'

const Home = () => {
  return (
    <div>
      <Banner />
      <div className='w-full -mt-12 xl:-mt-20 py-10'> 
        <Products />
      </div>
    </div>
  )
}

export default Home