import * as jwt from 'jsonwebtoken';
import { dev } from '$app/env';
import { db } from '$lib/database/index';
import bcrypt from 'bcrypt';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }) {
	const fd = await request.formData();
	const users = await db.users();

	const user = fd.get('user');
	const pass = fd.get('pass');

	if (checkEmail(user)) generateError(202, 'Please insert a valid E-mail.');

	const userResponse = await users.findUser(user);
	if (!userResponse)
		return generateError(202, 'Sorry but, user not finded. Maybe bad E-mail or password.');

	const authenticated = await bcrypt.compare(pass, userResponse.password);
	if (!authenticated) return generateError(202, 'Bad password');

	const refresh_token = userResponse.refresh_token;
	const user_info = {
		user_id: userResponse.user_id,
		email: userResponse.email
	};
	// const key = Math.random() * 2000;
	const key = '555';
	const expiresIn = 24; // hours
	const token = jwt.sign(user_info, key, { expiresIn: `${expiresIn * 60 * 1000}` });
	const refresh_token_expiresIn = 1; // Days
	const secure = dev ? '' : ' Secure;';
	return {
		status: 303,
		headers: {
			'set-cookie': [
				`refresh_token=${refresh_token}; Max-Age=${
					refresh_token_expiresIn * 24 * 60 * 60
				}; Path=/; ${secure} HttpOnly`,
				`token=${token}; Max-Age=${15 * 60}; Path=/; ${secure} HttpOnly`
			],
			location: '/app'
		},
		body: {
			response: {
				message: userResponse.message
			}
		}
	};
}

function checkEmail(email) {
	return !email ? false : true;
}

function generateError(status, message) {
	return {
		status,
		body: {
			response: {
				type: 'error',
				message
			}
		}
	};
}
