import getDiff from '../src/getDiff.js';
import { fileURLToPath } from 'url';
import * as path from 'path';
import { dirname } from 'path'; // clarify

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let file1, file2;
beforeAll(() => {
  file1 = path.join(__dirname, '../__fixtures__', 'file1.json');
  console.log(file1);
  file2 = path.join(__dirname, '../__fixtures__', 'file2.json');
});

test('Сhecking the differences between two JSON files', () => {
  const result = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;
  expect(typeof getDiff(file1, file2)).toBe('string');
  expect(getDiff(file1, file2)).toEqual(result);
});
