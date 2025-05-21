import { NEARBY_OFFERS_COUNT } from '../../../const';
import { useAppSelector } from '../../../store';
import { selectCurrentOffer, selectNearbyOffers } from '../../../store/offers-slice/offers-selectors';
import { OfferDetailsDto, OfferDto } from '../../../types/offer-dto';
import OfferInfo from './offer-info';
import OfferReviews from './offer-reviews';
import OffersImageList from './offers-image-list';
import Map from '../../../components/map/map';
import { memo } from 'react';

function OfferDetailsImpl() {
  const nearbyOffers = useAppSelector(selectNearbyOffers);
  const limitedNearbyOffers = nearbyOffers.slice(0, NEARBY_OFFERS_COUNT);
  const offer = useAppSelector(selectCurrentOffer);
  const adaptOfferDetailsToOffer = (offerDetails: OfferDetailsDto): OfferDto => ({
    ...offerDetails,
    previewImage: ''
  });

  if (!offer) {
    return null;
  }

  return (
    <section className="offer">
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          <OffersImageList />
        </div>
      </div>
      <div className="offer__container container">
        <div className="offer__wrapper">
          <OfferInfo />
          <OfferReviews />
        </div>
      </div>
      < Map city={offer.city} offers={[...limitedNearbyOffers, adaptOfferDetailsToOffer(offer)]} activeOfferId={offer.id} pageMain={false} />
    </section>
  );
}
const OfferDetails = memo(OfferDetailsImpl);

export default OfferDetails;
