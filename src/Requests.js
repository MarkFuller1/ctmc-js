import axios from "axios";
var constants = require("./Constants");

export async function getAllBatters() {
  return await axios({
    methos: "get",
    url: constants.backend_url + "/getAllPlayers/",
    headers: constants.request_headers
  })
    .then(function(r) {
      console.log(r);
      return r;
    })
    .catch(function(e) {
      console.log(e);
      return e;
    });
}

export async function getAllColsFromBattingForPlayer(p) {
  return await axios({
    methos: "get",
    url: constants.backend_url + "/getAllColsFromBattingForPlayer/",
    data: p,
    headers: constants.request_headers
  })
    .then(function(r) {
      console.log(r);
      return r;
    })
    .catch(function(e) {
      console.log(e);
      return e;
    });
}