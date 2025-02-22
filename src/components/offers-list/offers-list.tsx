import OfferCard from '../offer-card/offer-card';
import { OfferDto } from '../mock/mock-offers';
import { useState } from 'react';

interface Props {
  offers: OfferDto[];
}

function OffersList({ offers }: Props) {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  console.log(activeOfferId);
  return (
    <>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onMouseEnter={() => setActiveOfferId(offer.id ?? null)}
          onMouseLeave={() => setActiveOfferId(null)}

        />
      ))}
    </>
  );
}


export default OffersList;

