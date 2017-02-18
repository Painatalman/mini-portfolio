import '@testing-library/jest-dom';
import {
  toBeString,
  toBeArray,
  toIncludeAllMembers,
  toIncludeSameMembers,
  toBeOneOf,
} from 'jest-extended';

import { server } from './src/msw/server';

expect.extend({
  toBeString,
  toBeArray,
  toIncludeAllMembers,
  toIncludeSameMembers,
  toBeOneOf,
});

require('dotenv').config({
  path: './.env.development',
});

// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());
