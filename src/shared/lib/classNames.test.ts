import { classNames } from 'shared/lib/classNames';

describe('classname style test', () => {
  test('classNames function', () => {
    expect(classNames('someClass', {}, [])).toBe('someClass');
  });

  test('with 2 params', () => {
    const expectedResult = 'someClass button container';
    expect(classNames('someClass', {}, ['button', 'container']))
      .toBe(expectedResult);
  });

  test('with modes', () => {
    const expectedResult = 'someClass container hovered selected';

    expect(classNames(
      'someClass',
      { hovered: true, selected: true },
      ['container'],
    ))
      .toBe(expectedResult);
  });

  test('with modes false', () => {
    const expectedResult = 'someClass container selected';

    expect(classNames(
      'someClass',
      { hovered: false, selected: true },
      ['container'],
    ))
      .toBe(expectedResult);
  });

  test('with modes and undefined', () => {
    const expectedResult = 'someClass container';

    expect(classNames(
      'someClass',
      { hovered: false, selected: undefined },
      ['container'],
    ))
      .toBe(expectedResult);
  });
});
