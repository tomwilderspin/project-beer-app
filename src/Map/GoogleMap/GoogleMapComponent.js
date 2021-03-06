import React, { Component } from 'react';
import GoogleMapsLoader from 'google-maps';
import PropTypes from 'prop-types';
import './GoogleMap.css';
import mapStyles from './silver.mapStyle';
import defaultMarkerImage from '../default-marker-icon.png';
import defaultClusterImage from '../default-cluster-icon.png';
import MarkerClusterer from './MarkerClusterer';
import { GMAP_API_KEY } from '../../Config/Environment';


class GoogleMap extends Component {

  static propTypes() {
  	return {
      centerLat:  PropTypes.number.isRequired,
      centerLong: PropTypes.number.isRequired,
      initZoom:   PropTypes.number.isRequired,
      markerData: PropTypes.object.isRequired
    };
  }

	render() {
    this.updateMapMarkers(this.props.markerData);

    return <div className="GMap">
      <div className='GMap-canvas' ref="mapCanvas">
      </div>
    </div>
  }

  componentDidMount() {

    //create new google map api
    this.loadGoogleApi(GMAP_API_KEY)
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
        const mapStyle = this.createMapStyle(googleApi, mapStyles, 'custom');
        map.mapTypes.set('custom', mapStyle);
        map.setMapTypeId('custom');

        //map.addListener('zoom_changed', this.handleZoomChange(map));
        this.map = map;
        this.googleApi = googleApi;
      });
  }

  // clean up event listeners when component unmounts
  componentDidUnMount() {
    //this.googleApi.map.clearListeners(this.map, 'zoom_changed')
  }

  updateMapMarkers(markerData) {

    if (!markerData.hasOwnProperty('pins')) {
      return [];
    }

    const pinDefaults = {
      imageSrc: defaultMarkerImage,

    };

    const markers = markerData.pins.map(pin => {

      const params = {...pinDefaults, markerId: pin.title };

      return this.createCustomMarker(
        this.googleApi,
        this.map,
        this.createMapPosition(
          this.googleApi,
          pin.latitude,
          pin.longitude
        ),
        {
          markerId: pin.title,
          markerElement: this.createCustomerMarkerContent(params)
        }
      );
    });

    //add marker clustering
    new MarkerClusterer(this.map, markers, {
        minimumClusterSize: 6,
        styles: [{
          url: defaultClusterImage,
          width: 32,
          height: 32,
          textColor: '#fff',
          textSize: 13,
          anchor: [16, 13],
        }]
      });
  }

  createCustomerMarkerContent(pinData) {
    const image = document.createElement('img');
    image.src =  pinData.imageSrc;
    image.alt = pinData.markerId;
    image.style.width = '32px';
    image.style.height = '32px';
    image.style.cursor = 'pointer';

    const outer = document.createElement('div');
    outer.appendChild(image);

    //add click listener to marker content
    outer.addEventListener('click', event => {
      this.props.markerData.clickAction(pinData.markerId);
    });

    return outer;
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
      center: mapOptions.centerPosition,
      disableDefaultUI: true,
      zoomControl: true,
      clickableIcons: false,
      zoomControlOptions: {
        position: googleApi.maps.ControlPosition.RIGHT_BOTTOM
      }
    };

    return new googleApi.maps.Map(canvas, mapConfig);
  }

  createMapPosition(googleApi, lat, long) {
    return new googleApi.maps.LatLng(lat, long)
  }

  createMarker(googleApi, map, position, title) {
    return new googleApi.maps.Marker({
      position: position,
      map: map,
      title: title
    });
	};

  createCustomMarker(googleApi, map, position, args) {

    let self;

    function overlayView (position, map, args) {
      this.position = position;
      this.args = args;
      this.setMap(map);
      self = this;
    };

    overlayView.prototype = new googleApi.maps.OverlayView();

    overlayView.prototype.draw = () => {
      let contentContainer = self.contentContainer;

      if (!contentContainer) {

        contentContainer = self.contentContainer = document.createElement('div');

        //poc content - replace with styled marker css
        contentContainer.className = 'map-marker-container';
        contentContainer.style.position = 'absolute';
        contentContainer.style.width = '32px';
        contentContainer.style.height = '32px';
        contentContainer.style.display = 'block';
        contentContainer.appendChild(self.args.markerElement);
        ///

        //check if marker id is set
        if (self.args.hasOwnProperty('marker_id')) {
            contentContainer.dataset.marker_id = self.args.marker_id;
        }

        //add marker click listener
        googleApi.maps.event.addDomListener(contentContainer, 'click', (event) => {
          googleApi.maps.event.trigger(self.args, 'click');
        });

        //add to map panes
        const panes = self.getPanes();
        panes.overlayMouseTarget.appendChild(contentContainer);
      }

      //set marker position on map titles
      const point = self.getProjection().fromLatLngToDivPixel(position);

      if (point) {
        contentContainer.style.left = point.x + 'px';
        contentContainer.style.top  = point.y + 'px';
      }
    };

    overlayView.prototype.onRemove = () => {
      self.contentContainer.parentNode.removeChild(self.contentContainer);
      self.contentContainer = null;
    };

     overlayView.prototype.getPosition = () => {
      return self.position;
    };

    overlayView.prototype.setVisible = (visible) => {
      if (self.contentContainer.style.display === 'none') {
        self.contentContainer.style.display = 'block';
      } else {
        self.contentContainer.style.display = 'none';
      }
    };

    return new overlayView(position, map, args);
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
