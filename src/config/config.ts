const SERVER_PORT = process.env.SERVER_PORT || 1337;
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const DB_DATABASE = process.env.DB_DATABASE;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.wuq0u.mongodb.net/${DB_DATABASE}?retryWrites=true&w=majority`;

const SERVER = {
    port: SERVER_PORT,
    hostname: SERVER_HOSTNAME
};

const DATABASE = {
    url: DB_URL,
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASSWORD
};

const config = {
    server: SERVER,
    database: DATABASE
};

export default config;