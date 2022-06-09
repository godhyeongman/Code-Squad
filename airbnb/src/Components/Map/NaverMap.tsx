import { coords } from '@/mocks/coord';
import { useEffect } from 'react';
import { renderToString } from 'react-dom/server';
import { PriceMarker } from './PriceMarker';

declare global {
  interface Window {
    naver: any;
  }
}
interface NaverMapProps {
  width: string;
  height: string;
}

export function NaverMap({ width, height }: NaverMapProps) {
  useEffect(() => {
    const { naver } = window;
    const mapOptions = {
      center: new naver.maps.LatLng(37.491, 127.0339),
      zoom: 17,
    };
    const map = new naver.maps.Map('map', mapOptions);

    function makePriceMarker(
      targetMap: object,
      {
        latitude,
        longitude,
        title,
        price,
      }: { latitude: number; longitude: number; title: string; price: number },
    ) {
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(latitude, longitude),
        map: targetMap,
        title,
        icon: {
          content: renderToString(<PriceMarker price={price} />),
          size: new naver.maps.Size(1, 1),
          anchor: new naver.maps.Point(19, 58),
        },
      });
    }
    coords.forEach(coord => makePriceMarker(map, coord));
  }, []);
  return (
    <div>
      <div id="map" style={{ width, height }} />
    </div>
  );
}
