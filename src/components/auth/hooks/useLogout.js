// 추후에 API연동 예정. 우선은 localstorage삭제만 구현.
export function useLogout() {
  const logout = () => localStorage.removeItem('jwt_token');

  return { logout };
}
