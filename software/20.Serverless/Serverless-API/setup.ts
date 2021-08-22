import { Context, APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';

const status = (event: APIGatewayEvent, context: Context): APIGatewayProxyResult => {
	console.log('---- EVENT ----');
	console.log(event);
	console.log('---- CONTEXT ----');
	console.log(context);
	return {
		statusCode: 200,
		body: JSON.stringify({ message: 'It is working !' }),
	};
};

export { status };
