const express = require('express');
const router = express.Router();

const PostController = require('../controllers/posts.controller');

router.get('/posts', PostController.getAll);

router.get('/posts/:id', PostController.getOne);

router.post('/posts', PostController.addNew);

module.exports = router;
