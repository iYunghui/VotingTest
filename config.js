exports.https = false;
if(exports.https){
    exports.httpServerOptions = {
        key:require("fs").readFileSync(""),
        cert:require("fs").readFileSync(""),
    };
}
exports.httpsPort = 443;
exports.httpPort = 7890;
exports.db = "sqlite"; //mysql or sqlite
if(exports.db === "mysql") {
    exports.dbHost = "";
    exports.dbUser = "";
    exports.dbPassword = "";
}
exports.color = {
    option1Color: "rgb(255, 0, 0)",
    option2Color: "rgb(255, 165, 0)",
    option3Color: "rgb(189, 183, 107)",
    option4Color: "rgb(0, 128, 0)",
    option5Color: "rgb(0, 0, 255)",
    option6Color: "rgb(75, 0, 130)",
    option7Color: "rgb(128, 0, 128)",
    option8Color: "rgb(255, 0, 255)",
    option9Color: "rgb(102, 205, 170)",
    option10Color: "rgb(128, 128, 0)"
};
exports.IoTtalkVersion = "2";
exports.IoTtalkURL = "https://demo.iottalk.tw/";
exports.googleClientID = "1";
exports.googleClientSecret = "1";
exports.googleCallbackURL = "1";
exports.facebookAPPID = "290567335629381";
exports.facebookAPPSecret = "d6ebdb9fc0cb6c5de329f4816ce4fb59";
//exports.facebookAPPID = "565741691503717";
//exports.facebookAPPSecret = "24201a8d2b1ace505b8188cc35940e88";
exports.facebookCallbackURL = "http://localhost:7890";
exports.adminAccount = "admin";
exports.adminPassword = "password";
exports.useDisqus = false;
