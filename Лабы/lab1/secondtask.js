const fs = require('fs');
var filePath = process.argv[2];
var scriptValue = "const fs = require('fs');var tabs = ' ';var path = '"+process.argv[2]+"';function getAllDir(dirPath,tab,otPath) {fs.readdir(dirPath,function (err, files) {if(!err){for (var i=0;i<files.length;i++){console.log(tab+otPath+files[i]);getAllDir(dirPath+'\\\\'+files[i],tab+' ',files[i]+'\\\\');}}});}getAllDir(path,tabs,'');";
filePath+="\\summary.js";

fs.open(filePath,'w+',0644,function (err, file_handler) {
    if(!err){
        fs.write(file_handler,scriptValue,null,'utf-8',function (err, writer) {
            if(!err){
                console.log('Всё записанно');
            }
            else{
                console.log('Ошибка при записи');
            }
        })
    }
    else{
        console.log('Ошибка открытия файла');
    }
})

console.log(filePath);
