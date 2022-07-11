const db = require('../db');

async function selectProducts() {
    
    const client = await db.connect();
    const res = await client.query('SELECT id,nome,QUANTIDADE,VALOR,DS_IMAGEM FROM PRODUTO');
    return res.rows;
}

async function selectProductsByID(id) {
    
    const client = await db.connect();
    const res = await client.query('SELECT id,nome,descricao,fabricante, tipo,categoria,VALOR,DS_IMAGEM FROM PRODUTO where id = $1',[id]);
    return res.rows;
}

async function selectProductsByName(name) {
    console.log('%'+name+'%')
    const client = await db.connect();
    const res = await client.query('SELECT id,nome,descricao,fabricante, tipo,categoria,VALOR,DS_IMAGEM FROM PRODUTO where (upper(nome) like upper($1) or upper(descricao) like upper($2))',['%'+name+'%','%'+name+'%']);
    return res.rows;
}


module.exports = { selectProducts,selectProductsByID,selectProductsByName }


 