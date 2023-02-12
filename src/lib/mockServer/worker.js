import { setupWorker } from 'msw';
import { workerHandlers as handlers } from './workerHandlers';

export const worker = setupWorker(...handlers);
