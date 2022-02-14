import { MostRecentlyRegisteredDataProcessor } from '../src/MostRecentlyRegisteredDataProcessor';
import { data, simon } from './mocks';

describe('MostRecentlyRegisteredDataProcessor', () => {

  it('returns the most recently registered person from the dataset', async () => {
    const result = await new MostRecentlyRegisteredDataProcessor(data).process()
    expect(result).toStrictEqual(simon);
  });

});
