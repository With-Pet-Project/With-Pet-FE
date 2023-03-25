export const ERROR_MESSAGE = {
  GEOLOCATION: {
    PERMISSION_DENIED: '사용자가 Geolocation API의 사용 요청을 거부했습니다.',
    POSITION_UNAVAILABLE: '가져온 위치 정보를 사용할 수 없습니다.',
    TIMEOUT: '요청이 허용 시간을 초과했습니다.',
    UNKNOWN_ERROR: '알수 없는 오류가 발생했습니다.',
  },

  KAKAO_MAP: {
    ZERO_RESULT: '검색 결과가 존재하지 않습니다.',
    ERROR: '검색 결과 중 오류가 발생했습니다.',
  },

  VALIDATION: {
    NOT_CORRECT_PASSWORD: '비밀번호와 비밀번호 확인이 일치하지 않습니다.',
    MALFUNCTION_ID: '아이디는 이메일 형식이어야 합니다.',
    MALFUNCTION_PWD:
      '비밀번호는 8글자 이상의 문자, 숫자, 특수문자를 포함해야합니다.',
    NICKNAME_EXIST: '이미 존재하는 닉네임입니다. 다시 입력해주세요.',
  },
};
