const db = require('../db');

async function selectCustomers() {
    
    const client = await db.connect();
    console.log(client);
    const res = await client.query('SELECT * FROM clientes');
    return res.rows;
}



module.exports = { selectCustomers }


 