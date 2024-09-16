const express = require ('express');
const server = express();

let produtos = [{ produto: "arroz", id: 1}, { produto: "batata", id: "2" }, { produto: "feijao", id: 3 }];
const produtosJSON = JSON.stringify(produtos);

server.use(express.json());

server.get('/products',(req,res)=>{
    res.status(200).end(produtosJSON)
});

server.post('/products',(req,res)=>{
    const prodct = req.body

    produtos.push(prodct)

    let produtosJSON = JSON.stringify(produtos);

    res.status(200).end(produtosJSON + ('adcionado com sucesso!'));

});

server.put('/products/:id',(req,res)=>{
    
    const prodct = req.body

    produtos.put(prodct)

    let produtosJSON = JSON.stringify(produtos);
    res.status(200).end(produtosJSON)
});

server.listen(3000, () => console.log('server rodando'));