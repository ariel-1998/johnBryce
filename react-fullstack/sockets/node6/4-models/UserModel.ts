export enum UserRole {
    Admin, User, Viewer
}

export interface UserModel {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    role: UserRole;
}