const postModel = require('../models/post');

function getAllPost(req, res) {
    const postArray = postModel.getAllPost();
    return res.status(200).json(postArray);
}

function addPost(req,res){
    const { author , content } = req.body;
    const singlePost = postModel.addPost(author , content);
    return res.status(201).json(singlePost);
}

function getPostById(req,res){
    const { id } = req.params;
    const result = postModel.getPostById(id);
    return res.status(200).json(result);
}

function replacePostById(req,res){
    const { id } = req.params;
    const { author, content } = req.body;
    const result = postModel.replacePostById(id,author,content);
    return res.status(200).json(result);
}

function deletePostById(req,res){
    const { id } = req.params;
    const deletedPost = postModel.deletePostById(id);
    return res.status(200).json(deletedPost);
}

module.exports = {
    getAllPost,
    addPost,
    getPostById,
    replacePostById,
    deletePostById 
};