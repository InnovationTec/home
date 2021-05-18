import React from "react";
import { GoogleMap, withSriptjs, withGoogleMap } from "react-google-maps";

const Map = (props) => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: -34.456, lng: 150.644 }}
    />
  );
};

export default withSriptjs(withGoogleMap(Map));
