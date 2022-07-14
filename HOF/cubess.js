var num= [1, 2, 3, 4, 5, 6];

var ress=num.map(function(a){
    return a*a*a;
});


var res=ress.filter(function(b){
    return b%3==0;
});

var r=res.reduce(function(a,c){
    return a+c;
})

console.log(r)