import { rest } from 'msw';
import getFebData from 'lib/mocks/account/getFebData.json';
import getJanData from 'lib/mocks/account/getJanData.json';
import getMarData from 'lib/mocks/account/getMarData.json';

const todos = ['먹기', '자기', '놀기'];

export const workerHandlers = [
  // 소비 내역 전체를 조회합니다.
  rest.get('/consumption/:year/:month', (req, res, ctx) => {
    const { month } = req.params;

    let result = {
      code: 200,
      message: '정상적으로 조회되었습니다.',
      data: {
        consumptions: {},
      },
    };

    if (month === '02') {
      result = { ...getFebData };
    }
    if (month === '01') {
      result = { ...getJanData };
    }
    if (month === '03') {
      result = { ...getMarData };
    }

    return res(ctx.status(200), ctx.json(result));
  }),

  // 할일 추가
  rest.post('/todos', (req, res, ctx) => {
    todos.push(req.body);
    return res(ctx.status(201));
  }),
];
