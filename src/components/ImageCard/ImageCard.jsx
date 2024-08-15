import styles from './ImageCard.module.css'


export const ImageCard = ({ images, onGallaryClick, openModal }) => {
    const ClickHandler = () => { onGallaryClick(images.id) };
    return (
        <div onClick={ClickHandler}>
            <img
                className={styles.img}
                src={images.urls.small}
                alt={images.alt_description}
                onClick={() => openModal(images.urls.regular, images.alt_description)}
            />
            </div>
    );
};
