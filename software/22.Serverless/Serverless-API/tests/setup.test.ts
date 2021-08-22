import { APIGatewayEvent, Context } from 'aws-lambda';
import * as setup from '../setup';

test('status', async () => {
	const event = { body: 'Test Body' } as APIGatewayEvent;
	const context = {} as Context;

	const response = await setup.status(event, context);

	expect(response.statusCode).toEqual(200);
	expect(typeof response.body).toBe('string');
	expect(response.body).toEqual('{"message":"It is working !"}');
});
