import "dotenv/config";

const connectionString = process.env.MONGO_DB_CONNECTION_STRING;
const port = process.env.APP_PORT;
export { connectionString, port };
