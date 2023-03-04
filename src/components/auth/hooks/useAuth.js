// import CLIENT from 'lib/APIs/client';
// import { queryKeys, QUERY_KEY } from 'lib/reactQuery/queryKeys';
// import { useQueryClient } from '@tanstack/react-query';

export function useAuth() {
  //   const queryClient = useQueryClient();
  //   async function authServerCall(urlEndpoint, email, password) {
  //     try {
  //       const { data, status } = await CLIENT({
  //         url: urlEndpoint,
  //         method: 'POST',
  //         data: { email, password },
  //         headers: { 'Content-Type': 'application/json' },
  //       });
  //       // console.log(JSON.stringify(response, null, '\t'));
  //       console.log(data.body);
  //       console.log(status);
  //       console.log({ token: data.body.token });
  //       if (status === 400) {
  //         const title = 'message' in data ? data.message : 'Unauthorized';
  //         console.error(title);
  //         return;
  //       }
  //       // // updateUser(data);
  //       queryClient.setQueryData(queryKeys.userTest, {
  //         email,
  //         token: data.body.token,
  //       });
  //     } catch (error) {
  //       console.log(error);
  //       alert('아이디 또는 비밀번호를 잘못 입력했습니다.');
  //     }
  //   }
  //   async function signin(email, password) {
  //     authServerCall('/user', email, password);
  //   }
  //   return {
  //     signin,
  //   };
}
