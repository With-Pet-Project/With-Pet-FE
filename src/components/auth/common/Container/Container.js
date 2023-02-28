import './Container.scss';

function Container({ children }) {
  return (
    <div className="auth-container">
      <div className="auth-inner background">
        <div className="form-wrapper">{children}</div>
      </div>
    </div>
  );
}

export default Container;
