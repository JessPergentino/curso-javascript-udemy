const db = require('../../banco/dbConexao');

module.exports = class PortifolioModel {
    static getTodos(callback) {
        return db.query("Select * From portifolio", callback);
    }

    static getId(id, callback) {
        return db.query("Select * from portifolio where id = $1", [id], callback);
    }

    static adicionar(portifolio, callback) {
        return db.query("INSERT INTO portifolio (descricao, detalhes) VALUES($1, $2)",
            [portifolio.descricao, portifolio.detalhes], callback);
    }

    static deletar(id, callback) {
        return db.query("delete from portifolio where id = $1", [id], callback);
    }

    static alterar(portifolio, callback) {
        return db.query("update portifolio set descricao = $1, detalhes = $2 where id = $3",
            [portifolio.descricao, portifolio.detalhes, portifolio.id], callback);
    }
}