import axios from "axios";
import {globalState} from '../states/state'

export async function getAllBatters() {
  return await axios({
    methos: "get",
    url: globalState.backendURL + "/getAllPlayers",
    headers: globalState.requestHeaders
  })
    .then(r => {
      console.log(r.data);
      return r.data;
    })
    .catch(function(e) {
      console.log(e);
      return e;
    });
}

export async function getGeneralData(p) {
  return await axios({
    methos: "get",
    url: globalState.backendURL + "/" + p + "/generalData",
    data: p,
    headers: globalState.requestHeaders
  })
    .then(r => {
      console.log(r.data);
      return r.data;
    })
    .catch(function(e) {
      console.log(e);
      return e;
    });
}

export function getPlayerImage(p){
  return "https://www.baylor.edu/content/imglib/3/3/7/7/337781.jpg"
}