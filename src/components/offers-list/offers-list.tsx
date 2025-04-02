import OfferCard from '../offer-card/offer-card';
import { OfferDto } from '../../types/types';
import { Sorting } from '../../const';

interface Props {
  offers: OfferDto[];
  setActiveOfferId?: (id: string | null) => void;
  sortType?: Sorting;
}

function OffersList({ offers, setActiveOfferId, sortType = Sorting.Default}: Props) {

  const sortingOffers = (list: OfferDto[], sort: Sorting): OfferDto[] => {
    if (sort === Sorting.Default) {
      return list;
    }

    const sorted = [...list];
    switch (sort) {
      case Sorting.LowPrice:
        return sorted.sort((a, b) => a.price - b.price);
      case Sorting.HighPrice:
        return sorted.sort((a, b) => b.price - a.price);
      case Sorting.TopRated:
        return sorted.sort((a, b) => b.rating - a.rating);
      default:
        return list;
    }
  };

  const sortedOffers = sortingOffers(offers, sortType);

  return (
    <>
      {sortedOffers.map((offer) => (
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

