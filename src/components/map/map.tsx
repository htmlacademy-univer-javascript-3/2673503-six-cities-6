import {City, Offer} from "@/api/types.ts";
import {Icon, layerGroup, Marker} from "leaflet";
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from "@/constants/url-markers.ts";
import {useEffect, useRef} from "react";
import useMap from "@/components/hooks/use-map.tsx";

interface MapProps {
  city: City
  offers: Offer[]
  selectedOffer: Offer | undefined
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export default function Map(props: MapProps): JSX.Element {
  const {city, offers, selectedOffer} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: city.location.latitude,
          lng: city.location.longitude
        });
        marker
          .setIcon(
            selectedOffer !== undefined && offer.title === selectedOffer.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOffer]);
  return <div className="cities__map map" style={{height: '500px'}} ref={mapRef}></div>;
}
