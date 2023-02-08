/* eslint-disable import/no-cycle */

export const displayInfowindow = (infowindow, marker, title, map) => {
  const $content = `<div style="padding:5px;z-index:1;">${title}</div>`;

  infowindow.setContent($content);
  infowindow.open(map, marker);
};
