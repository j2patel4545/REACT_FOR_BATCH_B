import React, { useState } from 'react'
import axios from 'axios'

function App() {

  const [apiData,setApiData] = useState([]);

  // const fetchData = async () => {

  //   try {
  //     const abc = await axios.get("https://dummyjson.com/quotes");
  //     setApiData(abc.data.quotes);
  //   } catch (error) {
  //     console.log("error something ", error);
  //   }
  // }
  //     fetchData();

const AddData = async () => {
  try {
    axios.post("https://api-keshavdocs-two-2.onrender.com/api/todos",{
  "title": "Testing Batch B23",
  "description": "Hello",
  "status": "pending",
  "priority": "high",
  "dueDate": "2012-03-21",
  "tags": "dsfj"
})
  } catch (error) {
    console.log(error);
    
  }
}
AddData();

      // console.log(apiData);
      


  return (
    <div>
      <h1>Hello, World!</h1>
     <div className='grid grid-cols-3 p-2 bg-amber-300 gap-4  '>
       {apiData.map((a)=>{
        return(
          <div className='bg-white p-4 shadow-md flex flex-col items-center justify-center'>
            <h2>{a.author}</h2>
            <p>{a.quote}</p>
          </div>
        )
      })}
     </div>
    </div>
  )
}

export default App
