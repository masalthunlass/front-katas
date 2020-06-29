public -> static assets

#remember
###installation that updates package.json
npm install --save-dev typescript@latest
npm install --save-dev @types/express

###compilation to js file
tsc path/file.ts
###
node path/file.js

### create a ts config json file
tsc --init

### sourcemap option assists with debugging in Chrome

### list the output files (ts config)
dans tsconfig.json : listEmittedFiles: true

### union type
const union : string | number = '123' || 0;

### declaration: true

### when multiple tsconfig.json use --p
tsc --p path/tsconfig.json

### importer rxjs in typescripts modules
npm install @reactivex/rxjs


