import React, { Component } from 'react';
import GoogleMapsLoader from 'google-maps';
import './GoogleMap.css';
import mapStyles from './dark.mapStyle';

import { GOOGLE_MAPS_KEY } from '../Config/ClientKeys'

GoogleMapsLoader.KEY = GOOGLE_MAPS_KEY;

class GoogleMap extends Component {

  state = { zoom: 10 };

  static propTypes() {
  	return {
      initialCenter: React.PropTypes.objectOf(React.PropTypes.number).isRequired
    };
  }

	render() {
    return <div className="GMap">
      <div className='UpdatedText'>
        <p>Current Zoom: { this.state.zoom }</p>
      </div>
      <div className='GMap-canvas' ref="mapCanvas">
      </div>
    </div>
  }

  componentDidMount() {

    this.loadGoogleApi()
      .then(googleApi => {

        const mapOptions = {
          lat: 53.791601,
          long: -1.662073,
          centerPosition: this.createMapPosition(
            googleApi,
            53.791601,
            -1.662073
          ),
          zoom: 10,
        };

        const map = this.createMap(googleApi, mapOptions, this.refs.mapCanvas);

        const marker = this.createMarker(
          googleApi,
          map,
          this.createMapPosition(
            googleApi,
            53.791601,
            -1.662073
          )
        );

        const mapStyle = this.createMapStyle(googleApi, mapStyles, 'night');

        this.createInfoWindow(
          googleApi,
          map,
          marker
        );

        map.addListener('zoom_changed', this.handleZoomChange(map));
        map.mapTypes.set('night', mapStyle);
        map.setMapTypeId('night');


        this.map = map;
        this.googleApi = googleApi;


      });
  }

  // clean up event listeners when component unmounts
  componentDidUnMount() {
    this.googleApi.map.clearListeners(this.map, 'zoom_changed')
  }

  loadGoogleApi() {
    return new Promise(resolve => {
      GoogleMapsLoader.load(google => resolve(google));
    });
  }

  createMapStyle(googleApi, styles, name) {
    return new googleApi.maps.StyledMapType(
      styles,
      { name }
    );
  }

  createMap(googleApi, mapOptions, canvas) {

    const mapConfig = {
      zoom: mapOptions.zoom,
      center: mapOptions.centerPosition
    };

    return new googleApi.maps.Map(canvas, mapConfig);
  }

  createMapPosition(googleApi, lat, long) {
    return new googleApi.maps.LatLng(lat, long)
  }

  createMarker(googleApi, map, position) {
    return new googleApi.maps.Marker({
      position: position,
      map: map
    });
	};

  createInfoWindow(googleApi, map, marker) {
    const contentString = "<div class='InfoWindow'>I'm a Window that contains Info Yay</div>"
    return new googleApi.maps.InfoWindow({
      map,
      anchor: marker,
      content: contentString
    })
  }

  handleZoomChange(map) {

    const setZoom = function() {
      return this.setState({
        zoom: map.getZoom()
      });
    }.bind(this);

    return setZoom;
  }
}

export default GoogleMap;
