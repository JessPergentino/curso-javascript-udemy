const { Pool } = require('pg')
const connectionString = 'postgresql://postgres:postgresql@localhost:5432/db_galeria'

const pool = new Pool({
    connectionString: connectionString,
})

module.exports = pool

