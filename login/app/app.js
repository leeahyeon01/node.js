//서버의 중심파일 app.js
"use strict";
//모듈
const express = require("express"); //require라는 명령어로 express모듈을 다운로드
const app = express(); //app이라는 변수에 express()실행을 넣어줌!
const bodyparser = require("body-parser");

// ⭐앱세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyparser.json());
//url을 통해 전달되는 데이터에 한글 ,공백 같은 문자가 포함될 경우 제대로 인식 되지 않는 문제 해결
app.use(bodyparser.urlencoded({ extended: true }));

// ⭐routes 파일 연결
const home = require("./src/routes/home");
app.use("/", home); //use -> 미들웨어를 등록해주는 메서드

module.exports = app;

// //http서버
// //http는 내장모듈이므로 npm으로 따로 설치 안해도된다.
// const http = require("http");
// const { type } = require("os");
// const app = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });

//   console.log(req.url);

//   if (req.url === "/") {
//     res.end("여기는 루트입니다");
//   } else if (req.url === "/login") {
//     res.end("여기는 로그인 화면입니다");
//   }
// });
// app.listen(3001, () => {
//   console.log("http로 가동된 서버입니다");
// });
