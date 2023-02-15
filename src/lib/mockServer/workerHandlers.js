import { rest } from 'msw';
import getFebData from 'lib/mocks/account/getFebData';
import getJanData from 'lib/mocks/account/getJanData';
import getMarData from 'lib/mocks/account/getMarData';
import { BASE_URL } from 'lib/APIs/client';
import {
  ALL_OF_HALLENGES,
  ONE_CHALLENGE,
} from 'lib/mocks/challenge/challengeGet';

export const workerHandlers = [
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

  rest.post('/consumption', (req, res, ctx) => {
    const { petId, feed, toy, hospital, beauty, etc, date } = req.body;
    const [, month, day] = date.split('-');

    let json = {};
    if (month === '02') {
      json = getFebData;
    }
    if (month === '01') {
      json = getJanData;
    }
    if (month === '03') {
      json = getMarData;
    }
    json.data.consumptions[day] = [
      {
        id: 1,
        pet_id: petId,
        feed: Number(feed),
        toy: Number(toy),
        hospital: Number(hospital),
        beauty: Number(beauty),
        etc: Number(etc),
        date: Number(date),
      },
    ];
    return res(ctx.status(201));
  }),

  rest.delete('/consumption/:id', (req, res, ctx) => {
    // 2월만 가능
    const { id } = req.params;
    getFebData.data.consumptions[id] = [];
    return res(ctx.status(201));
  }),

  rest.patch('/consumption', (req, res, ctx) => {
    // 2월만 가능
    const result = req.body;
    getFebData.data.consumptions[result.id] = [{ ...result, pet_id: 4 }];
    return res(ctx.status(201));
  }),

  /** -------------------------------------------------- */
  /** ---------------- Challenge ----------------------- */
  rest.get(`${BASE_URL}/challenge`, (req, res, ctx) => {
    return res(ctx.json(ALL_OF_HALLENGES));
  }),
];
