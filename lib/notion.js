import { Client } from "@notionhq/client";

const notion = new Client({
    auth: process.env.NOTION_KEY,
});

export const MENU_DATABASE_ID = process.env.NOTION_MENU_DATABSE_ID;
export const CONTACT_DATABSE_ID = process.env.NOTION_CONTACT_DATABSE_ID;

export const getDatabase = async (databaseId, option) => {
    const response = await notion.databases.query({
        database_id: databaseId,
        ...option,
    });
    return response.results;
};
