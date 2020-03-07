import axios from "axios";
import {globalState} from '../states/state'

export async function getAllBatters() {
  return await axios({
    methos: "get",
    url: globalState.backendURL + "/getAllPlayers",
    headers: globalState.requestHeaders
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
    url: globalState.backendURL + "/getAllColsFromBattingForPlayer",
    data: p,
    headers: globalState.requestHeaders
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