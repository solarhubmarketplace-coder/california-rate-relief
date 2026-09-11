import {execFileSync} from 'node:child_process';
import {ESLint} from 'eslint';
const root=execFileSync('git',['rev-parse','--show-toplevel'],{encoding:'utf8'}).trim();
const paths=execFileSync('git',['-C',root,'ls-files','-mo','--exclude-standard'],{encoding:'utf8'}).split(/\r?\n/).filter(p=>/^Code\/Frontend\/src\/.*\.(ts|tsx)$/.test(p)).map(p=>p.replace(/^Code\/Frontend\//,''));
const eslint=new ESLint();const results=await eslint.lintFiles(paths);console.log(await(await eslint.loadFormatter('stylish')).format(results));
console.log(`Linted ${paths.length} changed TypeScript files.`);if(results.some(r=>r.errorCount))process.exitCode=1;
