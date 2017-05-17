
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchMapPins } from './Actions';

import GoogleMapComponent from './GoogleMap/GoogleMapComponent';

class MapContainer extends Component {

  static propTypes() {
    return {
      centerPosition: PropTypes.shape({
        lat: PropTypes.number,
        long: PropTypes.number
      }).isRequired,
      zoomLevel: PropTypes.number.isRequired,
      getMapPins: PropTypes.func.isRequired,
      mapPins: PropTypes.object,
      mapKeyRequired: PropTypes.bool,
      mapKey: PropTypes.string
    }
  }

  componentDidMount() {
    this.props.getMapPins();
  }

  render() {

    const mapCenter = this.props.centerPosition;

    const mapZoom = this.props.zoomLevel;

    return <GoogleMapComponent
    centerLat={mapCenter.lat}
    centerLong={mapCenter.long}
    initZoom={mapZoom}
    markerData={this.props.mapPins}
    mapKey={this.props.mapKey}
    />
  }
}

//redux connect
const mapStateToProps = state => {

  return {
    centerPosition: state.map.initLocation,
    zoomLevel: state.map.initZoom,
    mapKeyRequired: state.map.hasKey,
    mapKey: state.map.key,
    mapPins: state.map.pins
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMapPins: () => {
      return dispatch(fetchMapPins())
    },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
