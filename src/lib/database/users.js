export class Users {
	constructor(db) {
		const usersSchema = new db.Schema(
			{
				name: String,
				email: String,
				password: String,
				user_id: String,
				refresh_token: String
			},
			{
				statics: {
					findByEmail(email) {
						return this.findOne({ email });
					}
				}
			}
		);

		this.Users = db.model('users', usersSchema);
	}

	async findUser(email) {
		const user = await this.Users.findOne({ email });
		return user;
	}

	async verifyUser(email, password) {
		return !(await this.findUser(email, password)) ? false : true;
	}

    async findByRefreshToken(refresh_token){
        const user = await this.Users.findOne({refresh_token});

        return user;
    }

	async add(name, email, password, user_id, refresh_token) {
		const user = {
			name,
			email,
			password,
			user_id,
			refresh_token
		};
		try {
			const newUser = new this.Users({ ...user });
			await newUser.save();
			return {
				status: 201,
				message: 'New user added.'
			};
		} catch (err) {
			return {
				status: 500,
				message: err
			};
		}
	}

	async getAllUsers() {
		const users = await this.Users.find();
		return users;
	}

	async isExistedEmail(email) {
		const user = await this.Users.findByEmail(email);

		return !user ? false : true;
	}

	async isExistedUser(email, pass) {
		try {
			const user = await Users.findOne({ email, password: pass });
			console.log(user, 'IS', user == null);
			return user == null ? false : true;
		} catch (err) {
			return {
				status: false,
				message: err
			};
		}
	}
}
