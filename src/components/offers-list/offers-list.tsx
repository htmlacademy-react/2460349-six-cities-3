import OfferCard from '../offer-card/offer-card';
import { OfferDto } from '../../types/types';

interface Props {
  offers: OfferDto[];
  setActiveOfferId?: (id: string | null) => void;
}

function OffersList({ offers, setActiveOfferId }: Props) {
  return (
    <>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onMouseEnter={() => setActiveOfferId?.(offer.id ?? null)}
          onMouseLeave={() => setActiveOfferId?.(null)}
        />
      ))}
    </>
  );
}


export default OffersList;

