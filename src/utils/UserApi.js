import userAction from '../actions/UserAction.jsx';

export default {
	getUserData: () =>  {
		var data = JSON.parse(localStorage.getItem('users'));
		userAction.receiveUser(data);
	}
}