import { FirstNameStartingWithDataProcessor } from '../src/FirstNameStartingWithDataProcessor';
import { data, jane, joe } from './mocks';

describe('FirstNameStartingWithDataProcessor', () => {

  it('returns all the records where the firstName matches the provided letter', async () => {
    const results = await new FirstNameStartingWithDataProcessor(data, 'J').process();
    expect(results.length).toBe(2);
    expect(results).toContain(jane);
    expect(results).toContain(joe);
  });

  it('returns all the records sorted by the firstName', async () => {
    expect(await new FirstNameStartingWithDataProcessor(data, 'J').process(true)).toStrictEqual([ jane, joe ]);
  });

});
