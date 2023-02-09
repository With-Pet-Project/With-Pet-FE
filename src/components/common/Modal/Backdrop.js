function Backdrop({ onClose }) {
  return (
    <div
      className="backdrop"
      onClick={onClose}
      onKeyDown={onClose}
      aria-hidden
    />
  );
}

export default Backdrop;
