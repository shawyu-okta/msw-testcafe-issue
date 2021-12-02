import { Selector } from 'testcafe';

fixture('Getting Started')
  .page('http://localhost:3000');

test('example test', async t => {
  await t
  .debug()
  .expect(Selector('table tr td').textContent)
  .contains('world');
})