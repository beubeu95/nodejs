var test1 = [10,15,20,30,40,50];
//console.log(test1.map(function(c){ return c<=20}));           //[ true, true, true, false, false, false ]
//console.log(test1.map(c => c<=20));                           //[ true, true, true, false, false, false ]
//console.log(test1.map(c => { if(c<=20) return c; }));         //[ 10, 15, 20, undefined, undefined, undefined ]
console.log(test1.filter(c => {if (c<=20) return c;}));         //[10, 15 , 20]