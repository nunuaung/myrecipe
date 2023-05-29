import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link, json } from 'react-router-dom';
import Card from '../card/Card';


const Veggie = () => {
  const [vegie, setVegie] = useState([]);
    useEffect(()=>{
        getPopular();
    },[]);
    const getPopular = ()=>{

        const check = localStorage.getItem('vegie');
        if(check){
          setVegie(JSON.parse(check));
        }else{
            axios.get(`https://api.spoonacular.com/recipes/random?apiKey=44df958ab3a04c349e51be260c26e03c&number=9&tags=vegetarian`).then((res)=>{
            let data = res.data;
            localStorage.setItem('vegie',JSON.stringify(data.recipes));
            setVegie(data.recipes);
            console.log("data", data);
            })
        }
        
    }
  return (
        <div className='section_wrapper'>
            <h1 className='section_title'>Our Vegetarian Picks</h1>
            <Splide options={{
                perPage: 3,
                type: 'loop',
                arrows: false,
                gap: '1.5rem',
                autoplay: true,
                pagination: false,
                breakpoints: {
                    '767': {
                        perPage: 2,
                    },
                    '479': {
                        perPage: 1,
                    },
                }
            }}>
            {vegie.map((recipe)=>{
                return(
                    <SplideSlide key={recipe.id}>
                        <Link to={"/recipe/"+recipe.id}>
                            <Card recipe={recipe}/>
                        </Link>
                    </SplideSlide>
                )
            })}
            </Splide>
        </div>
  )
}

export default Veggie
