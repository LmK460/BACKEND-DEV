async function connect() {
    if (global.connection)
        return global.connection.connect();

    const { Pool } = require('pg');
    const pool = new Pool({
        connectionString: "postgres://postgres:123456@localhost:5432/postgres"
    });

    //guardando para usar sempre o mesmo
    global.connection = pool;
    return pool.connect();
}


module.exports = { connect }