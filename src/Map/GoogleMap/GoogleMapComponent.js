import React, { Component } from 'react';
import GoogleMapsLoader from 'google-maps';
import PropTypes from 'prop-types';
import './GoogleMap.css';
import mapStyles from './dark.mapStyle';

class GoogleMap extends Component {

  static propTypes() {
  	return {
      centerLat:  PropTypes.number.isRequired,
      centerLong: PropTypes.number.isRequired,
      initZoom:   PropTypes.number.isRequired,
      markerData: React.PropTypes.object.isRequired,
      mapKey:     PropTypes.string.isRequired
    };
  }

	render() {
    return <div className="GMap">
      <div className='GMap-canvas' ref="mapCanvas">
      </div>
    </div>
  }

  componentDidMount() {

    //create new google map api
    this.loadGoogleApi()
      .then(googleApi => {

        //get map options
        const mapOptions = {
          centerPosition: this.createMapPosition(
            googleApi,
            this.props.centerLat,
            this.props.centerLong
          ),
          zoom: this.props.initZoom,
        };

        //new map instance
        const map = this.createMap(googleApi, mapOptions, this.refs.mapCanvas);

        //style map with custom styles
        const mapStyle = this.createMapStyle(googleApi, mapStyles, 'night');
        map.mapTypes.set('night', mapStyle);
        map.setMapTypeId('night');

        //map.addListener('zoom_changed', this.handleZoomChange(map));
        this.map = map;
        this.googleApi = googleApi;
      });
  }

  // clean up event listeners when component unmounts
  componentDidUnMount() {
    //this.googleApi.map.clearListeners(this.map, 'zoom_changed')
  }

  loadGoogleApi(key) {
    return new Promise(resolve => {
      GoogleMapsLoader.KEY = key;
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
