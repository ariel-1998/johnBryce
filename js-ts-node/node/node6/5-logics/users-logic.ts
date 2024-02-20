import { dal2 } from "../2-utils/dal";
import { UserModel, UserRole } from "../4-models/UserModel";


export function getAllUsers() {
    return dal2.getUsers();
}

export async function getUser(id: number) {
    let users = await getAllUsers();
    let user = users.find(usr => usr.id === id);
    return user;
}

export async function addUser(user: UserModel) {
    let users = await getAllUsers();
    const id = Math.max(...users.map(prod => prod.id)) + 1;
    user.id = id;
    user.role = UserRole.User;
    users.push(user);
    await dal2.saveUsers(users);
    return user;
}

// export async function userUpdate(updatedUser: UserModel) {
//     let users = await getAllUsers();
//     let user = users.find(prod => prod.id === updatedUser.id);

//     return user;
// }

// export async function deleteUser(user: UserModel) {
//     let users = await getAllUsers();
//     users = users.filter(usr => usr.id !== user.id);
//     await dal2.saveUsers(users);
// } 