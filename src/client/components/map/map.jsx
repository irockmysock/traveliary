import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import styles from './style.scss';

const mapStyles = {
  zIndex: '1',
  width: '90%',
  height: '20%',
  // display: 'block',
  // position: 'fixed !important',
};

export class MapContainer extends React.Component {
  

  render() {
    return (
        <Map
          google={this.props.google}
          zoom={8}
          
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBRNmSwd6j3o6DyxeEU64bMpnMR39xOvKA'
})(MapContainer);

