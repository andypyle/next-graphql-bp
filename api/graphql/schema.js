import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers.js';

const typeDefs = `
	scalar Date

	type Object {
		id: ID!
		prop1: String
		prop2: Int!
		prop3: Boolean
	}

	input ObjectInput {
		prop1: String
		prop2: Int!
		prop3: Boolean
	}

	type Query {
		allObjects: [Object]
		oneObject(id: ID!): Object
	}

	type Mutation {
		saveObject(object: ObjectInput): Object
	}
`;

export default makeExecutableSchema({ typeDefs, resolvers });