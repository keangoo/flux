import Dispatcher from '../dispatchers/Dispatcher.jsx';
export default {
	create: (user) => {
        console.log("create user");
        Dispatcher.dispatch({
            actionType: 'CREATE_USER',
            user: user
        });
    },
    edit: (user) => {
        console.log("edit user" + user.id);
        Dispatcher.dispatch({
            actionType: 'EDIT_USER',
            user: user
        });
    },
    delete: (key) => {
        console.log("delete user" + key);
        Dispatcher.dispatch({
            actionType: 'DELETE_USER',
            deleteUserKey: key
        });
    },
    receiveUser: (data) => {
        Dispatcher.dispatch({
            actionType: 'RECEIVE_DATA',
            data: data
        });
    }
}