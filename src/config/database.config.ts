import mongoose from 'mongoose';

/** Import config */
import config from './config';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(config.database.url, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });

        console.log(`Database connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export = connectDB;