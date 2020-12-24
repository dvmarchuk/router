export default class Services {
	urlUsers = 'https://jsonplaceholder.typicode.com/users';
	urlPosts = 'http://jsonplaceholder.typicode.com/posts'

	getAllUsers() {
		return fetch(this.urlUsers)
			.then(value => value.json());
	}

	getUser(id) {
		return fetch(this.urlUsers + '/' + id)
			.then(value => value.json());

	}

	getAllPosts() {
		return fetch(this.urlPosts)
			.then(value => value.json());
	}

	getPost(id) {
		return fetch(this.urlPosts + '/' + id)
			.then(value => value.json());

	}
};
