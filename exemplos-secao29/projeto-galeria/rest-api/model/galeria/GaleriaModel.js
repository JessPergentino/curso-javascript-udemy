const db = require('../../banco/dbConection')

class GaleriaModel {

    static getTodos(callback) {
        const query = db.query('select * from galeria', callback)
        db.end
        return query
        
    }
}

module.exports = GaleriaModel