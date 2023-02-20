import './FloatButton.scss';

function FloatButton({ children, handleOnClick }) {
  return (
    <button type="button" className="float-button" onClick={handleOnClick}>
      {children}
    </button>
  );
}

export default FloatButton;
