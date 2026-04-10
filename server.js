const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(express.static('public')); 

app.post('/salvar', (req, res) => {
    const novosDados = req.body;

    fs.readFile('dados.json', 'utf8', (err, data) => {
        let json = [];
        if (!err && data) {
            json = JSON.parse(data);
        }
        
        json.push(novosDados);

        fs.writeFile('dados.json', JSON.stringify(json, null, 2), (err) => {
            if (err) return res.status(500).send("Erro ao salvar");
            res.send("Dados salvos com sucesso!");
        });
    });
});

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));