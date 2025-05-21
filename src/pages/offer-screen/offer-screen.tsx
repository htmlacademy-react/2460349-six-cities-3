import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { useAppDispatch, useAppSelector } from '../../store';
import { useEffect } from 'react';
import { fetchOfferComments, fetchOffer, fetchNearby } from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import NearPlaces from './components/near-places';
import { selectCurrentOffer, selectOfferLoading } from '../../store/offers-slice/offers-selectors';
import OfferDetails from './components/offer-details';

function OfferScreen() {
  const { id: offerId } = useParams();
  const dispatch = useAppDispatch();

  const offer = useAppSelector(selectCurrentOffer);
  const isOfferDataLoading = useAppSelector(selectOfferLoading);

  useEffect(() => {
    if (offerId) {
      dispatch(fetchOffer(offerId));
      dispatch(fetchOfferComments(offerId));
      dispatch(fetchNearby(offerId));
    }
  }, [dispatch, offerId]);

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
        <OfferDetails />
        <NearPlaces />
      </main>
    </>

  );
}

export default OfferScreen;
