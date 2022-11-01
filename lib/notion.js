import {Client} from '@notionhq/client';

export const databaseId = process.env.NOTION_DATABASE;

const notion = new Client({
	auth: process.env.NOTION_KEY,
});

export const getDatabase = async () => {
	const response = await notion.databases.query({
	  database_id: databaseId,
	});
	return response.results;
};