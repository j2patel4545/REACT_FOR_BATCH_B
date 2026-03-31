import React from 'react'
import {useNavigate} from 'react-router-dom'

function Two() {
    const kevin = useNavigate();
    const count = [1,2,3,4,5,6]
    const handelclick = (e)=>{
        console.log(e);
        kevin(`/three/${e}`)
    }
  return (
    <div>
      <h1>Two</h1>
      {count.map((item)=>{  
        return(
            <div key={item}>
                <h3 onClick={()=>{handelclick(item)}} >{item}</h3>
            </div>
        )
        })}
    </div>
  )
}

export default Two
