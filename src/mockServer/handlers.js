/* eslint-disable import/no-extraneous-dependencies */
// Mocking Service Worker
import { rest } from 'msw';
import { BASE_URL } from 'constants/baseURL';
import HealthCareGet from 'lib/mocks/healthcare/healthcareGet.json';
import HealthCarePost from 'lib/mocks/healthcare/healthcarePost.json';

export const handlers = [
  rest.get(`${BASE_URL}/health`, (req, res, ctx) => {
    return res(ctx.json(HealthCareGet));
  }),
  rest.post(`${BASE_URL}/health`, (req, res, ctx) => {
    return res(ctx.json(HealthCarePost));
  }),
];
