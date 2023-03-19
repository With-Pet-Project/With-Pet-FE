import { TOAST_MESSAGE } from '/src/components/common/Toast/toast';

const url = `${Cypress.env('apiUrl')}`;

describe('마이 페이지 테스트', () => {
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

    cy.database('filter', 'pets').then(pets => {
      ctx.pets = pets;
    });

    cy.intercept('PATCH', `${url}/mypage`, { statusCode: 201 }).as(
      'updateProfile',
    );

    cy.intercept('GET', `${url}/mypage`, req => {
      req.continue(res => {
        res.body.data = ctx.users[0];
      });
    }).as('setProfile');

    cy.intercept('GET', `${url}/pet`, req => {
      req.continue(res => {
        res.body.data = ctx.pets;
      });
    }).as('setPet');

    cy.intercept('POST', `${url}/pet`, { statusCode: 201 }).as('addPet');

    cy.intercept('PUT', `${url}/pet/1`, { statusCode: 201 }).as('updatePet');

    cy.intercept('DELETE', `${url}/pet/1`, { statusCode: 201 }).as('deletePet');

    cy.visit(`${Cypress.env('baseUrl')}/profile`);
    cy.wait('@setProfile');
  });

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
    cy.$('profile-edit-nickname').type('시바견주');
    cy.$('profile-edit-nickname').blur();
    cy.$('nickname-unavailable').should('exist');
    cy.$('profile-edit-nickname').clear();
    cy.$('profile-edit-nickname').type('시바견주123');
    cy.$('profile-edit-nickname').blur();
    cy.$('nickname-available').should('exist');
    cy.$('profile-edit-submit').click();

    cy.wait('@updateProfile');
    cy.get('.Toastify').should('have.text', TOAST_MESSAGE.UPDATE_SUCCESS);
  });

  it('마이 페이지가 보인다.', () => {
    const user = ctx.users[0];

    cy.$('profile-img').should('have.attr', 'src', user.profileImg);
    cy.$('profile-nickname').should('have.text', user.nickName);
    cy.$('mypost-item').should('have.length', user.articleList.length);

    cy.$('delete-user-btn').should('exist');
    cy.$('mypage-edit-profile').should('exist');
    cy.$('mypage-edit-pet').should('exist');
  });

  it('펫 추가가 가능하다', () => {
    cy.$('mypage-edit-pet').click();
    cy.wait('@setPet');
    const name = '새로운펫';
    const initWeight = 3.3;
    const birthday = '2023-03-03';

    const newPet = ['새로운펫', 3.3, '2023-03-03'];
    cy.$('mypage-add-pet-input').each(($el, index) => {
      cy.wrap($el).type([name, initWeight, birthday][index]);
    });

    cy.$('mypage-add-pet-submit').click();
    cy.wait('@addPet').then(value => {
      ctx.pets = [...ctx.pets, { id: 3, name, initWeight, birthday }];
    });

    cy.$('mypost-pet-list').children().should('have.length', 3);
  });

  it('펫 수정이 가능하다', () => {
    cy.$('mypage-edit-pet').click();
    cy.wait('@setPet');
    cy.$('mypost-edit-btn').first().click();

    const name = '업데이트펫';
    const initWeight = 0.5;
    const birthday = '2023-03-03';

    cy.$('mypost-edit-pet-item').each(($el, index) => {
      cy.wrap($el).type([name, initWeight, birthday][index]);
    });

    cy.$('mypost-edit-pet-submit').click();
    cy.wait('@updatePet');
    ctx.pets[0] = {
      id: 1,
      name,
      initWeight,
      birthday,
    };

    cy.$('mypost-pet-list')
      .children()
      .first()
      .find('span')
      .each(($el, index) => {
        expect($el.text()).contains([name, initWeight, birthday][index]);
      });

    cy.get('.Toastify').should('have.text', TOAST_MESSAGE.UPDATE_SUCCESS);
  });

  it('펫 삭제가 가능하다', () => {
    cy.$('mypage-edit-pet').click();
    cy.wait('@setPet');
    cy.$('mypost-edit-btn').first().click();
    cy.$('mypost-delete-pet-submit').first().click();

    cy.wait('@deletePet').then(value => {
      ctx.pets.splice(0, 1);
    });

    cy.$('mypost-pet-list').children().should('have.length', 1);
  });
});
