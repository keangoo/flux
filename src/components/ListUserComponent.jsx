import React from 'react';
import CreateUser from './CreateUserComponent.jsx';
import userAction from '../actions/UserAction.jsx';
import UserStore from '../stores/UserStore.jsx';
import {Link} from 'react-router';

export default class ListUserComponent extends React.Component {
	constructor() {
		super();
		this.state = this._getState();
		this._onChange = this._onChange.bind(this);
	}

	_getState() {
		console.log('get list user');
		console.log(UserStore.getUserList());
        return {
            users: UserStore.getUserList()
        };
    }

	_onChange() {
		this.setState(this._getState());
	}

	componentDidMount() {
		UserStore.addChangeListener(this._onChange);
	}

	componentWillMount() {
		UserStore.removeChangeListener(this._onChange);
	}

	render() {
		return(
			<section id="ListUserComponent">
				<table className="container-fluid">
					<thead>
						<tr className="row">
							<td className="col-md-1">Id</td>
							<td className="col-md-2">Name</td>
							<td className="col-md-2">Sex</td>
							<td className="col-md-2">Action</td>
						</tr>
					</thead>
					<tbody>
						{this.createTableRow}
					</tbody>
				</table>
				<CreateUser />
			</section>
			);
	}

	deleteUser() {
		console.log('delete user');
		userAction.delete(this);
	}

	get createTableRow() {
		var rows = [];
		var users = this.state.users;
		var deleteUser = this.deleteUser;

		Object.keys(users).forEach(function(key) {
			console.log(key);
			rows.push(
					<tr key={key} className="row">
						<td className="col-md-1">{key}</td>
						<td className="col-md-2">{users[key].name}</td>
						<td className="col-md-2">{users[key].sex}</td>
						<td className="col-md-2"><button onClick={deleteUser.bind(key)}>Delete</button><Link to={`/user/${key}/edit`}>Edit</Link></td>
					</tr>
				);
		});

		return rows;
	}
}