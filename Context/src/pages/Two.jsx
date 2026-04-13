import React, { useContext } from 'react'
import DigiContext from '../context/digiContext'

function Two() {
  const { abc } = useContext(DigiContext);
  console.log(abc);
  
  return (
    <div>
      hello from Two {abc }
    </div>
  )
}

export default Two