// import { useState } from 'react'
import axios from "axios";
import './App.css'

function App() {
  // const [count, setCount] = useState(0);



  axios.get('/users')
    .then((res) => res.json())
    .then(console.log);

  return (
    <>
            <h1>Image Gallery</h1>
      <div className="card">
        
      </div>
      
    </>
  )
}

export default App
