const express = require("express");
const app = express();

const cors = require("cors");
const morgan = require("morgan");

// TODO: cors를 적용합니다.
app.use(cors());
// TODO: Express 내장 미들웨어인 express.json()을 적용합니다.
app.use(express.json());
// OPTIONAL: HTTP 요청 logger인 morgan을 적용합니다.
app.use(morgan("tiny"));

const port = 3001;
const diaryRouter = require("./router/diaryRouter");
// TODO: /discussions 경로로 라우팅합니다.
app.use("/diary", diaryRouter);

// TODO: 서버 상태 확인을 위해 상태 코드 200으로 응답합니다.
app.get("/", (req, res) => {
  res.status(200).send("열려라 참깨!~!");
});

app.use((req, res, next) => {
  res.status(404).send("Not Found!");
});

const server = app.listen(port, () => {
  console.log(`[RUN] My CRUD diary Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
