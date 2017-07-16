//commands
export const FETCH_MAP_PINS = "FETCH_MAP_PINS";

//events
export const RECEIVED_MAP_PINS = "RECEIVED_MAP_PINS";
export const MAP_PIN_CLICK = "MAP_PIN_CLICK";


export function fetchMapPins() {
  return {
    type: FETCH_MAP_PINS
  };
}

export function mapPinClick(pinId) {
  return {
    type: MAP_PIN_CLICK,
    data: { id: pinId }
  }
}
