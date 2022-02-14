import { Record } from '../src/DataProcessor';

export const jane: Record = {
  email: 'jane@doe.example',
  firstName: 'Jane',
  lastName: 'Doe',
  registered: '2015-12-03T12:01:34Z',
};

export const joe = {
  email: 'joe@blogs.example',
  firstName: 'Joe',
  lastName: 'Bloggs',
  registered: '2010-03-10T21:59:11-01:00',
};

export const simon = {
  email: 'simon@says.example',
  firstName: 'Simon',
  lastName: 'Says',
  registered: '2010-03-10T21:32:11Z',
};

// https://stackoverflow.com/a/12646864
const shuffle = (records: unknown[]) => {
  for (let i = records.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ records[i], records[j] ] = [ records[j], records[i] ];
  }
}

export const data: Record[] = [ jane, joe, simon ];
shuffle(data);
