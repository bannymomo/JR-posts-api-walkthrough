const express = require('express')
const app = express();
const cors = require('cors');
require('dotenv').config();
app.use(express.json());
app.use(cors());
const routes = require('./routes')
app.use('/v1',routes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port: ${PORT}`));


// const postArray = [];
// let currentID = 1;
// //get all person
// app.get('/v1/posts', function (req, res) {
//     return res.status(200).send(postArray);
// });

// //add a new post
// app.post('/v1/posts', function (req, res) {
//     const { author , content } = req.body;
//     const singlePost = { author, content, id : currentID++ };//author:author,content:content
//     postArray.push(singlePost);
//     return res.status(201).json(singlePost);
// });
 
// // get post by id
// app.get('/v1/posts/:id',function(req,res){
//     const { id } = req.params;
//     const result = postArray.find(function(i){
//        return i.id === Number(id);
//     });
//     if(!result){
//         return res.sendStatus(404);
//     };
//     return res.status(200).json(result);
// });

// //replace post by id
// app.put('/v1/posts/:id',function(req,res){
//     const { id } = req.params;
//     const { author, content } = req.body;
//     const result = postArray.find(function(i){
//        return i.id === Number(id);
//     });
//     if(!result){
//         return res.sendStatus(404);
//     };
//     result.author = author;
//     result.content = content;
//     return res.status(200).json(result);
// });

// //delete post by id
// app.delete('/v1/posts/:id',function(req,res){
//     const { id } = req.params;
//     const index = postArray.findIndex(function(i){
//         return i.id === Number(id);
//      });
//      if(index === -1){
//         return res.sendStatus(404);
//      }
//      const deletedPost = postArray.splice(index,1);
//      return res.status(200).json(deletedPost);
// });

