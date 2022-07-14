function test(arr,k){
var tmp=0;
let i=0;
let j=arr.length-1;
while(i<j)
{
   tmp= arr[i]+arr[j];
    if(tmp==k)
    {
        console.log(true)
        return;
    }
    else if(tmp<k){
        i++;
    }
    else{
        j--;
    }
}
console.log(false);
}
var k= 6;
var arr = [1,2,3,4,5];
test(arr,k);
