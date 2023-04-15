import { TODAY } from '/src/components/common/Calender/constant';
import { getMonthYearDetails } from '/src/components/common/Calender/hooks/date';

const url = `${Cypress.env('apiUrl')}/pet`;

describe('가계부 테스트', () => {
  const ctx = {};

  beforeEach(() => {
    cy.task('db:seed');
    cy.database('filter', 'accounts').then(accounts => {
      ctx.accounts = accounts;
    });
    cy.database('filter', 'pets').then(pets => {
      ctx.pets = pets;
    });
    const { year, month } = getMonthYearDetails(TODAY);

    cy.intercept('GET', `${url}`, req => {
      req.continue(res => {
        res.body.data = ctx.pets;
      });
    }).as('setPet');

    cy.intercept(
      'GET',
      `${url}/consumption?year=${year}&month=${month}`,
      req => {
        req.continue(res => {
          res.body.data = ctx.accounts;
        });
      },
    ).as('setAccount');

    cy.intercept('POST', `${url}/1/consumption`, { statusCode: 201 }).as(
      'addAccount',
    );

    cy.intercept('PUT', `${url}/1/consumption/1`, { statusCode: 201 }).as(
      'updateAccount',
    );

    cy.intercept('DELETE', `${url}/1/consumption/1`, { statusCode: 201 }).as(
      'deleteAccount',
    );

    // 로그인 (id fixture로 바꿀까 생각중 ..)
    cy.database('filter', 'users').then(users => {
      ctx.users = users;
      cy.visit(`${Cypress.env('CYPRESS_BASE_URL')}login`);

      cy.login(ctx.users[0].id, ctx.users[0].password).then(jwt => {
        ctx.jwt = jwt;
      });
    });
    cy.visit(`${Cypress.env('CYPRESS_BASE_URL')}account`);
    cy.wait('@setPet');
    cy.wait('@setAccount');
    cy.log(ctx);
  });

  const checkMonthlyData = data => {
    cy.$('account-monthly-total').should('have.text', data.total);
    cy.$('account-monthly-item').each((item, index) => {
      expect(item.text()).to.eq(data.item[index]);
    });
  };

  const checkTodayData = data => {
    cy.$('account-today-total').should('have.text', data.total);
    cy.$('account-today-item').each((item, index) => {
      expect(item.text()).to.eq(data.item[index]);
    });
  };

  it('이번달 총 지출과 오늘의 소비를 확인할 수 있다.', () => {
    const data = {
      monthly: {
        item: ['109,000', '3,000', '104,000', '55,000', '6,000'],
        total: '277,000',
      },
      today: {
        item: ['1,000', '2,000', '3,000', '4,000', '5,000'],
        total: '15,000',
      },
    };
    // 이번달 총 지출
    checkMonthlyData(data.monthly);
    // 오늘의 소비
    cy.get('[data-cy="calender-date"]:first').click();
    checkTodayData(data.today);
  });

  it('펫별로 데이터를 확인할 수 있다.', () => {
    const petDataLength = ['20,000', '257,000'];
    cy.$('account-pet-select-btn').click();
    cy.$('account-pet-item').eq(0).click();
    cy.$('account-monthly-total').should('have.text', petDataLength[0]);

    cy.$('account-pet-select-btn').click();
    cy.get('[data-cy="account-pet-item"]').eq(1).click();
    cy.$('account-monthly-total').should('have.text', petDataLength[1]);
  });

  it('가계부를 추가한다', () => {
    cy.$('calender-date').eq(9).click();
    cy.$('account-add-btn').click();
    cy.$('add-account-input').each(($el, index) => {
      cy.wrap($el).type('1000');
    });
    cy.$('add-account-submit').click();
    cy.wait('@addAccount');
    ctx.accounts = [
      ...ctx.accounts,
      {
        id: 6,
        petId: 1,
        toy: 1000,
        hospital: 1000,
        beauty: 1000,
        etc: 1000,
        feed: 1000,
        day: 10,
      },
    ];

    const newTodayData = {
      total: '5,000',
      item: ['1,000', '1,000', '1,000', '1,000', '1,000'],
    };

    checkTodayData(newTodayData);
  });

  it('가계부를 수정한다', () => {
    cy.$('account-pet-select-btn').click();
    cy.$('account-pet-item').eq(0).click();
    cy.$('calender-date').eq(0).click();
    cy.$('account-edit-btn').click();

    cy.$('account-today-item').should('not.exist');
    cy.$('account-edit-item').should('be.visible');
    cy.$('account-edit-item').each(($el, index) => {
      cy.wrap($el).type('1000');
    });
    cy.$('account-edit-submit-btn').click();
    cy.wait('@updateAccount');
    ctx.accounts[0] = {
      id: 1,
      petId: 1,
      toy: 1000,
      hospital: 1000,
      beauty: 1000,
      etc: 1000,
      feed: 1000,
      day: 1,
    };

    const newTodayData = {
      total: '5,000',
      item: ['1,000', '1,000', '1,000', '1,000', '1,000'],
    };
    checkTodayData(newTodayData);

    const newMonthlyData = {
      total: '10,000',
      item: ['6,000', '1,000', '1,000', '1,000', '1,000'],
    };
    checkMonthlyData(newMonthlyData);
  });

  it('가계부를 삭제한다', () => {
    cy.$('account-pet-select-btn').click();
    cy.$('account-pet-item').eq(0).click();
    cy.$('calender-date').eq(0).click();
    cy.$('account-edit-btn').click();
    cy.$('account-delete-btn').click();
    cy.window().then(win =>
      cy.stub(win, 'confirm').as('confirm').returns(true),
    );
    cy.wait('@deleteAccount');
    ctx.accounts.splice(0, 1);

    const newTodayData = {
      total: '0',
      item: ['0', '0', '0', '0', '0'],
    };
    checkTodayData(newTodayData);

    const newMonthlyData = {
      total: '5,000',
      item: ['5,000', '0', '0', '0', '0'],
    };
    checkMonthlyData(newMonthlyData);
  });
});
