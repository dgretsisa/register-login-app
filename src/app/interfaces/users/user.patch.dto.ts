import { UserPutDto } from './user.put.dto';

export interface UserPatchDto extends Partial<UserPutDto> {

}