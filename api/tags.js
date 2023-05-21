const express = require("express");
const tagsRouter = express.Router();
const { getAllTags } = require("../db");

tagsRouter.use((req, res, next) => {
	console.log("A request is being made to /users");

	next();
});

(module.exports = tagsRouter), getAllTags;
