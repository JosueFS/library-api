import fs from 'fs';
import path from 'path';

let typeDefs = '';
let mutations = '';
let queries = '';
let subscriptions = '';
const dirname = path.join(__dirname, '../graphql/');

const concatMutations = (typeDef: string) => {
  const regex = /(?<=Mutation\s*\{)(.*?[\s\S]*?)(?=\n\}\n)/g;
  const mutationsInTypeDef = typeDef.match(regex);

  if (mutationsInTypeDef && mutationsInTypeDef.length > 0) {
    mutations = mutations.concat(...mutationsInTypeDef);
  }
};

const concatQueries = (typeDef: string) => {
  const regex = /(?<=Query\s*\{)(.*?[\s\S]*?)(?=\n\}\n)/g;
  const queriesInTypeDef = typeDef.match(regex);

  if (queriesInTypeDef && queriesInTypeDef.length > 0) {
    queries = queries.concat(...queriesInTypeDef);
  }
};

const concatSubscriptions = (typeDef: string) => {
  const regex = /(?<=Subscription\s*\{)(.*?[\s\S]*?)(?=\n\}\n)/g;
  const subscriptionsInTypeDef = typeDef.match(regex);

  if (subscriptionsInTypeDef && subscriptionsInTypeDef.length > 0) {
    subscriptions = subscriptions.concat(...subscriptionsInTypeDef);
  }
};

const removeMutationsQueriesAndSubscriptions = (typeDef: string) => {
  const reMutations = /type\s*Mutation\s*\{(.*?[\s\S]*?)\n\}\n/g;
  const reQueries = /type\s*Query\s*\{(.*?[\s\S]*?)\n\}\n/g;
  const reSubscriptions =
    /type\s*Subscription\s*\{(.*?[\s\S]*?)(\n\}\n|\r\n\}\r\n)/g;

  let newTypeDef = typeDef.replaceAll(reMutations, '');
  newTypeDef = newTypeDef.replaceAll(reQueries, '');
  newTypeDef = newTypeDef.replaceAll(reSubscriptions, '');

  return newTypeDef;
};

const mergeMutationsQueriesAndSubscriptions = (typeDef: string) => {
  if (mutations.length > 0) {
    typeDef += `\n\ntype Mutation {\n${mutations}\n}`;
  }
  if (queries.length > 0) {
    typeDef += `\n\ntype Query {\n${queries}\n}`;
  }
  if (subscriptions.length > 0) {
    typeDef += `\n\ntype Subscription {\n${subscriptions}\n}`;
  }

  return typeDef;
};

export const mergeTypeDefs = () => {
  const filenames = fs.readdirSync(dirname);

  filenames.forEach((filename) => {
    let content = fs.readFileSync(dirname + filename, 'utf-8');

    concatMutations(content);
    concatQueries(content);
    concatSubscriptions(content);

    content = removeMutationsQueriesAndSubscriptions(content);
    typeDefs += content;
  });

  typeDefs += mergeMutationsQueriesAndSubscriptions(typeDefs);

  return typeDefs;
};

// export default { mergeTypeDefs };
