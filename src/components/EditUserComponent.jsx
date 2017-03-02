import React from 'react';
import linkedState from 'react-link';
import {Link} from 'react-router';
import userAction from '../actions/UserAction.jsx';
import UserStore from '../stores/UserStore.jsx';

export default class EditUserComponent extends React.Component {
	constructor() {
		super();
		this.state = {};
		this._onChange = this._onChange.bind(this);
	}

	_getState() {
		console.log(this.props.params.id);
		var id=this.props.params.id;
		var user = UserStore.getUserById(id);

		user.id = id;
		return user;
	}

	_onChange() {
		this.setState(this._getState());
	}

	componentDidMount() {
		this._onChange();

		var id = this.props.params.id;
		UserStore.isViewed(id);
		UserStore.addChangeListener(this._onChange);
	}

	componentWillUnmount() {
		UserStore.removeChangeListener(this._onChange);
	}

	render() {
		return(
			<section id="CreateUserComponent">
				<div>
					ID: {this.state.id}
				</div>
				<div>
					Name: <input type="text" name="name" valueLink={linkedState(this, 'name')} /><br />
				</div>
				<div>
					Sex: <select valueLink={linkedState(this, 'sex')}>
							<option type="radio" name="gender" value="male">Male</option>
							<option type="radio" name="gender" value="female">Female</option>
							<option type="radio" name="gender" value="other">Other</option>
						</select>
				</div>
				<div>
					<button type="Submit" onClick={this.editUser.bind(this)}>Save</button>
				</div>
				{this.state.isUpdateSuccess == true ? <Link to="/user">edit success back to Home</Link> : ""}
			</section>
		);
	}

	editUser() {
		userAction.edit(this.state);
	}
}