import express, { Request, Response } from 'express';
import UserController from '../controllers/users.controller';

const router = express.Router();

/** @desc List of Users */
/** @route GET / */

router.get('/', UserController.list);

/** @desc Create New User */
/** @route POST / */

router.post('/', UserController.create);

/** @desc Show a User by Id */
/** @route GET /:id */

router.get('/:id', UserController.showById);

/** @desc  Update a User by Id via PUT */
/** @route PUT /:id */

router.put('/:id', UserController.putById);

/** @desc  Update a User by Id via PATCH */
/** @route PATCH /:id */

router.patch('/:id', UserController.patchById);

/** @desc  Delete a User by Id */
/** @route DELETE /:id */

router.delete('/:id', UserController.deleteById);

export = router;