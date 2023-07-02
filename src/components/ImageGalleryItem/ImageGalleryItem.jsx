import styles from './ImageGalleryItem.module.css'

export const  ImageGalleryItem = ({arrayImages}) => {
  return (
    <div className={styles.imageGallery}>
        {arrayImages.map(({id, webformatURL, largeImageURL, tags}) => (<li className={styles.imageGalleryItem} key={id}>
           <img className={styles.imageGalleryItemImage} src={webformatURL} srcSet={largeImageURL} alt={tags} />
         </li>))}
    </div>

 
  );
};
