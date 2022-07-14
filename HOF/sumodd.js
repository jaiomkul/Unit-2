var n= [1,2,3,4];

var y=n.filter(function(elem) {
    return elem%2==1
});

var sum=y.reduce(function(a,c) {
  return a+c;
});
console.log(sum);