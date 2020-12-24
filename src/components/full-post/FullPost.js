import React, {Component} from 'react';
import Services from '../../services/Services';
import {
    withRouter
} from 'react-router-dom';

class FullPost extends Component {

    postService = new Services();
    state = {post:null};

    async componentDidMount() {
        let {match: {params: {id}}} = this.props;
        let post = await this.postService.getPost(id)
        this.setState({post})
    }

    render() {
        let {post} = this.state;
        return (
            <div>
                {post && <div>{post.id} - {post.title} - {post.body}</div>}
            </div>
        );
    }
}

export default withRouter(FullPost);