const axios = require('axios')

const consultaApi = async (endpoint, params) => {
    let endpointsUrls = {
        meses: 'https://veiculos.fipe.org.br/api/veiculos//ConsultarTabelaDeReferencia',
        marcas: 'https://veiculos.fipe.org.br/api/veiculos//ConsultarMarcas',
        modelos: 'https://veiculos.fipe.org.br/api/veiculos//ConsultarModelos',
        anoModelo: 'https://veiculos.fipe.org.br/api/veiculos//ConsultarAnoModelo',
        valor: 'https://veiculos.fipe.org.br/api/veiculos//ConsultarValorComTodosParametros'
    }

    const resp = await axios.post(endpointsUrls[endpoint], params)

    return resp.data
}

exports.getMeses = async () => {
    return await consultaApi('meses', null)
}

exports.getMarcas = async (codigoTabelaReferencia) => {
    return await consultaApi('marcas', {codigoTabelaReferencia: codigoTabelaReferencia, codigoTipoVeiculo: 1})
}

exports.getModelos = async (codigoMarca, codigoTabelaReferencia) => {
    return await consultaApi('modelos', {codigoTabelaReferencia: codigoTabelaReferencia, codigoTipoVeiculo: 1, codigoMarca: codigoMarca})
}

exports.getAnosModelo = async (codigoMarca, codigoModelo, codigoTabelaReferencia) => {
    return await consultaApi('anoModelo', {codigoTabelaReferencia: codigoTabelaReferencia, codigoTipoVeiculo: 1, codigoMarca: codigoMarca, codigoModelo: codigoModelo})
}

exports.getValor = async (codigoMarca, codigoModelo, anoModelo, codigoTipoCombustivel, codigoTabelaReferencia) => {
    console.log({codigoTabelaReferencia: codigoTabelaReferencia, codigoTipoVeiculo: 1, codigoMarca: codigoMarca, codigoModelo: codigoModelo, anoModelo: anoModelo, codigoTipoCombustivel: codigoTipoCombustivel, tipoVeiculo: 'carro', tipoConsulta: 'tradicional'})
    return await consultaApi('valor', {codigoTabelaReferencia: codigoTabelaReferencia, codigoTipoVeiculo: 1, codigoMarca: codigoMarca, codigoModelo: codigoModelo, anoModelo: anoModelo, codigoTipoCombustivel: codigoTipoCombustivel, tipoVeiculo: 'carro', tipoConsulta: 'tradicional'})
}
