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

export async function getBirthdayBoys(p) {
  return await axios({
    methos: "get",
    url: globalState.backendURL + "/getBirthdayBoys",
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

export async function getAllPeopleNamesAndIds(){
  return await axios({
    methos: "get",
    url: globalState.backendURL + "/getAllPeopleNamesAndIds",
    headers: globalState.requestHeaders
  })
    .then(r => {
      //console.log(r.data);
      return r.data;
    })
    .catch(function(e) {
      console.log(e);
      return e;
    });
}

export async function getPlayerImage(p){
  return await axios({
    methos: "get",
    url: globalState.backendURL + "/" + p +"/getPlayerUrl",
    headers: globalState.requestHeaders
  })
    .then(r => {
      console.log(r.data[0].url);
      return r.data;
    })
    .catch(function(e) {
      console.log(e);
      return e;
    });
}

export  function search(p){
  console.log("sending " + p)
  return  axios({
    methos: "get",
    url: globalState.backendURL + "/search/" + p ,
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