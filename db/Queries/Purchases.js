const db = require('../db');

async function selectPurchases() {
    
    const client = await db.connect();
    const res = await client.query('SELECT * FROM PEDIDO where id_pessoa = $1',[id]);
    return res.rows;
}