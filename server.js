import express from 'express';
import next from 'next';
import bodyParser from 'body-parser';

import {
	graphqlExpress,
	graphiqlExpress
} from 'graphql-server-express';

import {
	oneObject
} from './api/loaders';

import schema from './api/graphql/schema.js';

// Dev mode?
const dev = process.env.NODE_ENV !== 'production';

// NextJS stuff.
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	server.use('/graphql', bodyParser.json(), graphqlExpress(req => ({
		schema,
		context: {
			oneObject: oneObject(req)
		}
	})));

	server.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

	server.get('*', (req, res) => handle(req, res));

	server.listen(3000, err => {
		if (err) {
			throw err;
		}

		console.log('> Server running at http://localhost:3000');
	});
});