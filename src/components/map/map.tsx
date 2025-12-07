import {Offer} from '@/api/types.ts';
import 'leaflet/dist/leaflet.css';
import {Icon, layerGroup, Marker} from 'leaflet';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '@/constants/url-markers.ts';
import {useEffect, useRef} from 'react';
import useMap from '@/components/hooks/use-map.tsx';
import {useAppSelector} from '@/components/hooks/use-app-selector.tsx';

interface MapProps {
  offers: Offer[];
}

const defaultOfferIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const selectedOfferIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export default function Map({offers}: MapProps): JSX.Element {
  const selectedOffer = useAppSelector((state) => state.selectedOffer);
  const selectedCity = useAppSelector((state) => state.city);

  const mapRef = useRef(null);
  const map = useMap(mapRef, selectedCity);
  useEffect(() => {
    if (map) {
      map.setView([selectedCity.location.latitude, selectedCity.location.longitude], selectedCity.location.zoom);
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.city.location.latitude,
          lng: offer.city.location.longitude
        });
        marker
          .setIcon(
            selectedOffer !== undefined && offer.id === selectedOffer.id
              ? selectedOfferIcon
              : defaultOfferIcon
          )
          .addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOffer, selectedCity]);
  return <div style={{height: '100%', width: '100%'}} ref={mapRef}></div>;
}
