import { writeFileSync } from "fs";
import { Runner } from "./runner";

export const build_cli = (str: string, fileName: string): void => {
  new Runner(
    'DO "mkdir runner_build"\nDO "touch bin" "/build"\nDO "touch package.json" "/build"'
  );
  writeFileSync(
    process.cwd() + "/runner_build/bin",
    `#!/usr/bin/env node \n require = require('esm')(module /*, options*/);const runner_1=require('../dist/processes/runner');new runner_1.Runner('${str}')`
  );
  writeFileSync(
    process.cwd() + "/runner_build/package.json",
    `{"name": "${fileName}_cli","version": "1.0.0","description": "","keywords": ["${fileName}_cli"],"bin": {"${fileName}_cli":"bin"},"publishConfig": {"access": "public"},"author": "","license": "ISC","dependencies": {"esm": "^3.2.25"}}`
  );
  new Runner(
    'RUN "npm install" "/runner_build" \n RUN "npm link" "/runner_build"'
  );
};
