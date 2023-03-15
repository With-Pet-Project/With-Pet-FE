// /* eslint-disable testing-library/await-async-utils */
// /// <reference types="Cypress"/>

// describe('회원가입 및 로그인', () => {
//   const ctx = {};

//   beforeEach(() => {
//     cy.task('db:seed');
//     cy.intercept('POST', '/login').as('login');
//     cy.database('filter', 'users').then(users => {
//       ctx.allUsers = users;
//     });

//     cy.visit(`${Cypress.env('baseUrl')}`);
//     cy.$('move-login-btn').click();
//     cy.location('pathname').should('equal', '/login');
//   });

//   const user = {
//     id: 'test1@test.com',
//     password: '1234',
//     profileImg:
//       'https://with-pet-test.s3.ap-northeast-2.amazonaws.com/ad5993be-72e1-4c9d-962e-7b759ef2debe.jpg',
//     nickname: '시바견주',
//   };

//   const incorrectUser = {
//     id: 'aaa@test.com',
//     password: '1234',
//   };

//   // it('회원가입을 한다.', () => {});

//   it('로그인을 한다.', () => {
//     cy.log(ctx.allUsers);
//     cy.$('login-id-input').type('cy2@test.com');
//     cy.$('login-pwd-input').type('1234');
//     cy.$('login-btn').click();
//     cy.wait('@login');
//     // cy.location('pathname').should('equal', '/');
//     // cy.$('side-bar-hamburger').trigger('mouseover');
//     // cy.$('side-ber-profile-img').should('have.attr', 'src', user.profileImg);
//     // cy.$('side-ber-nickname').should('have.text', user.nickname);
//     // cy.$('side-ber-id').should('have.text', user.id);

//     // cy.visit(`${Cypress.env('baseUrl')}`);
//     // cy.$('move-login-btn').should('not.exist');
//   });
//   // it('로그인을 한다.', () => {
//   //   cy.$('login-id-input').type(user.id);
//   //   cy.$('login-pwd-input').type(user.password);
//   //   cy.$('login-btn').click();
//   //   // /login이 호출된다. -> api
//   //   // 200 status가 호출된다. -> api
//   //   // localstorage에 token이 저장된다 -> api
//   //   cy.location('pathname').should('equal', '/');
//   //   cy.$('side-bar-hamburger').trigger('mouseover');
//   //   cy.$('side-ber-profile-img').should('have.attr', 'src', user.profileImg);
//   //   cy.$('side-ber-nickname').should('have.text', user.nickname);
//   //   cy.$('side-ber-id').should('have.text', user.id);

//   //   cy.visit(`${Cypress.env('baseUrl')}`);
//   //   cy.$('move-login-btn').should('not.exist');
//   // });

//   // it('로그인시 잘못된 값을 입력하면 에러를 표출한다.', () => {
//   //   // 아이디와 비밀번호가 일치해야 한다.
//   //   cy.$('login-id-input').type(incorrectUser.id);
//   //   cy.$('login-pwd-input').type(incorrectUser.password);
//   //   cy.$('login-btn').click();
//   //   // alert : 아이디 또는 비밀번호를 잘못 입력했습니다 -> 나중에 toast로 바꾸기
//   // });

//   // it('회원가입시 잘못된 값을 입력하면 에러를 표출한다.', () => {
//   //   cy.$('move-sign-up-btn').click();
//   //   cy.$('sign-up-id').type('cypress@test.com');
//   //   cy.$('sign-up-pwd').type('1234');
//   //   cy.$('sign-up-pwd-check').type('123');
//   //   cy.$('sign-up-nickname').type('dasom');

//   //   cy.$('pwd-check-fail').should('exist');
//   //   cy.$('sign-up-pwd-check').type('4');
//   //   cy.$('pwd-check-fail').should('not.exist');

//   //   cy.$('nickname-check-fail').should('exist');
//   //   cy.$('sign-up-nickname').clear();
//   //   cy.$('sign-up-nickname').type('cypress');
//   //   cy.$('sign-up-nickname').blur();
//   //   cy.$('nickname-check-fail').should('not.exist');
//   // });
// });
