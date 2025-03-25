declare module 'react-map-gl' {
  import * as React from 'react';
  
  export type ViewStateChangeInfo = {
    viewState: {
      longitude: number;
      latitude: number;
      zoom: number;
    };
  };
  
  interface MapGLProps {
    width: string | number;
    height: string | number;
    longitude: number;
    latitude: number;
    zoom: number;
    mapStyle?: string;
    mapboxApiAccessToken?: string;
    onMove?: (info: ViewStateChangeInfo) => void;
    children?: React.ReactNode;
  }

  interface MarkerProps {
    longitude: number;
    latitude: number;
    children?: React.ReactNode;
  }

  interface PopupProps {
    longitude: number;
    latitude: number;
    closeOnClick?: boolean;
    onClose?: () => void;
    children?: React.ReactNode;
  }
  
  export default function MapGL(props: MapGLProps): React.ReactElement;
  export function Marker(props: MarkerProps): React.ReactElement;
  export function Popup(props: PopupProps): React.ReactElement;
}

declare module 'react-map-gl/maplibre' {
  import * as React from 'react';
  
  export type ViewStateChangeInfo = {
    viewState: {
      longitude: number;
      latitude: number;
      zoom: number;
    };
  };
  
  interface MapProps {
    width: string | number;
    height: string | number;
    longitude: number;
    latitude: number;
    zoom: number;
    mapStyle?: string;
    onMove?: (info: ViewStateChangeInfo) => void;
    children?: React.ReactNode;
  }

  interface MarkerProps {
    longitude: number;
    latitude: number;
    children?: React.ReactNode;
  }

  interface PopupProps {
    longitude: number;
    latitude: number;
    closeOnClick?: boolean;
    onClose?: () => void;
    children?: React.ReactNode;
  }
  
  export default function Map(props: MapProps): React.ReactElement;
  export function Marker(props: MarkerProps): React.ReactElement;
  export function Popup(props: PopupProps): React.ReactElement;
} 