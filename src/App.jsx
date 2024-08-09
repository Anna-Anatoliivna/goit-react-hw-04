import { useEffect, useState } from 'react'
import axios from "axios";
import './App.css'

function App() {
  const [images, setImages] = useState(null);


  // Access Key
  // TNyf12i8jeVlVVDDWlHnde9oQXes7SAdWsyNp-n8EXQ
  
  // https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

  useEffect(() => {
    const fetchImg = async () => {
      const { data } =
        await axios.get('/users');
      setImages(data.images)
    };
    fetchImg();
    }, []);

  return (
    <>
      <h1>Image Gallery</h1>
      <div className="card">
        {Array.isArray(images) && images.map(image => {
          return (
            <div key={image.id}>
              <h3>{image.title}</h3>
              <img>{image.image}</img>
            </div>
          );
        })}
        
      </div>;
      
    </>
  );
};

export default App
