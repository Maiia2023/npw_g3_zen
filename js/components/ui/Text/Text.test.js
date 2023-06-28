import {Text} from './Text.js';

describe('Text:', () => {
  it('Unit test 1', () => {
    const htmlString = Text('', '');
    const isString = typeof htmlString === 'string';
    expect(isString).toEqual(true);
  })

  it('Unit test 2', () => {
    const htmlString = Text('one', 'two');
    const isString = typeof htmlString === 'string';
    expect(isString).toEqual(true);
  })
});

