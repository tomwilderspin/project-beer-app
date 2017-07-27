//commands
export const OPEN_CONTENT = "OPEN_CONTENT";
export const EDIT_CONTENT = "EDIT_CONTENT";
export const CLAIM_CONENT = "CLAIM_CONTENT";

//events
export const RECEIVED_CONTENT_DATA = "RECEIVED_CONTENT_DATA";
export const FETCH_CONTENT_DATA_ERROR = "FETCH_CONTENT_DATA_ERROR";
export const FETCH_CONTENT_DATA = "FETCH_CONTENT_DATA";

export const CONTENT_CONTAINER_CLOSED = "CONTENT_CONTAINER_CLOSED";
export const CONTENT_LINK_CLICK = "CONTENT_LINK_CLICK";
export const CONTENT_MEDIA_INTERACT = "CONETENT_MEDIA_INTERACT";

export function openContent(contentId) {
  return {
    type: OPEN_CONTENT,
    data: contentId
  }
}

export function closeContent() {
  return {
    type: CONTENT_CONTAINER_CLOSED
  }
}
