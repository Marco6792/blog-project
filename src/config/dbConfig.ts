import mongoose from "mongoose";

export async function connect() {
	try {
		await mongoose.connect("mongodb://127.0.0.1:27017");
		const connection = mongoose.connection;
		// listen for connection's
		connection.on("connected", () => {
			console.log({ message: "database connected successfully!" });
		});
		// catch connection Error
		connection.on("error", (err) =>
			console.log({
				message: "database connection error. Please check connection string:" + err,
			}),
		);
	} catch (error: any) {
		console.log("something when wrong..");
		console.log(error.message);
	}
}
