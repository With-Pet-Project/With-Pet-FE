// import { TOAST_MESSAGE } from '/src/components/common/Toast/toast';
// /// <reference types="Cypress"/>

// describe('회원가입 및 로그인', () => {
//   const ctx = {};

//   beforeEach(() => {
//     cy.task('db:seed');
//     // cy.intercept('POST', '/user/signup').as('signup');

//     cy.database('filter', 'users').then(users => {
//       ctx.users = users;
//     });

//     cy.visit(`${Cypress.env('baseUrl')}`);
//     cy.$('move-login-btn').click();
//     cy.location('pathname').should('equal', '/login');
//   });

//   // 일단보류
//   // it('회원가입을 한다.', () => {
//   //   cy.$('move-sign-up-btn').click();
//   //   cy.$('sign-up-id').type('cypress@test.com');
//   //   cy.$('sign-up-pwd').type('password123!');
//   //   cy.$('sign-up-pwd-check').type('password123!');
//   //   cy.$('sign-up-nickname').type('cypress new tester2');
//   //   cy.$('sign-up-submit').click();
//   //   // cy.wait('@signup');
//   // });

//   // jwt 부분은 나중에...
//   it('로그인을 한다.', () => {
//     const user = ctx.users[0];
//     cy.log(user);
//     cy.login(user.id, user.password);
//     // cy.login('cypress@test.com', 'password123!');

//     cy.location('pathname').should('equal', '/');
//     cy.$('side-bar-hamburger').trigger('mouseover');
//     cy.$('side-ber-profile-img').should('have.attr', 'src', user.profileImg);
//     cy.$('side-ber-nickname').should('have.text', user.nickname);
//     cy.$('side-ber-id').should('have.text', user.id);

//     cy.visit(`${Cypress.env('baseUrl')}`);
//     cy.$('move-login-btn').should('not.exist');
//   });

//   it('로그인시 잘못된 값을 입력하면 에러를 표출한다.', () => {
//     cy.login('incorrectId', 'incorrectPwd');
//     cy.get('.Toastify').should('have.text', TOAST_MESSAGE.INCORRECT_ID_PWD);
//   });

//   it('회원가입시 잘못된 값을 입력하면 에러를 표출한다.', () => {
//     cy.$('move-sign-up-btn').click();
//     cy.$('sign-up-id').type('cypress@test.com');
//     cy.$('sign-up-pwd').type('1234');
//     cy.$('sign-up-pwd-check').type('123');
//     cy.$('sign-up-nickname').type('dasom');

//     cy.$('pwd-check-fail').should('exist');
//     cy.$('sign-up-pwd-check').type('4');
//     cy.$('pwd-check-fail').should('not.exist');

//     cy.$('nickname-check-fail').should('exist');
//     cy.$('sign-up-nickname').clear();
//     cy.$('sign-up-nickname').type('cypress');
//     cy.$('sign-up-nickname').blur();
//     cy.$('nickname-check-fail').should('not.exist');
//   });
// });
