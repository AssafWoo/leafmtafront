import { Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import React from "react";
import { icon } from "leaflet";
import MarkerIcon from "../../Assets/images/marker.png";
import { MapWrapper, StyledMapContainer } from "./style";

const MapComponent = ({ offsets, format, lat, lng, zoom = 2 }) => {
  const ICON = icon({
    iconUrl: MarkerIcon,
    iconSize: [25, 40],
  });
  if (format === "single") {
    return (
      <MapWrapper>
        <StyledMapContainer
          center={[Number(lat), Number(lng)]}
          zoom={zoom}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker icon={ICON} position={[Number(lat), Number(lng)]} />
        </StyledMapContainer>
      </MapWrapper>
    );
  }
  return (
    <MapWrapper>
      <StyledMapContainer
        center={[34.32432, 32.2432]}
        zoom={1}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {offsets.map((offset) => (
          <>
            <Marker
              icon={ICON}
              position={[Number(offset.lat), Number(offset.lng)]}
            />
          </>
        ))}
      </StyledMapContainer>
    </MapWrapper>
  );
};

export default React.memo(MapComponent);
