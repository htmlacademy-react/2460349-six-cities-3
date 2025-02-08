function OfferImage({mockImage}: {mockImage: string}): JSX.Element {
  return(
    <div className = "offer__image-wrapper" >
      <img className="offer__image" src={mockImage} alt="Photo studio" />
    </div>
  );
}

export default OfferImage;
