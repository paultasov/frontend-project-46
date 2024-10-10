import getDiff from '../src/getDiff.js';
import { fileURLToPath } from 'url';
import * as path from 'path';
import { dirname } from 'path'; // clarify

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let file1, file2;
beforeAll(() => {
  file1 = path.join(__dirname, '../__fixtures__', 'file1.json');
  file2 = path.join(__dirname, '../__fixtures__', 'file2.json');
});

test('diff', () => {
  expect(typeof getDiff(file1, file2)).toBe('string');
});
