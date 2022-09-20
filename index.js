const express = require('express')
const path = require('path');
const app = express();
const port = 3001

app.use(express.static('public'));

app.get('/', (req, res) => { //rota é o caminho que se acessa determinada ação do site no caso o que vem após a / exemplo: app.get('/contato.html'
  res.sendFile(path.join(__dirname, '/PaginaInicial.html'));
})

app.get('/formacao-academica', (req, res) => { //rota é o caminho que se acessa determinada ação do site no caso o que vem após a / exemplo: app.get('/contato.html'
  res.sendFile(path.join(__dirname, '/FormacaoAcademica.html'));
})

app.get('/projetos', (req, res) => { //rota é o caminho que se acessa determinada ação do site no caso o que vem após a / exemplo: app.get('/contato.html'
  res.sendFile(path.join(__dirname, '/Projetos.html'));
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
