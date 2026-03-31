import React, { use } from 'react'
import {useParams} from 'react-router-dom'

function Three() {
     const {z}  = useParams();
     console.log(z);

     const data = [
        {
            id:1,
            product:'mobile',
            price:10000
        },
        {
            id:2,
            product:'laptop',
            price:50000
        },
        {
            id:3,
            product:'tv',
            price:30000
        }   ,
        {
            id:4,
            product:'tablet',
            price:20000
        },
        {
            id:5,
            product:'watch',
            price:5000
        },
        {
            id:6,
            product:'headphones',
            price:3000
        }
     ]
     
  return (
    <div>
      <h1>Three</h1>
      <h2>vaslu of psrmas is {z}</h2>
      {data.filter((item)=>item.id==z).map((item)=>{
        return(
            <div key={item.id}>
                <h3>{item.product}</h3>
                <p>{item.price}</p>
            </div>
        )
      })
      }
    </div>
  )
}

export default Three
