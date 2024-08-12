import styles from './ImageGallery.module.css'


export const ImageGallery = ({images}) => {
  return (
      <div className={styles.card}>
          {/* <h1 className={styles.title}>Image Gallery</h1> */}
          <div className={styles.box}>
        {Array.isArray(images) && images.map(({id, title, image}) => {
          return (
            <div key={id}>
              <h3>{title}</h3>
              <img>{image}</img>
            </div>
          );
        })}
      </div>;
    </div>
  )
}
