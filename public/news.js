"use strict";
console.log('News Page');
var fetch = require('node-fetch');

function busqueda(){
    var templateSource = document.getElementById('articles').innerHTML;
     //Utilizado para los handlebars
    var template = Handlebars.compile(templateSource);
    var barra = document.getElementById('buscador');
    document.getElementById('articles').removeAttribute("hidden");
    var url = 'http://newsapi.org/v2/everything?' +
    ("q=" + barra.value) +
    '&apiKey=49cf6ed726a740239aba8827554cad58';
    var req = new Request(url);
    fetch(req)
    .then(function (res) {
        return res.json();
    }).then(function (news) {
        document.getElementById('articles').innerHTML = template({
            news: news.articles,
        });
    });
}
