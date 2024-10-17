// тест-кейс на проверку расширения файлов

import path from 'path';
import { fileURLToPath } from 'url';
import getDiff from '../src/getDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let f1_json, f2_json, f1_yml, f2_yml, result;

beforeAll(() => {
  f1_json = path.join(__dirname, '../__fixtures__', 'file1.json');
  f2_json = path.join(__dirname, '../__fixtures__', 'file2.json');
  f1_yml = path.join(__dirname, '../__fixtures__', 'file1.yml');
  f2_yml = path.join(__dirname, '../__fixtures__', 'file2.yml');

  result = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;
});

describe('Check two flat JSON files:', () => {
  it('Check main flow', () => {
    expect(typeof getDiff(f1_json, f2_json)).toBe('string');
    expect(getDiff(f1_json, f2_json)).toEqual(result);
    expect(getDiff(f1_json, f2_json)).not.toBe('');
  });
});

describe('Check two flat YAML files:', () => {
  it('Check main flow', () => {
    expect(typeof getDiff(f1_yml, f2_yml)).toBe('string');
    expect(getDiff(f1_yml, f2_yml)).toEqual(result);
    expect(getDiff(f1_yml, f2_yml)).not.toBe('');
  });
});
