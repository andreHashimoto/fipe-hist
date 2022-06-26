// exports.post = (req, res, next) => {
//     res.status(201).send('Rota POST!');
//  };
  
//  exports.put = (req, res, next) => {
//     let id = req.params.id;
//     res.status(201).send(`Rota PUT com ID! --> ${id}`);
//  };
  
//  exports.delete = (req, res, next) => {
//     let id = req.params.id;
//     res.status(200).send(`Rota DELETE com ID! --> ${id}`);
//  };
const fipeService = require('./fipeService')

exports.getMeses = async (req, res, next) => {
    const anos = await fipeService.getMeses()
    res.status(200).send(anos);
};

exports.getMarcas = async (req, res, next) => {
    const {codigoTabelaReferencia} = req.body
    const anos = await fipeService.getMarcas(codigoTabelaReferencia)
    res.status(200).send(anos);
};

exports.getModelos = async (req, res, next) => {
    const {codigoMarca, codigoTabelaReferencia} = req.body
    const anos = await fipeService.getModelos(codigoMarca, codigoTabelaReferencia)
    res.status(200).send(anos);
};
  
exports.getAnosModelo = async (req, res, next) => {
    const {codigoMarca, codigoModelo, codigoTabelaReferencia} = req.body
    const anos = await fipeService.getAnosModelo(codigoMarca, codigoModelo, codigoTabelaReferencia)
    res.status(200).send(anos);
};

exports.getValorModelo = async (req, res, next) => {
    const {codigoMarca, codigoModelo, anoModelo, codigoTipoCombustivel, codigoTabelaReferencia} = req.body
    const valor = await fipeService.getValor(codigoMarca, codigoModelo, anoModelo, codigoTipoCombustivel, codigoTabelaReferencia)
    res.status(200).send(valor);
};