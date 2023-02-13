function ModalContent({ children }) {
  const { className, child } = children;
  return <div className={`modal ${className}`}>{child}</div>;
}

export default ModalContent;
