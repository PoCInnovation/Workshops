import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import fetch from 'node-fetch';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const response = (statusCode: number, message: string, gifList?: JSON) => ({
	statusCode,
	body: JSON.stringify({ message, gifList }),
});

const main = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
	const input = event.queryStringParameters?.input;

	if (!input) return response(400, 'You must provide an input');
	try {
		const gifList = await fetch(
			`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${input}&limit=9&offset=0&rating=g&lang=en`,
		).then((res) => res.json());
		return response(200, 'OK', gifList);
	} catch (error) {
		return response(500, error);
	}
};

export { main };
