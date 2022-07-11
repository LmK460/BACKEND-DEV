const express = require('express');
const dbp = require('./db/Queries/Products');
const dbu = require('./db/Queries/Users');
const app = express();
app.use(express.json())

/*
app.get("/products",async function(req, res, next) {
    const data = await dbp.selectProducts();
    if(data != null)
        res.send((data));
    else
        res.sendStatus(404);
});
*/
app.get("/products",async function(req, res, next) {
    console.log(req.query)
    if(req.query.id ==null && req.query.nome == null){
        data = await dbp.selectProducts();
    }
    else if(req.query.id != null){
        data = await dbp.selectProductsByID(req.query.id);
    }
    else if(req.query.nome != null){
        console.log("Rota do nome");
        data = await dbp.selectProductsByName(req.query.nome);
    }
    console.log(data);
    if(JSON.stringify(data) != "[]")
        res.send((data));
    else
        res.sendStatus(404);
});



app.post("/login",async function(req, res, next) {
    console.log("estou na rota de login")
    const data = await dbu.login(req.body.name, req.body.password);
    console.log(data);
    if(data == true)
        res.status(202).json({ token:'12321321321321', message: 'Usuario autenticado com sucesso'});
    else
        res.status(404).json({message :'Usuário ou senha inválida'});
});

app.post("/people",async function(req, res, next) {
    console.log("lendo o body");
    console.log(req.body);
    console.log(req.body.nome);
    const data = await dbu.people(req.body.nome, req.body.email,req.body.cpf,req.body.cep,req.body.password);
    if(data != null)
        res.sendStatus(200,(data));
    else
        res.sendStatus(201,"Não foi possivel realizar o cadastro, tente novamente");
});




/*
app.use((req, res, next) => {
    res.status(200).send({
        mensagem: 'API conectada'
    });
});*/

module.exports = app;