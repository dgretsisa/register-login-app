import mongoose, { Schema } from 'mongoose';
import { UserDto } from '../interfaces/users/user.dto';

const UserSchema: Schema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    permissionLevel: Number
}, { timestamps: true });

export default mongoose.model<UserDto>('User', UserSchema);