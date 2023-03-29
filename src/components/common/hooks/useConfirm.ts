import { MutateOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

type ConfirmType = (
  variables: void,
  options?:
    | MutateOptions<AxiosResponse<any, any>, unknown, void, unknown>
    | undefined,
) => void;

const useConfirm = (
  onConfirm: ConfirmType,
  message: string | undefined,
): ConfirmType | null => {
  if (!onConfirm || typeof onConfirm !== 'function') return null;

  return () => {
    if (window.confirm(message)) onConfirm();
  };
};

export default useConfirm;
