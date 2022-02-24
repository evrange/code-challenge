import { MostRecentlyRegisteredDataProcessor } from '../src/MostRecentlyRegisteredDataProcessor';
import { data, joe } from './mocks';

describe('MostRecentlyRegisteredDataProcessor', () => {

  it('returns the record containing the most recent registered date', async () => {
    expect(await new MostRecentlyRegisteredDataProcessor(data).process()).toStrictEqual(joe);
  });

});
