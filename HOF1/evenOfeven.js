var arr = [2, 4, 5, 3, 6, 8];

var res= arr.filter(function(elem, index){
    return index%2==0 && elem%2==0;
});

console.log(res);