const fs = require('fs');
var tabs = ' ';
var path = "E:\\Univer\\5 семестр\\ПСКП\\PSKP\\Лабы\\lab1";

function getAllDir(dirPath,tab,otPath) {
    fs.readdir(dirPath,function (err, files) {
        if(!err){
            for (var i=0;i<files.length;i++){
                console.log(tab+otPath+files[i]);
                getAllDir(dirPath+"\\"+files[i],tab+' ',files[i]+"\\");
            }
        }
    });
}
getAllDir(path,tabs,'');
