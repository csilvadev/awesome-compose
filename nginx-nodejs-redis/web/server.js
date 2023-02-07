const os = require('os');
const express = require('express');
const app = express();
const redis = require('redis');
const redisClient = redis.createClient({
  host: 'redis',
  port: 6379
});

app.get('/', function(req, res) {
    redisClient.get('numVisits', function(err, numVisits) {
        numVisitsToDisplay = parseInt(numVisits) + 1;
        if (isNaN(numVisitsToDisplay)) {
            numVisitsToDisplay = 1;
        }
       res.send(os.hostname() +': Number of visits is: ' + numVisitsToDisplay);
        numVisits++;
        redisClient.set('numVisits', numVisits);
    });
});

app.get('/v1/menu/menu-web-logged-out-config', function(req, res) {
    redisClient.get('numVisits', function(err) {
        res.json({"menu_id":"menu-web-logged-out-config","name":"Web Deslogada","type":"menu-web-logged-out","items":[{"products":["all"],"_id":"6391e8e4e2ea8500120db68b","title":"Início","order":1,"advisory_rating":"L","link_to":"/","sub_items":[]},{"products":["all"],"_id":"6391e8e4e2ea8500120db68c","title":"Assistir","order":2,"advisory_rating":"L","link_to":"submenu","sub_items":[{"products":["all"],"_id":"6391e8e4e2ea8500120db68d","title":"Ação e aventura","order":1,"advisory_rating":"L","link_to":"/acao-e-aventura"},{"products":["all"],"_id":"6391e8e4e2ea8500120db68e","title":"Comédia","order":2,"advisory_rating":"L","link_to":"/comedia"},{"products":["all"],"_id":"6391e8e4e2ea8500120db68f","title":"Crianças","order":3,"advisory_rating":"L","link_to":"/criancas"},{"products":["all"],"_id":"6391e8e4e2ea8500120db690","title":"Drama","order":4,"advisory_rating":"L","link_to":"/drama"},{"products":["all"],"_id":"6391e8e4e2ea8500120db691","title":"Família e Infantil","order":5,"advisory_rating":"L","link_to":"/familia-e-infantil"},{"products":["all"],"_id":"6391e8e4e2ea8500120db692","title":"Ficção Científica","order":6,"advisory_rating":"L","link_to":"/ficcao-cientifica"},{"products":["all"],"_id":"6391e8e4e2ea8500120db693","title":"Romance","order":7,"advisory_rating":"L","link_to":"/romance"},{"products":["all"],"_id":"6391e8e4e2ea8500120db694","title":"Saúde e Bem-estar","order":8,"advisory_rating":"L","link_to":"/saude-e-bem-estar"},{"products":["all"],"_id":"6391e8e4e2ea8500120db695","title":"Suspense e terror","order":9,"advisory_rating":"L","link_to":"/suspense-e-terror"},{"products":["all"],"_id":"6391e8e4e2ea8500120db696","title":"Shows","order":10,"advisory_rating":"L","link_to":"/shows"},{"products":["all"],"_id":"6391e8e4e2ea8500120db697","title":"Séries","order":11,"advisory_rating":"L","link_to":"/series"}]},{"products":["all"],"_id":"6391e8e4e2ea8500120db698","sub_items":[],"title":"Ao Vivo","order":3,"advisory_rating":"L","link_to":"/ao-vivo"},{"products":["all"],"_id":"6391e8e4e2ea8500120db699","title":"Alugar","order":4,"advisory_rating":"L","link_to":"/alugue","sub_items":[]},{"products":["all"],"_id":"63b861356cdb780019742a6b","title":"Assine","order":5,"advisory_rating":"L","link_to":"/assine","sub_items":[]},{"products":["all"],"_id":"63b861356cdb780019742a6c","title":"Blog","order":6,"advisory_rating":"L","link_to":"/blog","sub_items":[]},{"products":["all"],"_id":"63b861356cdb780019742a6d","title":"Como Acessar","order":7,"advisory_rating":"L","link_to":"/como-acessar","sub_items":[]}]})
    });
});

app.get('/v1/screen/home-web-screen-config', function(req, res) {
    redisClient.get('numVisits', function(err, numVisits) {
        numVisitsToDisplay = parseInt(numVisits) + 1;
        if (isNaN(numVisitsToDisplay)) {
            numVisitsToDisplay = 1;
        }
       res.send(os.hostname() +': Number of visits is: ' + numVisitsToDisplay);
        numVisits++;
        redisClient.set('numVisits', numVisits);
    });
});


app.listen(5000, function() {
    console.log('Web application is listening on port 5000');
});
