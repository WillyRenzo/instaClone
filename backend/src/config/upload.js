const multer = require('multer');
const path = require('path');

module.exports = {
    storage: new multer.diskStorage({ //Salvando no proprio HD
        destination: path.resolve(__dirname, '..', '..', 'uploads'), //Destino para salvar
        filename: function(req, file, callback){
            callback(null, file.originalname); //Primeiro parametro é o erro, e o segundo estamos passando o nome original da imagem
        }

    })
};