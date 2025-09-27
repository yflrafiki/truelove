'use client';

import { APIProvider, Map as GoogleMap, AdvancedMarker } from '@vis.gl/react-google-maps';

interface MapProps {
  apiKey: string;
}

export default function Map({ apiKey }: MapProps) {
  const position = { lat: 34.052235, lng: -118.243683 }; // Default to Los Angeles

  return (
    <APIProvider apiKey={apiKey}>
        <GoogleMap
          defaultCenter={position}
          defaultZoom={15}
          mapId="sanctuary-hub-map"
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        >
            <AdvancedMarker position={position} />
        </GoogleMap>
    </APIProvider>
  );
}
