// import { useEffect, useState } from 'react'
// import axios from "axios";
import './App.css'
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Loader } from './components/Loader/Loader';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';

function App() {
  // const [images, setImages] = useState(null);


  // Access Key
  // TNyf12i8jeVlVVDDWlHnde9oQXes7SAdWsyNp-n8EXQ
    // https://api.unsplash.com/photos/?client_id=TNyf12i8jeVlVVDDWlHnde9oQXes7SAdWsyNp-n8EXQ

  // useEffect(() => {
  //   const fetchImg = async () => {
  //     const { data } =
  //       await axios.get('https://api.unsplash.com/photos/?client_id=TNyf12i8jeVlVVDDWlHnde9oQXes7SAdWsyNp-n8EXQ');
  //     setImages(data.images)
  //   };
  //   fetchImg();
  //   }, []);

  return (
    <>
      <SearchBar />
      <ImageGallery />
      <Loader />
      <ErrorMessage />
      
    </>
  );
};

export default App
