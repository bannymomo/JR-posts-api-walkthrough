const express = require('express');
const { 
    getAllPost,
    addPost,
    getPostById,
    replacePostById,
    deletePostById 
} = require('../controllers/posts');

const checkID = require('../middleware/checkID');
const router = express.Router();

router.get('',getAllPost);
router.get('/:id', checkID, getPostById);
router.post('',addPost);
router.put('/:id', checkID, replacePostById);
router.delete('/:id', checkID, deletePostById);

module.exports = router;
