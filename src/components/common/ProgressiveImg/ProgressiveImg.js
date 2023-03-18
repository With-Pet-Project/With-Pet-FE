import './ProgressiveImg.scss';
import { useState } from 'react';

function ProgressiveImg({ placeholderSrc, imgSrc, alt }) {
  const [src, setSrc] = useState(placeholderSrc, imgSrc);

  return (
    <img
      src={src}
      alt={alt}
      className={src === imgSrc ? '' : 'progressive-img'}
      onLoad={() => setSrc(imgSrc)}
    />
  );
}

export default ProgressiveImg;
