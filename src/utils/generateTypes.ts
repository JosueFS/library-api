import { config } from 'dotenv';
config();

import { generate } from '@neo4j/graphql-ogm';
import * as path from 'path';

import ogm from '@/config/ogm';

async function main() {
  const outFile = path.join(__dirname, '../graphql', 'index.ts');

  await generate({
    ogm,
    outFile,
  });

  console.log('Types Generated');
  process.exit(1);
}
main();
