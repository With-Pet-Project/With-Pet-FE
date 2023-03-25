import { ReactElement } from 'react';
import { useModal } from 'components/common/Modal/context/useModal';
import { useDeleteUser } from '../../hooks/useDeleteUser';
import './DeleteUser.scss';

function DeleteUser(): ReactElement {
  const { closeModal } = useModal();
  const { mutate: deleteMutate } = useDeleteUser();

  const handleDelete = (): void => {
    deleteMutate();
    closeModal(DeleteUser);
  };

  return (
    <div className="withdrawal-wrapper">
      <h2>회원 탈퇴</h2>
      <h5>탈퇴시 주의사항</h5>
      <p>
        회원 탈퇴시 기존에 작성했던 게시글 및 펫 정보와 사진들은 모두
        삭제됩니다.
        <br />
        삭제한 데이터는 다시 복구할 수 없습니다.
        <br />
        <span className="accent">정말로 탈퇴하시겠습니까?</span>
      </p>
      <div className="btn-wrapper">
        <button type="button" onClick={() => closeModal(DeleteUser)}>
          취소
        </button>
        <button type="button" onClick={handleDelete}>
          탈퇴
        </button>
      </div>
    </div>
  );
}

export default DeleteUser;
