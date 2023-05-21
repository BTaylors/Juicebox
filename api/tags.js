const express = require("express");
const tagsRouter = express.Router();
const { getAllTags } = require("../db");

tagsRouter.use((req, res, next) => {
	next();
});
tagsRouter.get("/:tagName/posts", async (req, res, next) => {
	console.log(req.params);
	const tag = decodeURIComponent(req.params.tagName);

	try {
		console.log(tag);
		posts = await getPostsByTagName(tag);
		console.log(posts);
		res.status(200).send(posts);
	} catch ({ name, message }) {
		next(name, message);
	}
});

(module.exports = tagsRouter), getAllTags;
