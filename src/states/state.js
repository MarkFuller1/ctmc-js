import { decorate, observable } from "../../node_modules/mobx/lib/mobx"

if (!window.location.href.includes("localhost") && !window.location.href.includes("https") && window.location.href.includes("http")) {
    window.open("https://ctmc-py.herokuapp.com", "_self")
}

let backendURL = "";
let frontendURL = "";
if (window.location.hostname === "localhost") {
    backendURL = "http://localhost:5000";
    frontendURL = "http://localhost:3000";
}
else {
    //we aren't running locally
    backendURL = "https://ctmc-py.herokuapp.com";
    frontendURL = "https://ctmc-js.herokuapp.com";
}


const request_headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Origin",
    "Content-Type": "application/json",
    Accept: "application/json"
};

const drawerWidth = 240;

const userState = {
    signedUp: false,
    loggedIn: false,
    isAuthenticating: true,
    email: "",
    userName: "",
}

export const globalState = {
    backendURL: backendURL,
    frontendURL: frontendURL,
    requestHeaders: request_headers,
    userState: userState,
    drawerWidth: drawerWidth
}

decorate(userState, {
    userState: observable,
    backendURL: observable,
    requestHeaders: observable
})

export function resetState() {
    globalState.userState.signedUp = false;
    globalState.userState.loggedIn = false;
    globalState.userState.username = "";
}

export function signUpChange(flag) {
    console.log("User signed up flag set to: " + flag);
    globalState.userState.signedUp = flag;
}

export function setLoggedInFlag(flag) {
    console.log("User log in flag has been set to: " + flag);
    globalState.userState.loggedIn = flag;
}

export function setAuthentication(flag) {
    console.log("Setting state of isAuthenticating to: " + flag);
    globalState.userState.isAuthenticating = flag;
}

export function setLoadingStatus(flag) {
    if (flag) {
        console.log("Website loading status is true.");
    }
    else {
        console.log("Website loading status is false.");
    }
    globalState.viewState.isLoading = flag;
}

export function setUsername(username) {
    console.log("The logged-in user has username: " + username);
    globalState.userState.username = username;
}