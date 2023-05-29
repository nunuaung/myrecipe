import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Recipe = () => {
    const [detail, setDetail] = useState({});
    let param = useParams();
    const [activeTab, setActiveTab] = useState("instruction");

    useEffect(()=>{
        getDetail();
    },[param.id]);

    const getDetail = async ()=>{
        axios.get(`https://api.spoonacular.com/recipes/${param.id}/information?apiKey=44df958ab3a04c349e51be260c26e03c`).then((res)=>{
            const data = res.data;
            setDetail(data);
        })
    }
  return (
    <div className='detail_wrapper'>
        <div className="col">
            <h2>{detail.title}</h2>
            <img src={detail.image} alt={detail.title} />
        </div>
        <div className="col">
            <button className={`detail_btn ${activeTab === "instruction"? "active" : ""}`} onClick={()=>setActiveTab("instruction")}>Instructions</button>
            <button className={`detail_btn ${activeTab === "ingredient"? "active" : ""}`} onClick={()=>setActiveTab("ingredient")}>Ingredients</button>
            {activeTab === "instruction" ? (
            <div className='detail_content'>
                <p dangerouslySetInnerHTML={{__html: detail.instructions}}></p>
                <p dangerouslySetInnerHTML={{__html: detail.summary}} className='mt_15'></p>
            </div>) : 
            (<div className='detail_content'>
                <ul>
                    {detail.extendedIngredients.map((ingredient)=>{
                        return (<li key={ingredient.id} className='ingredient_list'>{ingredient.originalName}</li>)
                    })}
                    {detail.extendedIngredients[0].originalName}
                </ul>
            </div>)}
        </div> 
    </div>
  )
}

export default Recipe
