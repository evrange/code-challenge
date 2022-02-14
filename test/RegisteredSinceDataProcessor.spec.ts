import { DateTime } from 'luxon';
import { RegisteredSinceDataProcessor } from '../src/RegisteredSinceDataProcessor';
import { data, joe } from './mocks';

describe('RegisteredSinceDataProcessor', () => {

  it('returns all records with an added function property that returns the number of days registered', async () => {
    const results = await new RegisteredSinceDataProcessor(data).process();

    const joeMatch = results.find(({ firstName }) => 'Joe' === firstName);

    const dateAfterRegistration = DateTime.fromISO(joe.registered).plus({ days: 10 });
    expect(await joeMatch?.daysSinceRegistered(dateAfterRegistration)).toBe(10);

    const dateBeforeRegistration = DateTime.fromISO(joe.registered).minus({ days: 10 });
    expect(await joeMatch?.daysSinceRegistered(dateBeforeRegistration)).toBe(0);
  });

});
