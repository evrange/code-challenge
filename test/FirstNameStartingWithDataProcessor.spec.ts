import { FirstNameStartingWithDataProcessor } from '../src/FirstNameStartingWithDataProcessor';
import { data, jane, joe } from './mocks';

describe('FirstNameStartingWithDataProcessor', () => {

  it('returns all the people with a first name starting with "J" from the dataset', async () => {
    const sortByFirstName = true;
    const results = await new FirstNameStartingWithDataProcessor(data, 'J').process(sortByFirstName);
    expect(results).toStrictEqual([ jane, joe ]);
  });

});
