import { useRef, useState } from 'react';
import './EditProfile.scss';
import Input from 'components/auth/common/Input/Input';
import { useModal } from 'components/common/Modal/context/useModal';
import axios from 'axios';

function EditProfile() {
  const [selectFile, setSelectFile] = useState(null);
  const [isValidNickName, setIsValidNickName] = useState(null);
  const fileInput = useRef(null);
  const nickNameRef = useRef(null);
  const fileLabelInput = useRef(null);
  const { closeModal } = useModal();

  const handleFileChange = e => {
    fileLabelInput.current.value = fileInput.current.value;
    fileLabelInput.current.classList.add('active-input');

    const formData = new FormData();
    if (e.target.files) {
      const uploadFile = e.target.files[0];
      formData.append('file', uploadFile);
      setSelectFile(uploadFile);
    }
  };

  const handleFileOnClick = () => {
    fileInput.current.click();
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { value: nickname } = event.target.elements.nickname;
    const formData = new FormData();
    formData.append('nickname', nickname);
    formData.append('image', selectFile);
    const jwt = localStorage.getItem('jwt_token') || null;

    axios({
      method: 'patch',
      url: 'http://13.209.146.77:8082/mypage',
      data: formData,
      headers: {
        Authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
        enctype: 'multipart/form-data',
      },
    }).then(result => {
      console.log('요청성공');
      console.log(result);
    });
  };

  const nickNameHtml = () => {
    if (isValidNickName === null) return <span />;
    if (isValidNickName)
      return (
        <span className="nickname-available">사용가능한 닉네임 입니다.</span>
      );
    return (
      <span className="nickname-unavailable">사용할 수 없는 닉네임입니다.</span>
    );
  };

  const validateNickName = async event => {
    const jwt = localStorage.getItem('jwt_token') || null;
    const { value: inputValue } = event.target;

    const response = await axios({
      method: 'get',
      url: `http://13.209.146.77:8082/user/duplicate-check?nickName=${inputValue}`,
      headers: {
        Authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
    }).catch(err => {
      if (err.response?.status === 409) setIsValidNickName(false);
    });
    if (response?.status === 200) setIsValidNickName(true);
  };

  return (
    <div className="edit-profile-modal">
      <h2>프로필 수정</h2>
      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <span className="input-label">프로필 이미지</span>
        <div className="file-upload">
          <Input className="file-label-input" ref={fileLabelInput} disabled />
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
        />
        {nickNameHtml()}
        <div className="btn-wrapper">
          <button type="button" onClick={() => closeModal(EditProfile)}>
            취소
          </button>
          <button type="submit">확인</button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
