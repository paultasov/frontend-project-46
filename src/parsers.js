import path from 'path';
import { cwd } from 'node:process';
import { readFileSync } from 'node:fs';
import YAML from 'yaml';

const parseFiles = (file1, file2) => {
  const workingDir = cwd();

  const extname1 = path.extname(file1);
  const extname2 = path.extname(file2);

  const f1 = readFileSync(path.resolve(workingDir, file1), 'utf8');
  const f2 = readFileSync(path.resolve(workingDir, file2), 'utf8');

  let result;
  switch (true) {
    case extname1 === '.json' && extname2 === '.json':
      result = [JSON.parse(f1), JSON.parse(f2)];
      break;
    // todo доработать проверку
    case (extname1 === '.yml' && extname2 === '.yml') || (extname1 === '.yaml' && extname2 === '.yaml'):
      result = [YAML.parse(f1), YAML.parse(f2)];
      break;
    default:
      // todo доработать обработку ошибки
      result = 'Error: the incorrect file format was submitted';
  }

  return result;
};

export default parseFiles;
