import 'dotenv/config';
import * as jwt from 'jsonwebtoken';
import cookie from 'cookie';

import { db } from '$lib/database/index';
import { dev } from '$app/env';

/** @type {import('@sveltejs/kit').GetSession;} */
export async function getSession({ request }) {
	const { token, refresh_token } = cookie.parse(request.headers.get('cookie') || '');
  
	if (!token || !refresh_token) return { authenticated: false };

	const key = '555';
	const user_cookie = jwt.verify(token, key);
	const db_users = await db.users();
	const user = await db_users.findByRefreshToken(refresh_token);

	if (!user || user_cookie.user_id != user.user_id || user.email != user_cookie.email) {
		request.headers.set(
			'cookie',
			cookie.serialize('refresh_token', '', {
				maxAge: 0,
				path: '/',
				secure: !dev,
				httpOnly: true
			})
            );
            
		return { authenticated: false };
	}

    const new_user = {
		user_id: user.user_id,
		email: user.email
	};

	const new_token = jwt.sign(new_user, key, { expiresIn: `${15 * 60 * 1000}` });
    request.headers.set(
		'cookie',
        cookie.serialize('token', new_token, {
            maxAge: 15 * 60,
            path:'/',
            secure: !dev,
            httpOnly: true
        })
	);
	return {
		authenticated: true,
		user: {
			email: user.email,
			name: user.name
		},
		MAP_TOKEN: process.env.MAP_ACCESS_TOKEN
	};
}
