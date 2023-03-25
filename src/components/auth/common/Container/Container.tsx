import { ReactElement } from 'react';
import './Container.scss';

function Container({ children }: any): ReactElement {
  return (
    <div className="auth-container">
      <div className="auth-inner background">
        <div className="form-wrapper">{children}</div>
      </div>
    </div>
  );
}

export default Container;
