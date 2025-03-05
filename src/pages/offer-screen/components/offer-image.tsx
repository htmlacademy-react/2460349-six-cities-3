interface ImageProps {
  image: string;
}

function OfferImage({image}: ImageProps) {
  return(
    <div className = "offer__image-wrapper" >
      <img className="offer__image" src={image} alt="Photo studio" />
    </div>
  );
}

export default OfferImage;
