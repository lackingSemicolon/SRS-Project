var requirejs = require('requirejs');

requirejs.config({
  //load the mode modules to top level JS file
  //by passing the top level main.js require function to requirejs
  nodeRequire: require,
});
var request;
var cheerio;
requirejs(['request', 'cheerio'],
  function (name1, name2) {
    request = name1;
    cheerio = name2;
  });

request('https://www.youtube.com/playlist?list=PL3s-49gjr4ytMR_tAm69AdFEniayIT_q8', function (error, response, html) {
  if (!error && response.statusCode === 200) {
    const $ = cheerio.load(html);
    const parsedHTML = $.load('<html><body><script></script></body></html>');
    console.log(parsedHTML);
  }
});
