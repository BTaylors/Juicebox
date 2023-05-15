const express = require("express");
const client = require("./client");
const morgan = require("morgan");

const { getUsers, createUser } = require("./index");

const PORT = 5432;
const app = express();

client.connect();

app.use(express.json());
app.use(morgan("dev"));

app.get("/users", async (req, res, next) => {
	try {
		const users = await getUsers();
		res.send(users);
	} catch (error) {
		next(error);
	}
});

app.post("/users", async (req, res, next) => {
	try {
		const { name } = req.body;
		const newUser = await createUser(name);
		res.send(newUser);
	} catch (error) {
		next(error);
	}
});

app.use((err, req, res, next) => {
	res.send({
		name: err.name,
		message: err.message,
		stack: err.stack,
	});
});

app.listen(PORT, () => {
	console.log(`App listening on PORT ${PORT}`);
});
