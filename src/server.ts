import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

/** Load configs */
dotenv.config();
import config from './config/config';
import connectDB from './config/database.config';

/** Database connection */
connectDB();

/** Initialize express app */
const app: Application = express();

/** Middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

/** Routes */
app.use('/', require('./app/routes/index.route'));
app.use('/api/users', require('./app/routes/user.route'));

/** Create server */
app.listen(
    config.server.port,
    () => console.log(`Server running at http://${config.server.hostname}:${config.server.port}`)
);