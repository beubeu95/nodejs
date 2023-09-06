const fs = require("fs");
let content = "나도 알아 ES6";
fs.writeFile('./hk2.txt',content,(err) => {
   fs.readFile('./hk2.txt','utf8',(err,data) => {
      console.log(data);
   });
});

fs.writeFileSync('./hk3.txt',content);
var data = fs.readFileSync('./hk3.txt', 'utf8');
console.log(data);

//내용 추가
fs.readFile('./hk2.txt','utf8',(err,data) => {
   let con = data + "내용추가";
   fs.writeFile('./hk2.txt',con, (err) =>{
      console.log(con);
   });
});

/*
fs.rename('./hk2.txt', './lee2.txt', (err) => {
   
});
*/