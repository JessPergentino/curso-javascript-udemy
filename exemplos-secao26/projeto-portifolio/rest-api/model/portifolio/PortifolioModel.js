const db = require('../../banco/dbConexao');

module.exports = class PortifolioModel {
    static getTodos(callback) {
        return db.query("Select * From portifolio", callback);
    }

    static getId(id, callback) {
        return db.query("Select * from portifolio where id = $1", [id], callback);
    }
}