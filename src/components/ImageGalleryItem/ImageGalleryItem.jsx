export const  ImageGalleryItem = ({arrayImages}) => {
  return (
    <div>
        {arrayImages.map(({id, webformatURL, largeImageURL, tags}) => (<li className="gallery-item" key={id}>
           <img src={webformatURL} srcSet={largeImageURL} alt={tags} />
         </li>))}
    </div>

 
  );
};
