import express, { Request, Response } from 'express';

/** import config */
import config from '../../config/config';

const router = express.Router();

/** @desc Landing Page */
/** @route GET / */

router.get('/', (req: Request, res: Response) => {
    res.status(200).send(`Server running at http://${config.server.hostname}:${config.server.port}`);
});

export = router;