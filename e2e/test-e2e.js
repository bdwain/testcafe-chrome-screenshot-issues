/* eslint-disable */

import { Selector } from 'testcafe';

fixture('tests')
  .page('http://localhost:3000');

test('It should take a screenshot', async (t) => {
  await t.expect(Selector('header').exists).ok();
  await t.takeScreenshot();
});
