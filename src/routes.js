const express = require('express');
const router = express.Router();
const postsRoute = require('./routes/posts');

router.use('/posts',postsRoute);

module.exports = router;