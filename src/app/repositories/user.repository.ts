import { Model } from 'mongoose';
import UserModel from '../models/user.model';
import { UserDto } from '../interfaces/users/user.dto';
import { UserPutDto } from '../interfaces/users/user.put.dto';
import { UserPatchDto } from '../interfaces/users/user.patch.dto';
import { RepositoryInterface } from '../interfaces/repository.interface';

class UsersRepository implements RepositoryInterface {
    private readonly model: Model<UserDto> = UserModel;

    async list(limit: number, page: number) {
        return this.model.find({});
    }

    async create(resource: UserDto) {
        return this.model.create(resource);
    }

    async showById(id: string) {
        return this.model.findById(id);
    }

    async putById(id: string, resource: UserPutDto) {
        return this.model.findByIdAndUpdate(id, resource);
    }

    async patchById(id: string, resource: UserPatchDto) {
        return this.model.findByIdAndUpdate(id, resource);
    }
 
    async deleteById(id: string) {
        return this.model.findByIdAndRemove(id);
    }
}

export default new UsersRepository();