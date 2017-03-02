import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, Redirect} from "react-router";
import createBrowserHistory from "history/lib/createBrowserHistory";
import EditUser from "./components/EditUserComponent.jsx";
import ListUser from "./components/ListUserComponent.jsx";

let history = createBrowserHistory();

var routes = (
	<Route>
		<Redirect from="/" to="/user" />
		<Route path="user" component={ListUser} />
		<Route path="user/:id/edit" component={EditUser} name="editSpecificUser" />
	</Route>
	);

ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById('body'));