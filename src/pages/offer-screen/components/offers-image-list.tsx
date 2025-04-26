import OfferImage from './offer-image';

interface ImageProps {
  images: string[];
}

function OffersImageList({ images }: ImageProps) {
  return (
    <>
      {images.map((img) => <OfferImage key={crypto.randomUUID()} image={img} />)}
    </>
  );
}

export default OffersImageList;
