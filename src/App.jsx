import {getImg} from './apiService/imgGallery'
import { useEffect, useState } from 'react'

import './App.css'
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { SearchBar } from './components/SearchBar/SearchBar';
// import { Loader } from './components/Loader/Loader';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';

 const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState(null);
  // const [loader, setLoader] = useState(false);
  // const [error, setError] = useState(null);
  // const [isEmpty, setIsEmpty] = useState(false);
  // const [isVisible, setIsVisible] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  // const [modalUrl, setModalUrl] = useState("");
  // const [modalAlt, setModalAlt] = useState("");


  
  useEffect(() => {
  if (!query) return;
    const fetchImg = async () => {
      // setLoader(true);
      try {
        const {
          // per_page,
          photos,
          // total_results
        } =
        await getImg (query,
          page);
  //  if (!photos.length) return setIsEmpty(true);   
 setImages((prevImages) => [...prevImages, ...photos]);
        // setIsVisible(page < Math.ceil(total_results / per_page));
      } catch (error) {
        console.log(error);
              // setError(error);
      } finally {
        // setLoader(false);
      }
    };
    fetchImg();
    }, [query, page]);

   const onHandleSubmit = (searchQuery) => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
    // setError(null);
    // setIsVisible(false);
    // setIsEmpty(false);
  };

  return (
    <>
      <SearchBar onSubmit={onHandleSubmit}/>
      <ImageGallery images={images} />
      {/* <Loader /> */}
      <ErrorMessage />
      
    </>
  );
};

export default App
