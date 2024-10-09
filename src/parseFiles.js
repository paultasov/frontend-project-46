import { cwd } from 'node:process';
import { readFileSync } from 'node:fs';

import * as path from 'path'; // clarify

const parseFiles = (file1, file2) => {
  const workingDir = cwd();
  const f1 = readFileSync(path.resolve(workingDir, file1), 'utf8');
  const f2 = readFileSync(path.resolve(workingDir, file2), 'utf8');

  return [JSON.parse(f1), JSON.parse(f2)];
};

export default parseFiles;
