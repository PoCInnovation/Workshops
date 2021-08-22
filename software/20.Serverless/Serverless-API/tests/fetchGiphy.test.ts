import { APIGatewayEvent } from 'aws-lambda';
import * as fetchGiphy from '../fetchGiphy';

test('fetchGiphy', async () => {
	const eventNoParams = {} as APIGatewayEvent;
	const eventParams = {} as APIGatewayEvent;
	eventParams.queryStringParameters = { input: 'kaamelott' };
	const responseNoParams = await fetchGiphy.main(eventNoParams);
	const responseParams = await fetchGiphy.main(eventParams);

	expect(responseNoParams.statusCode).toEqual(400);
	expect(typeof responseNoParams.body).toBe('string');
	expect(responseNoParams.body).toEqual('{"message":"You must provide an input"}');
	expect(responseParams.statusCode).toEqual(200);
	expect(typeof responseParams.body).toBe('string');
});
