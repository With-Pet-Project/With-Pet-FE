import { useRef, useState, ReactElement } from 'react';
import Input from 'components/auth/common/Input/Input';
import { useModal } from 'components/common/Modal/context/useModal';
import { isValidateNickName } from 'lib/APIs/profile';
import { useUpdateProfile } from '../../hooks/useUpdateProfile';
import './EditProfile.scss';

function EditProfile(): ReactElement {
  const [selectFile, setSelectFile] = useState(null);
  const [isValidNickName, setIsValidNickName] = useState(null);
  const fileInput = useRef(null);
  const nickNameRef = useRef(null);
  const fileLabelInput = useRef(null);
  const { closeModal } = useModal();
  const profileUpdate = useUpdateProfile();

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    fileLabelInput.current.value = fileInput.current.value;
    fileLabelInput.current.classList.add('active-input');

    if (event.target.files) {
      const uploadFile = event.target.files[0];
      setSelectFile(uploadFile);
    }
  };

  const handleFileOnClick = (): void => {
    fileInput.current.click();
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { value: nickname } = event.target.elements.nickname;
    const formData = new FormData();
    if (nickname) formData.append('nickName', nickname);
    formData.append('images', selectFile);

    profileUpdate(formData);
    closeModal(EditProfile);
  };

  const nickNameHtml = (): ReactElement => {
    if (isValidNickName === null) return null;
    if (isValidNickName === false)
      return (
        <span className="nickname-unavailable" data-cy="nickname-unavailable">
          사용할 수 없는 닉네임입니다.
        </span>
      );
    return (
      <span className="nickname-available" data-cy="nickname-available">
        사용가능한 닉네임 입니다.
      </span>
    );
  };

  const validateNickName = async event => {
    const { value } = event.target;
    const isValid = await isValidateNickName(value);
    setIsValidNickName(isValid);
  };

  return (
    <div className="edit-profile-modal">
      <h2>프로필 수정</h2>
      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <span className="input-label">프로필 이미지</span>
        <div className="file-upload">
          <Input
            type="text"
            className="file-label-input"
            ref={fileLabelInput}
            disabled
          />
          <Input
            type="file"
            accept="image/*"
            className="file-input"
            name="profileImg"
            ref={fileInput}
            onChange={handleFileChange}
          />
          <button
            type="button"
            className="image-submit-btn"
            onClick={handleFileOnClick}
            data-cy="profile-img-submit"
          >
            등록
          </button>
        </div>
        <label className="input-label" htmlFor="nickname" ref={nickNameRef}>
          닉네임
        </label>
        <Input
          type="text"
          name="nickname"
          placeholder="닉네임을 입력하세요"
          onBlur={validateNickName}
          isRequired={false}
          cy="profile-edit-nickname"
        />
        {nickNameHtml()}
        <div className="btn-wrapper">
          <button type="button" onClick={() => closeModal(EditProfile)}>
            취소
          </button>
          <button type="submit" data-cy="profile-edit-submit">
            확인
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
