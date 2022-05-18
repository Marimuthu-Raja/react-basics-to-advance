import React,{useEffect, useState} from 'react'
import axios from 'axios'
const StateComponent = () => {
    const [apiData,setapiData] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/article/')
        .then(response =>{
            setapiData(response.data)
        })
    },[])

  return (
    <>
       {apiData.map((article,index)=> <h2 key={index}>{article.author} - {article.title}</h2> )}
    </>
  )
}

export default StateComponent
