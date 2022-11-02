const { getDatabase, CONTACT_DATABSE_ID } = require("../../lib/notion");

export default async (req, res) => {
    const response = await getDatabase(CONTACT_DATABSE_ID);
    console.log(response);

    res.status(200).json(response);
};
