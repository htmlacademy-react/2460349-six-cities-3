import OffersList from '../../../components/offers-list/offers-list';
import { NEARBY_OFFERS_COUNT } from '../../../const';
import { useAppSelector } from '../../../store';
import { selectNearbyOffers } from '../../../store/selectors';

function NearPlaces() {
  const nearbyOffers = useAppSelector(selectNearbyOffers);
  const limitedNearbyOffers = nearbyOffers.slice(0, NEARBY_OFFERS_COUNT);

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          <OffersList offers={limitedNearbyOffers} />
        </div>
      </section>
    </div>
  );
}

export default NearPlaces;
