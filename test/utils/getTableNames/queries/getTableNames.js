const { submitQuery } = require("~root/lib/database");

const getTableNames = () => submitQuery`
    SELECT 
    table_name as tableName 
    FROM information_schema.TABLES 
    WHERE table_schema = "workloom_api_db";
`;

module.exports = getTableNames;
