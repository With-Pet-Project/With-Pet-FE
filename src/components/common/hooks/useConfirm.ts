const useConfirm = (onConfirm, message = null) => {
  if (!onConfirm || typeof onConfirm !== 'function') return null;

  return () => {
    if (window.confirm(message)) onConfirm();
  };
};

export default useConfirm;
