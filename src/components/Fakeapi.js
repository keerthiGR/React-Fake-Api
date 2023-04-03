import React, { useEffect, useState } from 'react'
import Displayapi from './Displayapi'

const Fakeapi = () => {

        const [data,setItems]=useState([])

        useEffect(()=>{
            const fetchapi=async()=>{
                const apiurl=await fetch("https://fakestoreapi.com/products")
                const data=await apiurl.json()
                console.log(data);
                setItems(data)
            }
            fetchapi()
        },[]
        )
    
  return data.map(post =><Displayapi key={post.id} post={post}/>)
}

export default Fakeapi