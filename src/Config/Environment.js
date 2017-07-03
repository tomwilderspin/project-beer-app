
/// holds const that are set per environment & their defaults

export const MAP_PINS_ENDPOINT = process.env.REACT_APP_MAP_PINS_ENDPOINT ?
  process.env.REACT_APP_MAP_PINS_ENDPOINT :
  'https://6zo0mp38k0.execute-api.eu-west-1.amazonaws.com/dev/map/pins';

export const GMAP_API_KEY = process.env.REACT_APP_GMAP_API_KEY ?
  process.env.REACT_APP_GMAP_API_KEY :
  null;
