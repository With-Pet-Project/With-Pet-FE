/* eslint-disable import/no-cycle */

// infowindow 객체를 어디서 선언할지??
export const displayInfowindow = (infowindow, marker, title, map) => {
  const $content = `<div style="padding:5px;z-index:1;">${title}</div>`;

  infowindow.setContent($content);
  infowindow.open(map, marker);
};
