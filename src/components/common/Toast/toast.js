import { toast } from 'react-toastify';

// const loadingToast = id => {
//   toast('로딩중입니다', {
//     toastId: id,
//     hideProgressBar: true,
//     position: toast.POSITION.BOTTOM_CENTER,
//   });
// };

export const TOAST_OPTION = {
  autoClose: 1000,
  position: toast.POSITION.BOTTOM_CENTER,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  pauseOnFocusLoss: false,
  draggable: true,
};

export const TOAST_MESSAGE = {
  Add_SUCCESS: '추가되었습니다',
  ADD_FAIL: '추가에 실패하였습니다.',
  DELETE_SUCCESS: '삭제되었습니다',
  DELETE_FAIL: '삭제에 실패하였습니다.',
  UPDATE_SUCCESS: '수정되었습니다',
  UPDATE_FAIL: '수정에 실패하였습니다.',
  CANNOT_GET_DATA: '데이터를 가져오지 못했습니다!',
  LOGIN_FAIL: '로그인에 실패했습니다. 잠시 후 다시 시도해주세요.',
};
