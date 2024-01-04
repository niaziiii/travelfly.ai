"use client";
import React, { useEffect } from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  useMap,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, {
  LatLngExpression,
  DragEndEvent,
  DragEndEventHandlerFn,
} from "leaflet";

const icon = L.icon({
  iconUrl: "/images/osm-map-marker-brand.png",
  iconSize: [38, 38],
});

let defaultCoordinates: LatLngExpression = [
  -33.86842010104707, 151.20895378023386,
];

function ResetCenterView(props: { selectPosition: any }) {
  const { selectPosition } = props;
  const map = useMap();
  useEffect(() => {
    if (selectPosition) {
      defaultCoordinates = [selectPosition.lat, selectPosition.lng];
      const targetLatLng = L.latLng(selectPosition?.lat, selectPosition?.lng);
      map.panTo(targetLatLng, {
        duration: 1, // Duration of the animation in seconds
        animate: true, // Enable animation
      });
    }
  }, [selectPosition, map]);

  return null;
}

export default function OsmMap(props: any) {
  const { selectPosition, onPositionChange } = props;
  const draggableMarker = props.draggableMarker ?? true;
  const mapMarkers: any = props.mapMarkers ?? [];
  const locationSelection: LatLngExpression | undefined = selectPosition
    ? [selectPosition.lat, selectPosition.lng]
    : undefined;

  const handleMarkerDragEnd: DragEndEventHandlerFn = async (
    event: DragEndEvent
  ) => {
    const marker = event.target;
    const position = marker.getLatLng();
    onPositionChange && onPositionChange(position);
  };

  return (
    typeof window !== "undefined" && (
      <div style={{ height: 500 }} className="w-full">
        <MapContainer
          center={defaultCoordinates}
          zoom={15}
          style={{ width: "100%", height: "100%" }}
          zoomControl={false}
        >
          <ZoomControl position="bottomright" />

          <TileLayer
            attribution="Google Maps"
            url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
          />

          {mapMarkers.map((marker: any, index: any) => (
            <Marker
              key={index}
              position={[marker.lat, marker.lng]}
              icon={icon}
              draggable={draggableMarker}
              eventHandlers={{ dragend: handleMarkerDragEnd }}
            ></Marker>
          ))}

          {selectPosition && (
            <>
              <Marker
                position={locationSelection || defaultCoordinates}
                icon={icon}
                draggable={draggableMarker}
                eventHandlers={{ dragend: handleMarkerDragEnd }}
              ></Marker>
              {/* <ResetCenterView selectPosition={selectPosition} /> */}
            </>
          )}
        </MapContainer>
      </div>
    )
  );
}
