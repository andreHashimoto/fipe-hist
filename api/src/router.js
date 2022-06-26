const controller = require('./controller');
module.exports = (app) => {
//    app.post('/usuario', controller.post);
//    app.put('/usuario/:id', controller.put);
//    app.delete('/usuario/:id', controller.delete);
    app.post('/fipe/meses', controller.getMeses);
    app.post('/fipe/marcas', controller.getMarcas);
    app.post('/fipe/modelos', controller.getModelos);
    app.post('/fipe/anosModelo', controller.getAnosModelo);
    app.post('/fipe/valor', controller.getValorModelo);
}