import { getQuantityFromRequestQuery } from '.';

describe('getQuantityFromRequestQuery', () => {
  it('processes a number, provided a single query value', () => {
    expect(
      getQuantityFromRequestQuery({
        quantity: '2',
      })
    ).toBe(2);
  });

  it('is 1 by default', () => {
    expect(getQuantityFromRequestQuery({})).toBe(1);
    expect(
      getQuantityFromRequestQuery({ irrelevantProp: 'irrelevant value' })
    ).toBe(1);
  });

  it('reads the first provided value', () => {
    expect(
      getQuantityFromRequestQuery({
        quantity: ['4', '3'],
      })
    ).toBe(4);
  });

  it('truncate fractions', () => {
    expect(
      getQuantityFromRequestQuery({
        quantity: '3.4',
      })
    ).toBe(3);

    expect(
      getQuantityFromRequestQuery({
        quantity: '10.5',
      })
    ).toBe(10);
  });

  it('returns the default on invalid queries', () => {
    expect(
      getQuantityFromRequestQuery({
        quantity: [],
      })
    ).toBe(1);

    // no roman values
    expect(
      getQuantityFromRequestQuery({
        quantity: 'ix',
      })
    ).toBe(1);
  });
});
