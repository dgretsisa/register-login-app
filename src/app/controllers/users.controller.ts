import { Request, Response } from 'express';
import UserRepository from '../repositories/user.repository';

class UsersController {

    async list(req: Request, res: Response) {
        try {
            const data = await UserRepository.list(1,1);
            return res.status(200).send(data);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    async create(req: Request, res: Response) {
        try {
            const data = await UserRepository.create(req.body);
            return res.status(201).send(data);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    async showById(req: Request, res: Response) {
        try {
            const data = await UserRepository.showById(req.params.id);
            return res.status(200).send(data);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    async putById(req: Request, res: Response) {
        try {
            await UserRepository.putById(req.params.id, req.body);
            return res.status(204).send();
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    async patchById(req: Request, res: Response) {
        try {
            await UserRepository.patchById(req.params.id, req.body);
            return res.status(204).send();
        } catch (err) {
            res.status(500).send(err.message);
        }
        
    }

    async deleteById(req: Request, res: Response) {
        try {
            await UserRepository.deleteById(req.params.id);
            return res.status(204).send();
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
}

export default new UsersController();