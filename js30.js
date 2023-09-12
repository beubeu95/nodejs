const dbCon = require("./model/sample.js");
const express = require("express");
const app = express();
let title = "";
let tmp1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>샘플</title>
</head>
<body>
    <ul>
        <li><a href="/list">목록</a></li>
        <li><a href="/addSample">샘플 추가</a></li>
    </ul>
    <hr>
`;
let tmp2 = `</body>
</html>`;
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/sampleMain.html");
});
app.get('/list', (req, res) => {
    title = `<h2>샘플 항목</h2>`;
    let li = `<ul>`;
    dbCon.GetSampleList()
        .then((rows) => {
            rows.forEach((row) => {
                const no = row.NO
                const name = row.NAME
                li = li + `<li><a href="/get/${no}">${name}</a></li>`;
            });
            li = li + `</ul>`;
            res.send(tmp1+title+li+tmp2);
            console.log(rows);
        })
        .catch((errMsg) => {
            res.send(tmp1+title+errMsg+tmp2);
        });
});
app.get('/get/:no', (req, res) => {
    title = `<h2>샘플 상세보기</h2>`;
    let body = "";
    dbCon.GetSample(req.params.no)
        .then((row) => {
            const no = row[0].NO;
            const name = row[0].NAME;
            body = `<p>no : ${no}, name : ${name }</p>`
            res.send(tmp1+title+body+tmp2);
        })
        .catch((errMsg) => {
            res.send(errMsg);
        });
});
app.get('/addSample', (req, res) => {
    res.sendFile(__dirname + "/sampleForm.html");
});
app.post('/addSamplePro', (req, res) => {
    let sample = {no:req.params.no, name:req.params.name};
    dbCon.addSample(sample)
    .then((msg) => {
        console.log(msg);
    })
    .catch((errMsg) => {
        console.log(errMsg);
    });
    res.sendFile(__dirname+"/sampleMain.html");
});

let port = 4000;
app.listen(port, () => {
    console.log(`Sever Starting on ${port}`);
});