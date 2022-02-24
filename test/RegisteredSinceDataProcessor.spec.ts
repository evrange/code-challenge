import { DateTime } from 'luxon';
import { RegisteredSinceDataProcessor } from '../src/RegisteredSinceDataProcessor';
import { data, joe } from './mocks';

describe('RegisteredSinceDataProcessor', () => {

  let joeProcessed: Awaited<ReturnType<RegisteredSinceDataProcessor['process']>>[number];

  beforeAll(async () => {
    const records = await new RegisteredSinceDataProcessor(data).process();
    const match = records.find(({ firstName }) => 'Joe' === firstName);
    if (!match) {
      throw new Error('Joe not found in processed records');
    }
    joeProcessed = match;
  });

  it('returns a record with a new function property named daysSinceRegistered', async () => {
    expect(typeof joeProcessed.daysSinceRegistered).toBe('function');
  });

  it('returns a Promise when daysSinceRegistered() is called', async () => {
    expect(joeProcessed.daysSinceRegistered(DateTime.now())).toBeInstanceOf(Promise);
  });

  it('returns the correct number of days since registration when date provided is after registration', async () => {
    expect(await joeProcessed.daysSinceRegistered(DateTime.fromISO(joe.registered).plus({ days: 10 }))).toBe(10);
  });

  it('returns zero when date provided is before registration', async () => {
    expect(await joeProcessed.daysSinceRegistered(DateTime.fromISO(joe.registered).minus({ days: 10 }))).toBe(0);
  });

});
