import styles from './ImageCard.module.css'


export const ImageCard = ({ images, onGallaryClick }) => {
    const ClickHandler = () => { onGallaryClick(images.id) };
    return (
        <div onClick={ClickHandler}>
            <img
                className={styles.img}
                src={images.urls.small}
                alt={images.alt_description}
            />
            </div>
    );
};
