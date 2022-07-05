const db = require('../db');

async function login(username, password ) {
    const client = await db.connect();
    const res = await client.query("select nome_usuario from usuario where upper(nome_usuario) = upper($1) and senha = crypt($2, senha)",[username,password]);
    console.log("Resultado");
    console.log(res);
    if(res.rowCount > 0){
        return true;
    }
    else 
        return false;
}


async function people(nome, email,cpf, cep,password ) {
    const client = await db.connect();
    const res = await client.query("insert into PESSOA (NOME,CPF, CEP) values ($1, $2,$3)",[nome,cpf,cep]);
    const res2 = await client.query("insert into usuario (id_pessoa,NOME_USUARIO,senha, email) values (currval('pessoa_seq'),$1, crypt($2, gen_salt('bf')), $3)",[email,password,email]); 
    return res,res2;
}

module.exports = { login,people }
