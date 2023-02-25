import { Link } from 'react-router-dom';

function Button({ link, imgSrc, text }) {
  return (
    <Link to={link}>
      <span>
        <img src={imgSrc} alt={text} />
      </span>
      <span>{text}</span>
    </Link>
  );
}

export default Button;
