const express = require ('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const PostController = require ('./controllers/PostController');
const LikeController = require ('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.post('/posts', upload.single('image'),PostController.store);
routes.get('/posts', PostController.index);

routes.post('/posts/:id/like', LikeController.store);

/*routes.get('/', (req, res) => {
    return res.send(`Ola ${req.query.name}`);
}) //Estamos interceptando a requisição para '/', MIDDLEWARE (req,res)
    //res representa a resposta do servidor e req representa a requisição do servidor
*/


module.exports = routes;