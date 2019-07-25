const db = require('../../banco/dbConection')

class GaleriaModel {

    static getAll(callback) {
        const query = {
            text: 'select * from galeria'
        }
        const q = db.query(query, callback)
        db.end
        return q

    }

    static getId(id, callback) {
        const query = {
            text: 'select * from galeria where id_galeria = $1',
            values: [id]
        }

        const q = db.query(query, callback)
        db.end
        return q

    }

    static add(data, callback) {
        const query = {
            text: 'insert into galeria (titulo,caminho) values ($1,$2)',
            values: [data.titulo, data.caminho]
        }

        const q = db.query(query, callback)
        db.end
        return q

    }
}

module.exports = GaleriaModel