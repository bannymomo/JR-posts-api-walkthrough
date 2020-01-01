const postArray = [];
let currentID = 1;

function getAllPost(){
    return JSON.parse(JSON.stringify(postArray));
}

function addPost(author,content){
    const singlePost = { author, content, id : currentID++ };
    postArray.push(singlePost);
    return singlePost;
}
 
function getPostById(id){
    const result = postArray.find(function(element){
        return element.id === id; 
    });
    return result;
}

function replacePostById(id,author,content){
    const result = getPostById(id);
    result.author = author;
    result.content = content;
    return result;
}

function deletePostById(id){
    const index = getPostIndexById(id);
    const deletedPost = postArray.splice(index,1);
    return deletedPost;
}

function doesIdExist(id){
    const index = getPostIndexById(id);
    return index !== -1;
}

function getPostIndexById(id){
    const index = postArray.findIndex(function(element){
        return element.id === id;
    });
    return index;
}

module.exports = {
    getAllPost,
    addPost,
    getPostById,
    replacePostById,
    deletePostById,
    doesIdExist,
    getPostIndexById
};