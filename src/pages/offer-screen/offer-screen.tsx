import { Helmet } from 'react-helmet-async';
import { NEARBY_OFFERS_COUNT } from '../../const';
import { useParams } from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Map from '../../components/map/map';
import { useAppDispatch, useAppSelector } from '../../store';
import { useEffect } from 'react';
import { fetchOfferData } from '../../store/api-actions';
import { OfferDetailsDto, OfferDto } from '../../types/types';
import OffersImageList from './components/offers-image-list';
import LoadingScreen from '../loading-screen/loading-screen';
import NearPlaces from './components/near-places';
import OfferReviews from './components/offer-reviews';
import OfferInfo from './components/offer-info';
import { selectCurrentOffer, selectNearbyOffers, selectOfferLoading } from '../../store/offer-slice/offer-selectors';

function OfferScreen() {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const offer = useAppSelector(selectCurrentOffer);
  const nearbyOffers = useAppSelector(selectNearbyOffers);
  const isOfferDataLoading = useAppSelector(selectOfferLoading);
  const limitedNearbyOffers = nearbyOffers.slice(0, NEARBY_OFFERS_COUNT);

  const adaptOfferDetailsToOffer = (offerDetails: OfferDetailsDto): OfferDto => ({
    ...offerDetails,
    previewImage: ''
  });

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferData(id));
    }
  }, [dispatch, id]);

  if (isOfferDataLoading) {
    return <LoadingScreen />;
  }

  if (!offer) {
    return <NotFoundScreen />;
  }

  return (
    <>
      <Helmet>
        <title>6 Cities Offer</title>
      </Helmet>
      <main className="page__main page__main--offer">
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
        <NearPlaces />
      </main>
    </>

  );
}

export default OfferScreen;
