import _ from 'lodash';
import parseFiles from './parsers.js';

const getDiff = (file1, file2) => {
  const [f1, f2] = parseFiles(file1, file2);

  const unionVals = _.union(Object.entries(f1), Object.entries(f2)).sort();
  const uniqueVals = _.uniqWith(unionVals, _.isEqual);

  let str = '';
  let counter = 0;

  uniqueVals.forEach((arr) => {
    const [key, value] = arr;

    if (Object.hasOwn(f1, key) && !Object.hasOwn(f2, key)) {
      str += `  - ${key}: ${value}\n`;
    } else if (Object.hasOwn(f2, key) && !Object.hasOwn(f1, key)) {
      str += `  + ${key}: ${value}\n`;
    } else if (Object.hasOwn(f1, key) && Object.hasOwn(f2, key)) {
      if (f1[key] === f2[key]) {
        str += `    ${key}: ${value}\n`;
      } else if (!counter) {
        str += `  - ${key}: ${f1[key]}\n  + ${key}: ${f2[key]}\n`;
        counter += 1;
      }
    }
  });

  return `{\n${str}}`;
};

export default getDiff;
