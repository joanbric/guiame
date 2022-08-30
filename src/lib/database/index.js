import { Users } from './users';
import { getConnection } from './connection';

const collections = {
	users: undefined
};

async function getCollection(name) {
	if (collections[name]) return collections[name];

	const db = await getConnection();
	collections[name] = new Users(db);
	return collections[name];
}

async function getUserCollection() {
	return getCollection('users');
}

export const db = {
	users: getUserCollection
};
