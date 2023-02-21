import './Input.scss';

function Input(props) {
  console.log(props);
  return <input className="common-input" {...props} />;
}

export default Input;
