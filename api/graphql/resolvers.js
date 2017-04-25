import GraphqlDate from 'graphql-date';
import { createResolver } from 'apollo-resolvers';
import { createError, isInstance } from 'apollo-errors';

const UnknownError = createError('UnknownError', {
	message: 'An unknown error has occured! Please try again later.'
});

const baseResolver = createResolver(null, (root, args, context, error) => isInstance(error) ? error : new UnknownError());

const Query = {
	allObjects: baseResolver.createResolver(
		async (root, args, ctx) => {
			// Get all objects.
		}
	),
	oneObject: baseResolver.createResolver(
		async (root, { id }, { oneObject }) => {
			// Get one object by id.
			return oneObject.load(id);
		}
	)
};

const Mutation = {
	saveObject: async (root, { object }, context, info) => {
		console.log(object);
	}
};


export default {Query, Mutation, Date: GraphqlDate};