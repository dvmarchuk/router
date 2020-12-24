import React, {Component} from 'react';
import Services from '../../services/Services';
import {Link, Route, Switch, withRouter} from 'react-router-dom';
import FullPost from "../full-post/FullPost";

class Posts extends Component {

	postService = new Services();
	state = {
		posts: []
	};

	async componentDidMount(){
		let posts = await this.postService.getAllPosts()
		this.setState({posts});
	}

	render() {
		let {match: {url}} = this.props;
		let {posts} = this.state;
		return (
			<div>
				{
					posts.map(value => <div key={value.id}>
						<Link to={url + '/' + value.id}>
							{value.title}

						</Link>
					</div>)
				}

				<div>
					<Switch>
						<Route path={url + '/:id'}
							   render={({match: {params: {id}}}) => {
								   return (<FullPost key={id}/>);
							   }}/>
					</Switch>

				</div>

			</div>
		);
	}
}

export default withRouter(Posts);
