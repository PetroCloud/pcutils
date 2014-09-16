var Q = require("q");
var request = Q.denodeify(require("request"));

function condense(options) {
  return request(options)
    .spread(function(response, body) {
      var code = response.statusCode;
      if (code === 200) {
        return Q(body);
      } else if (code === 400) {
        throw new Error("Bad Request: " + body);
      } else {
        throw new Error("Bad Status Code: " + response.statusCode);
      }
    });
}

function success(jsonObject) {
  var _ = require("lodash");
  return _.merge({
    response: "ok"
  }, jsonObject);
}

function fail(errCode, errMessage, jsonObject) {
  var _ = require("lodash");
  return _.merge({
    response: "fail",
    code: errCode,
    message: errMessage
  }, jsonObject);
}

function postJSONObject(url, JSONObject) {
  var options = {
    uri: url,
    json: true,
    body: JSONObject,
    method: "post"
  };
  return condense(options);
}

function postXML(url, xml) {
  var options = {
    uri: url,
    body: xml,
    headers: {
      'Content-Type': 'text/xml'
    },
    method: "post"
  };
  return condense(options);
}

function get(url) {
  var options = {
    uri: url,
    method: "get"
  };
  return condense(options);
}

function getJSON(url) {
  var options = {
    uri: url,
    json: true,
    header: {
      'Content-Type': 'application/json'
    },
    method: "get"
  };
  return condense(options);
}

function sendMail(to, subject, body) {
  var _ = require("lodash");
  var sendgrid = require('sendgrid')(sails.config.local.sendgrid.username, sails.config.local.sendgrid.password);

  compiled = _.template(body);
  var payload = {
    to: to,
    from: 'noreply@nodify.io',
    subject: subject,
    text: compiled()
  };
  var deferred = Q.defer();
  sendgrid.send(payload, function(err, json) {
    if (err) {
      deferred.reject(err);
    }
    deferred.resolve(json);
  });
  return deferred.promise;
}
;

// Functions which will be available to external callers
module.exports.success = success;
module.exports.fail = fail;
module.exports.postJSONObject = postJSONObject;
module.exports.postXML = postXML;
module.exports.get = get;
module.exports.sendMail = sendMail;
module.exports.getJSON = getJSON;