import mongoose from 'mongoose';
export async function getConnection() {
	try {
		const dbpass = process.env.DB_PASSWORD;
		await mongoose.connect(
			`mongodb+srv://master:${dbpass}@bus.tigys.mongodb.net/guiame?retryWrites=true&w=majority`
		);

        return mongoose
	} catch (err) {
		console.log(err);
	}
}