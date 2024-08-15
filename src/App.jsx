import {getImg} from './apiService/imgGallery'
import { useEffect, useState } from 'react'

import './App.css'
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Loader } from './components/Loader/Loader';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';
import { Button } from './components/Button/Button';
import { ImageModal } from './components/ImageModal/ImageModal';

 const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
   const [images, setImages] = useState([]);
   const [error, setError] = useState(null);
   const [isEmpty, setIsEmpty] = useState(false);
   const [loader, setLoader] = useState(false);
   const [isVisible, setIsVisible] = useState(false);
   const [showModal, setShowModal] = useState(false);
  const [modalSrc, setModalSrc] = useState("");
  const [modalAlt, setModalAlt] = useState("");
 

  
  useEffect(() => {
  if (!query) return;
    const fetchImg = async () => {
      setLoader(true);
      try {
        const {
          per_page,
          results,
          total_pages
        } =
        await getImg (query,
          page);
   if (!results.length) return setIsEmpty(true);   
 setImages((prevImages) => [...prevImages, ...results]);
        setIsVisible(page < Math.ceil(total_pages / per_page));
      } catch (error) {
        console.log(error);
              setError(error);
      } finally {
        setLoader(false);
      }
    };
    fetchImg();
    }, [query, page]);

   const onHandleSubmit = (searchQuery) => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
    setError(null);
    setIsVisible(false);
    setIsEmpty(false);
   };
   
   const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
   };
   
   const openModal = (url, alt) => {
    setShowModal(true);
    setModalSrc(url);
    setModalAlt(alt);
  };
  const closeModal = () => {
    setShowModal(false);
    setModalSrc("");
    setModalAlt("");
  };

  return (
    <>
      <SearchBar onSubmit={onHandleSubmit} />
      {images.length > 0 && <ImageGallery openModal={openModal} images={images} />
      }
            {isVisible && (
        <Button onClick={onLoadMore} disabled={loader}>
          {loader ? "LOADING" : "Load More"}
        </Button>
      )}
       {loader && <Loader />}
      {error && (
        <ErrorMessage textAlign="center">❌ Something went wrong - {error}</ErrorMessage>
      )}
      {isEmpty && (
        <ErrorMessage textAlign="center">Sorry. There are no images ... 😭</ErrorMessage>
      )}
<ImageModal
        modalIsOpen={showModal}
        src={modalSrc}
        alt={modalAlt}
        closeModal={closeModal}
      />
    </>
  );
};

export default App
