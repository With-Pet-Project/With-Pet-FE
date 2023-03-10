describe('회원가임 및 로그인', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('BASE_URL')}`);
  });

  const user = {
    id: 'test1@test.com',
    password: '1234',
  };

  it('로그인을 한다.', () => {
    cy.get('[data-cy="login-btn"]').click();
  });
});
