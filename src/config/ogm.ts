import { OGM } from '@neo4j/graphql-ogm';

import driver from '@/config/neo4j';
import typeDefs from '@/config/typeDefs';

const ogm = new OGM({ typeDefs, driver });

export default ogm;
