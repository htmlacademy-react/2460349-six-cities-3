import { useEffect, useRef } from 'react';
import leaflet, { layerGroup, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { OfferDto } from '../../types/types';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import clsx from 'clsx';

interface Props {
  city: OfferDto['city'];
  offers: OfferDto[];
  activeOfferId: string | null;
  pageMain: boolean;
}

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
});

function Map({ city, offers, activeOfferId, pageMain }: Props) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            offer.id === activeOfferId ? currentCustomIcon : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeOfferId]);

  return (
    <section className={clsx(
      'map',
      { 'offer__map': !pageMain },
      { 'cities__map': pageMain }
    )}
    ref = { mapRef }
    >
    </section >
  );
}

export default Map;
