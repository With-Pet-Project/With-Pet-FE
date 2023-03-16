// const userString = window.localStorage.getItem('user')
/// <reference types="Cypress"/>

const apiPet = `${Cypress.env('apiUrl')}/pet`;
const newPet = { name: '단비', initWeight: 1.0, birthday: '2023-01-01' };
const updatePet = { name: '코코', initWeight: 3.0, birthday: '2023-12-12' };

describe('PET API', () => {
  const ctx = {};

  beforeEach(() => {
    cy.task('db:seed');
    // jwt token 가져오기
    cy.database('filter', 'users').then(users => {
      ctx.users = users;
      cy.visit(`${Cypress.env('baseUrl')}/login`);

      cy.login(ctx.users[0].id, ctx.users[0].password).then(jwt => {
        ctx.jwt = jwt;
      });
    });
  });

  context('POST /pet', function () {
    it('펫을 추가한다.', function () {
      cy.request({
        method: 'POST',
        url: apiPet,
        body: newPet,
        headers: {
          Authorization: `Bearer ${ctx.jwt}`,
        },
      }).then(response => {
        expect(response.status).to.eq(200);
      });
    });
  });

  context('GET /pet', function () {
    it('유저의 펫목록을 가져온다.', function () {
      cy.request({
        method: 'GET',
        url: apiPet,
        headers: {
          Authorization: `Bearer ${ctx.jwt}`,
        },
      }).then(response => {
        expect(response.status).to.eq(200);
        ctx.pets = response.body.data;
      });
    });
  });

  context('UPDATE	/pet', function () {
    it('펫 정보를 수정한다.', function () {
      cy.request({
        method: 'DELETE',
        url: `${apiPet}/${ctx.pets[0].id}`,
        body: updatePet,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ctx.jwt}`,
        },
      }).then(response => {
        expect(response.status).to.eq(200);
      });
    });
  });

  context('DELETE /pet', function () {
    it('펫을 제거한다.', function () {
      cy.request({
        method: 'DELETE',
        url: `${apiPet}/${ctx.pets[1].id}`,
        headers: {
          Authorization: `Bearer ${ctx.jwt}`,
        },
      }).then(response => {
        expect(response.status).to.eq(200);
      });
    });
  });
});
