import './FloatButton.scss';

function FloatButton({ children, handleOnClick, cy }) {
  return (
    <button
      type="button"
      className="float-button"
      onClick={handleOnClick}
      data-cy={cy}
    >
      {children}
    </button>
  );
}

export default FloatButton;
