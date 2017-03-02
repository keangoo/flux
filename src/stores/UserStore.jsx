import BaseStore from './BaseStore.jsx';

class UserStore extends BaseStore {
	constructor() {
		super();
		this.userIndex = 0;
		this.listData = {};
		this.subscribe(() => this.handler.bind(this));
	}

	/**
	 * Register callback to handle all updates
	 *
	 * @param {Object} action
	 */
	 handler(action) {
	 	console.log("I see you!");
	 	switch(action.actionType) {
	 		case 'CREATE_USER':
	 			this.listData[this.listData.length] = action.user;
	 			this.userIndex = this.listData.length;
	 			console.log(this.listData);
	 			this.emitChange();
	 			break;
	 		case 'DELETE_USER':
	 			delete this.listData[action.deleteUserKey];
	 			this.emitChange();
	 			break;
	 		case 'EDIT_USER':
	 			var editedUser = action.user;
                editedUser.isUpdateSuccess = true;
                this.listData[action.user.id] = editedUser;
                this.emitChange();
                break;
            case 'RECEIVE_DATA':
            	this.listData = action.data
            	this.emitChange();
            	break;
	 		default:
	 	}
	 }

	getUserList() {
        return this.listData
    }

    getUserById(id){
        return this.listData[id] || {}
    }

    isViewed(id){
        this.listData[id].isUpdateSuccess = false;
    }
}

const userStore = new UserStore();
export default userStore;