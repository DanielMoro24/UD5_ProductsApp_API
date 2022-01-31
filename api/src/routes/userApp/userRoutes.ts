import { userControllers } from "../../controllers/userControllers";

export const userRoutes = [
    {
        method: 'post',
        route: '/addUser',
        controller: userControllers,
        action: 'saveUser'
    },
    {
        method: 'get',
        route: '/getUsers',
        controller: userControllers,
        action: 'getUsers'
    },
    {
        method: 'get',
        route: '/getUsersById/:userId',
        controller: userControllers,
        action: 'getUsersById'
    },
    {
        method: 'delete',
        route: '/deleteUser/:userId',
        controller: userControllers,
        action: 'deleteUser'
    }
]