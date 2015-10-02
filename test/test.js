const assert = require('assert');



var Kowa = require('kowa');
var KowaHttp = require('../kowa-http')();

Kowa.spawn(function* () {
  try {
    var postData = 'Hello World!';
    var options = {
      hostname: 'www.google.com',
      port: 80,
      path: '/upload',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length
      }
    };
    console.log(yield KowaHttp.requestAsync(options, postData));
    console.log(yield KowaHttp.getAsync("http://www.google.com"));
  } catch (e) {
    console.log("error", e);
  }
});
