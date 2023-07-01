import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({images}) => {
  return (
    <div>
      <ul className="gallery">
        <ImageGalleryItem arrayImages={images}/>
      </ul>
    </div>
  );
};