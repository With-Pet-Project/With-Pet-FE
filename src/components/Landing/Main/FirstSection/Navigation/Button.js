function Button({ imgSrc, text, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      <span>
        <img src={imgSrc} alt={text} />
      </span>
      <span>{text}</span>
    </button>
  );
}

export default Button;
