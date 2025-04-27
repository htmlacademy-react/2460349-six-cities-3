import { useMemo } from 'react';
import OfferImage from './offer-image';

interface Props {
  images: string[];
}


function OffersImageList({ images }: Props) {

  const imagesWithKeys = useMemo(() => images.map((src) => ({ src, id: crypto.randomUUID() })) ?? [], [images]);

  return (
    <>
      {imagesWithKeys.map((img) => <OfferImage key={img.id} image={img.src} />)}
    </>
  );
}

export default OffersImageList;
