import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from '../components/card/Card';
import { motion, AnimatePresence } from 'framer-motion';

const Cuisine = () => {
    const [cuisine, setCuisine] = useState([]);
    const params = useParams();

    useEffect(()=>{
        getCuisine(params.type);
        console.log("cuisine in useeffect", cuisine);
    },[params.type]);

    const getCuisine = (name)=>{
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=44df958ab3a04c349e51be260c26e03c&cuisine=${name}`).then((res)=>{
            const data = res.data;
            console.log(data.results);
            setCuisine(data.results);
        })
    }
  return (
    <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
      >
      <div className='grid_row'>
        {cuisine.map((recipe)=>{
          return (
              <Card recipe={recipe}/>
          )
        })}
      </div>
      </motion.div>
  )
}

export default Cuisine
