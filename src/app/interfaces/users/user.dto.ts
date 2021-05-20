import { Document } from 'mongoose';

export interface UserDto extends Document {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    permissionLevel?: number
};