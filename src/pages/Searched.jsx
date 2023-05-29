import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import Card from '../components/card/Card';

const Searched = () => {
  const [searchRecipes, setSearchRecipes] = useState([]);
  const params = useParams();

  useEffect(()=>{
    getSearchRecipes(params.search);
    console.log("Params " ,params);
  },[params.search])

  const getSearchRecipes = (name)=>{
      axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=44df958ab3a04c349e51be260c26e03c&query=${name}`).then((res)=>{
        console.log("Search results " + res.data);
        const data = res.data;
        setSearchRecipes(data.results);
      })
  }
  return (
    <div className='grid_row'>
        {searchRecipes.map((recipe)=>{
          return (
              <Card recipe={recipe} key={recipe.id}/>
          )
        })}
      </div>
  )
}

export default Searched
