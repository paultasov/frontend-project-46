#!/usr/bin/env node

import { Command } from 'commander';
import { parseFiles } from '../src/index.js';
const program = new Command();

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((file1, file2) => {
    console.log(parseFiles(file1, file2));
  });

program.parse();
