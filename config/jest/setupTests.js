/*eslint no-console: ["error", { allow: ["error"] }] */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

/**
 * Suppress React 16.8 act() warnings globally.
 * The react teams fix won't be out of alpha until 16.9.0.
 */
const consoleError = console.error;

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation((...args) => {
    if (!args[0].includes('Warning: An update to %s inside a test was not wrapped in act')) {
      consoleError(...args);
    }
  });
});

configure({ adapter: new Adapter() });
