var arr=["Apple", "Windows", "Linux", "Kindle", "Quiz"];

var odd = function (elem) {
    return elem.length%2==1
}

var sum = function(a,c){
    return a+c;
}

var res = arr.filter(odd).reduce(sum)
console.log(res.length);