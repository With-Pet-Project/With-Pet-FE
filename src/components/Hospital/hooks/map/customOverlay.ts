/* eslint-disable import/no-cycle */

const { kakao } = window;
let overlay: any;
let overlayList: any[] = [];

export const setCustomOverlay = (title, placePosition, map) => {
  const $customOveray = `<div class="overlay" >${title}</div>`;

  overlay = new kakao.maps.CustomOverlay({
    content: $customOveray,
    map,
    position: placePosition,
  });
  overlay.setMap(null);
  if (overlayList !== null) {
    overlayList = [...overlayList, overlay];
  }
};

export const getCustomOverlay = () => {
  return overlay;
};
