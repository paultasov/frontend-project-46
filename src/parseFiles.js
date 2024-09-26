import { cwd } from 'node:process';
import { readFileSync } from 'node:fs';

import * as path from 'path'; // clarify

export const parseFiles = (file1, file2) => {
  const workingDir = cwd();
  const firstFile = readFileSync(path.resolve(workingDir, file1), 'utf8');
  const secondFile = readFileSync(path.resolve(workingDir, file2), 'utf8');

  return [JSON.parse(firstFile), JSON.parse(secondFile)];
};
