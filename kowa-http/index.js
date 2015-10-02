"use strict";


var http = require('http');

// external dependencies
module.exports = function () {
  var KowaHttp = Object.create(http);
  /*
  KowaHttp.ServerResponse = Object.create(http.ServerResponse);

  KowaHttp.ServerResponse.setTimeoutAsync = function(msecs) {
    return new Promise(
      function(resolve, reject) {
        http.ServerResponse.setTimeout(msecs, function (err) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      }
    );
  };
  */
  /*
  KowaHttp.Server = Object.create(http.Server);

  KowaHttp.Server.closeAsync = function(msecs) {
    return new Promise(
      function(resolve, reject) {
        http.Server.close(function (err) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      }
    );
  };
  */

  KowaHttp.requestAsync = function(options, postData) {
    return new Promise(
      function(resolve, reject) {
        var req = http.request(options, function (res) {
          resolve(res);
        });
        req.on('error', function(e) {
          reject(e);
        });
        req.write(postData);
        req.end();
      }
    );
  };

  KowaHttp.getAsync = function(options) {
    return new Promise(
      function(resolve, reject) {
        http.get(options, function (res) {
          resolve(res);
        }).on('error', function(e) {
          console.log("A")
          reject(e);
        });
      }
    );
  };

  return KowaHttp;
};
