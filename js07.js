let person = 'kim';
let age = 29;


//console.log(`당신의 이름은 ${person}이고, 나이는${age}입니다.` );
let tag = function(strings, personExp, ageExp){
    console.log(strings);
    console.log(personExp);
    console.log(ageExp);
};
let output = tag`그 사람 ${person}은 ${age}세 입니다.`;
//문장과 데이터 분리할 때 쓰인다.