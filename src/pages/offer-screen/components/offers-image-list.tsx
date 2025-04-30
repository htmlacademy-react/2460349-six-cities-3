import { useAppSelector } from '../../../store';
import { selectCurrentOffer } from '../../../store/selectors';
import OfferImage from './offer-image';

function OffersImageList() {
  const offer = useAppSelector(selectCurrentOffer);

  if (!offer) {
    return null;
  }

  const { images } = offer;

  const imagesWithKeys = images.map((src) => ({ src, id: crypto.randomUUID() })) ?? [];
  return (
    <>
      {imagesWithKeys.map((img) => <OfferImage key={img.id} image={img.src} />)}
    </>
  );
}

export default OffersImageList;
