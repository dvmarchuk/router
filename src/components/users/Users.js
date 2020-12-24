import React, {Component} from 'react';
import Services from '../../services/Services';
import {Link, Route, Switch, withRouter} from 'react-router-dom';
import FullUser from '../full-user/FullUser';

class Users extends Component {

	userService = new Services();
	state = {
		users: []
	};

	async componentDidMount() {
		let users = await this.userService.getAllUsers();
		this.setState({users});
	}

	render() {
		let {match: {url}} = this.props;
		let {users} = this.state;
		return (
			<div>
				{
					users.map(value => <div key={value.id}>
						<Link to={url + '/' + value.id}>
							{value.name}

						</Link>
					</div>)
				}

				<div>
					<Switch>
						<Route path={url + '/:id'}
							   render={({match: {params: {id}}}) => {
								   return (<FullUser key={id}/>);
							   }}/>
					</Switch>

				</div>

			</div>
		);
	}

}

export default withRouter(Users);
// export default Users;
