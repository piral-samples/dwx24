import * as React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useMachineData } from './hooks';
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

export interface MapProps {}

const Map: React.FC<MapProps> = () => {
  const lat = 48.095767;
  const lng = 11.523864;
  const zoom = 18;
  const position: [number, number] = [lat, lng];
  const devices = useMachineData();

  return (
    <div className="map">
      <MapContainer center={position} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
        />
        {devices.map((device) => (
          <Marker position={[device.location.latitude, device.location.longitude]} key={device.id} />
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
