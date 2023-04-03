import React from 'react'

const Displayapi = ({post}) => {
  return (
   
        <div class="cart">
            <h1><span>Title</span> : {post.title}</h1>
            <img src={post.image} alt="image"/>
            <h1><span>Price</span> : {post.price}</h1>
        
        </div>
  )
}

export default Displayapi