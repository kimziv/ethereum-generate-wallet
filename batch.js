var AschJS = require('asch-js');
var process = require('child_process');
var util =require('util');
var fs = require('fs');

var TOTAL=10;
var INDEX=0;
function writeFile(file, content){  
    //console.log(content);  

    // appendFile，如果文件不存在，会自动创建新文件  
    // 如果用writeFile，那么会删除旧文件，直接写新文件  
    fs.appendFile(file, content, function(err){  
        if(err)  
            console.log("fail " + err);  
        else{
            INDEX++;
           console.log("写入文件ok"+INDEX);   
        }  
            
    });  
}

function createAccount(shell){
    process.exec(shell,function (error, stdout, stderr) {
        if (error !== null) {
          console.log('exec error: ' + error);
      }
      if (stdout !==null ) {
        if (INDEX<TOTAL) {
            writeFile(file,stdout+',\n');  
        }else{
            writeFile(file,stdout+'\n]');  
        }
    }
});
}
//var file = "./accounts.txt";  
 var file = "./accounts00.json";  
writeFile(file,"[");

for (var i = 0; i <TOTAL; i++) {
setTimeout(function () {
       var shell="./ethereum-wallet-generator.sh";
        createAccount(shell)
　　}, 400);
}

