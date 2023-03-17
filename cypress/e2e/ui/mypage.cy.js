const url = `${Cypress.env('apiUrl')}/user`;

describe('가계부 테스트', () => {
  const ctx = {};
  beforeEach(() => {
    cy.task('db:seed');

    cy.database('filter', 'users').then(users => {
      ctx.users = users;
      cy.visit(`${Cypress.env('baseUrl')}/login`);

      cy.login(ctx.users[0].id, ctx.users[0].password).then(jwt => {
        ctx.jwt = jwt;
      });
    });

    cy.intercept(
      {
        method: 'GET',
        url: `${url}/duplicate-check`,
        query: { nickName: '123' },
      },
      {
        statusCode: 409,
      },
    ).as('nickNameCheck');

    cy.visit(`${Cypress.env('baseUrl')}/profile`);
    cy.log(ctx);
  });

  // it('내정보와 수정버튼이 보인다.', () => {
  //   const user = ctx.users[0];
  //   cy.$('profile-img').should('have.attr', 'src', user.profileImg);
  //   cy.$('profile-nickname').should('have.text', user.nickname);
  //   cy.$('mypost-item').should('have.length', user.article.length);

  //   cy.$('delete-user-btn').should('exist');
  //   cy.$('mypage-edit-profile').should('exist');
  //   cy.$('mypage-edit-pet').should('exist');
  // });

  // it('회원탈퇴가 가능하다', () => {});
  it('프로필 편집이 가능하다', () => {
    cy.$('mypage-edit-profile').click();
    cy.$('profile-img-submit').click();
    cy.get('input[type=file]').selectFile(
      {
        contents: 'cypress/sample.png',
        fileName: 'sample.png',
        mimeType: 'text/plain',
        lastModified: new Date('Feb 18 2023').valueOf(),
      },
      { force: true },
    );
    cy.$('profile-edit-nickname').type('불금');
    cy.$('profile-edit-nickname').blur();
    cy.wait('@nickNameCheck');
  });
});
