import styles from './ImageGallery.module.css'


export const ImageGallery = ({ images }) => {
  return (
    <ul className={styles.list}>
      {images.map(images => {
        return (
          <li className={styles.item} key={images.id}>
            <div>
              <img src={images.urls.small} alt={images.description} />
            </div>
          </li>
        );
      })};
          </ul>
  );
};
                    

