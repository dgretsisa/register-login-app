export interface UserPutDto {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    permissionLevel: number;
}