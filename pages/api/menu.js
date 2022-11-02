const { getDatabase, MENU_DATABASE_ID } = require("../../lib/notion");

export default async function handler(req, res) {
    const response = await getDatabase(MENU_DATABASE_ID, {
        sorts: [
            {
                property: "index",
                direction: "ascending",
            },
            {
                property: "write_date",
                direction: "descending",
            },
        ],
    });

    res.status(200).json({ response });
}
