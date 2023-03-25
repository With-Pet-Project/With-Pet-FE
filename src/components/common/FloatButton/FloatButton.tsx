import { ReactElement } from 'react';
import './FloatButton.scss';

interface FloatButtonProps {
  children: JSX.Element;
  handleOnClick: (event: React.SyntheticEvent) => void;
  cy: string;
}

function FloatButton({
  children,
  handleOnClick,
  cy,
}: FloatButtonProps): ReactElement {
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
