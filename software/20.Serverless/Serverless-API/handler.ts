import { Context, APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';

export async function hello(event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> {
	console.log('---- EVENT ----');
	console.log(event);
	console.log('---- CONTEXT ----');
	console.log(context);
	return {
		statusCode: 200,
		body: JSON.stringify({
			message: 'It is working !',
		}),
	};
}
