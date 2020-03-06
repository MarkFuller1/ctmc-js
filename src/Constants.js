//var backend_url = "https://ctmc-py.herokuapp.com";
var backend_url = "localhost:5000"
var request_headers = {
  "Access-Control-Allow-Origin": "*",
  "content-type": "application/json",
  Accept: "application/json"
};

exports.backend_url = backend_url;
exports.request_headers = request_headers;
