import 'leaflet/dist/leaflet.css';
import {Icon, layerGroup, Marker} from 'leaflet';
import {URL_PIN_ACTIVE, URL_PIN} from '@/constants/url-markers.ts';
import {useEffect, useRef} from 'react';
import useMap from '@/components/hooks/use-map.tsx';
import {Location, Offer} from '@/types/api.ts';

interface MapProps {
  location: Location;
  selectedOffer: Offer | undefined;
  offers: Offer[];
}

const defaultOfferIcon = new Icon({
  iconUrl: URL_PIN,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const selectedOfferIcon = new Icon({
  iconUrl: URL_PIN_ACTIVE,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export default function Map({location, selectedOffer, offers}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);
  useEffect(() => {
    if (map) {
      map.setView([location.latitude, location.longitude], location.zoom);
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });
        marker
          .setIcon(
            offer.id === selectedOffer?.id
              ? selectedOfferIcon
              : defaultOfferIcon
          )
          .addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, location, selectedOffer, offers]);
  return <div style={{height: '100%', width: '100%'}} ref={mapRef}></div>;
}
