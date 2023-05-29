import React from 'react'
import Veggie from '../components/veggie/Veggie'
import Popular from '../components/popular/Popular'
import Categories from '../components/categories/Categories'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className='wrapper'>
      <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
      >
      <Popular/>
      <Veggie/>
      <div className='sample_grid'>
        <div className='sample_card'>
          1
        </div>
        <div className='sample_card'>
          2
        </div>
        <div className='sample_card'>
          3
        </div>
      </div>
      </motion.div>
    </div>
  )
}

export default Home
