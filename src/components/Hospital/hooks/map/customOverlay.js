/* eslint-disable import/no-cycle */

const { kakao } = window;
let overlay;

export const setCustomOverlay = (title, placePosition, map) => {
  const $customOveray = `<div class="overlay" >${title}</div>`;

  overlay = new kakao.maps.CustomOverlay({
    content: $customOveray,
    map,
    position: placePosition,
  });
  overlay.setMap(null);
};

export const getCustomOverlay = () => {
  return overlay;
};
