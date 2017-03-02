import React from 'react';
import linkedState from 'react-link';
import userAction from '../actions/UserAction.jsx';
import UserStore from '../stores/UserStore.jsx';
export default class CreateUserComponent extends React.Component {
    constructor() {
        super();
        this.state = this._getState();
        this._onChange = this._onChange.bind(this);
    }

    _getState() {
        return {
            name: "",
            sex: "male"
        };
    }

    _onChange() {
        this.setState(this._getState());
    }

    componentDidMount() {
        UserStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        UserStore.removeChangeListener(this._onChange);
    }

    render() {
        return (
            <section id="CreateUserComponent">
                <div>
                    Name:<input type="text" name="name" valueLink={linkedState(this, 'name')} /><br/>
                </div>
                <div>
                    Sex:<select valueLink={linkedState(this, 'sex')}>
                            <option type="radio" name="gender" value="male"  > Male </option>
                            <option type="radio" name="gender" value="female" > Female </option>
                            <option type="radio" name="gender" value="other" > Other </option>
                        </select>
                </div>
                {this.state.name}<br/>
                {this.state.sex}
                <div>
                    <button type="submit" onClick={this.createUser.bind(this)}>Save</button>
                </div>
            </section>
        )
    }

    createUser() {
        userAction.create(this.state);
    }
}
