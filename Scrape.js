const request = require('request');
const cheerio = require('cheerio');

request('https://www.youtube.com/playlist?list=PL3s-49gjr4ytMR_tAm69AdFEniayIT_q8', function (error, response, html) {
  if (!error && response.statusCode === 200) {
    const $ = cheerio.load(html);
    const parsedHTML = $.load('<html><body dir=\"ltr\" ><script></script></body></html>');
    console.log(parsedHTML);
  }
});
