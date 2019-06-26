import parseLocaleDate from '../utils/parseLocaleDate'

describe('parseLocaleDate util function', () => {
  test('should parse locale date string to a Date string', () => {
    expect(parseLocaleDate('10/02/2008')).toBe('2008-02-10T00:00:00')
    expect(parseLocaleDate('08/11/2017')).toBe('2017-11-08T00:00:00')
  })
})
