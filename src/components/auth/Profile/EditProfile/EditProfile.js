import './EditProfile.scss';
import { useRef } from 'react';
import Input from 'components/auth/Input/Input';

function EditProfile() {
  const fileInput = useRef(null);
  const fileLabelInput = useRef(null);

  const handleFileChange = () => {
    fileLabelInput.current.value = fileInput.current.value;
    fileLabelInput.current.classList.add('active-input');
  };

  const handleFileOnClick = () => {
    fileInput.current.click();
  };

  return (
    <div className="edit-profile-modal">
      <h2>프로필 수정</h2>
      <form className="edit-profile-form">
        <span className="input-label">프로필 이미지</span>
        <div className="file-upload">
          <Input className="file-label-input" ref={fileLabelInput} disabled />
          <Input
            type="file"
            accept="image/*"
            className="file-input"
            ref={fileInput}
            onChange={handleFileChange}
          />
          <button
            type="button"
            className="image-submit-btn"
            onClick={handleFileOnClick}
          >
            등록
          </button>
        </div>
        <label className="input-label" htmlFor="nickname">
          닉네임
        </label>
        <Input type="text" id="nickname" placeholder="닉네임을 입력하세요" />
        <span className="nickname-available">사용가능한 닉네임 입니다.</span>
        <div className="btn-wrapper">
          <button type="button">취소</button>
          <button type="submit">확인</button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
