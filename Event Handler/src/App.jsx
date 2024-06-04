import React from 'react'
import { useEffect,useState } from 'react'
import './App.css'
import Post from './components/Post'



function App() {
  const [data,setdata] = useState([])
  const hanndleClick = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((data)=>setdata(data))
    .catch((err)=>console.log(err))

  }
  return (
    <div>
      <button onClick={hanndleClick}>GET POSTS</button>
      <div>
        {data.map((el)=>(
          <Post xx title={el.title} body={el.body} />
        ))}
      </div>
    </div>
  )
}

export default App