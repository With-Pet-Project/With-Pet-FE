describe('페이지 네비게이션', () => {
  const ctx = {};

  beforeEach(() => {
    cy.task('db:seed');

    cy.database('filter', 'users').then(users => {
      ctx.users = users;
      cy.visit(`${Cypress.env('baseUrl')}/login`);
      cy.login(ctx.users[0].id, ctx.users[0].password);
    });

    cy.fixture('user-location.json').as('userLocation');

    cy.get('@userLocation').then(fakePosition => {
      cy.stub(window.navigator.geolocation, 'getCurrentPosition')
        .as('getUserPosition')
        .callsFake(cb => {
          cb(fakePosition);
        });
    });
  });

  it('페이지간의 이동이 가능하다.', () => {
    cy.$('side-bar-hamburger').trigger('mouseover');
    cy.get('.side-navbar-menu')
      .contains('다이어리')
      .click()
      .wrap(() => {
        cy.location('pathname').should('eq', '/diary');
      });

    cy.get('.side-navbar-menu')
      .contains('가계부')
      .click()
      .wrap(() => {
        cy.location('pathname').should('eq', '/account');
      });

    cy.get('.side-navbar-menu')
      .contains('커뮤니티')
      .click()
      .wrap(() => {
        cy.location('pathname').should('eq', '/community');
      });

    cy.get('.side-navbar-menu')
      .contains('병원 찾기')
      .click()
      .wrap(() => {
        cy.location('pathname').should('eq', '/hospital');
      });

    cy.get('.side-navbar-menu')
      .contains('마이 페이지')
      .click()
      .wrap(() => {
        cy.location('pathname').should('eq', '/profile');
      });

    cy.get('.side-navbar-menu')
      .contains('로그아웃')
      .click()
      .wrap(() => {
        cy.location('pathname').should('eq', '/');
      });
  });
});
