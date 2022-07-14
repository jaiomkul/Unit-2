function runProgram(input){
    
    
}


 

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}






































function earning(N,K,arr){
  var max=0;
  var count=0;
  for(i=0; i<N; i++){
      if(max<arr[i])
      {
          max=arr[i];
          count++;
      }
  }
  console.log(count*K);
}

function runProgram(input){
  input=input.trim().split("\n")
  var tc=+input[0];
  var line=1;
  for(i=0; i<tc; i++)
  {
      var com = input[line].trim().split(" ").map(Number);
      var size=com[0];
      var target=com[1];
      line++;
      var arr=input[line].trim().split(" ").map(Number);
      console.log(size,target,arr);
      line++
      //console.log(earning(size,target,arr));
      earning(size,target,arr);
  }
  
}




if (process.env.USER === "") {
runProgram(``);
} else {
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  read = read.replace(/\n$/, "");
  runProgram(read);
});
process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
}