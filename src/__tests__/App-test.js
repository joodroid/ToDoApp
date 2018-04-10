// @flow

import renderApp from '../App';

it('Sould render state to view', () => {
  let html = renderApp({somethingHere});
  expect(html).toEqual((value = 'something here the expected return'));
});
