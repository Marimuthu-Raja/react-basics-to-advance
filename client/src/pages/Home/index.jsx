import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import axios from 'axios'
import BlogCard from '../../components/BlogCard'
const Home = () => {

    const [articles,setArticles] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/article/')
        .then(response => {
            const { data } = response
            setArticles(data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])

  return (
    <div>
        <Header/>
        {articles.map((article,index)=> <BlogCard key={index} title={article.title} content={article.content} author={article.author}/> )}
    </div>
  )
}

export default Home