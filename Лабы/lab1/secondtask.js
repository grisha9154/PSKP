let fs = require('fs');
var filePath = process.argv[2];
var scriptValue = "const fs = require('fs');var tabs = ' ';var path = '"+process.argv[2]+"';function getAllDir(dirPath,tab,otPath) {fs.readdir(dirPath,function (err, files) {if(!err){for (var i=0;i<files.length;i++){console.log(tab+otPath+files[i]);getAllDir(dirPath+'\\\\'+files[i],tab+' ',files[i]+'\\\\');}}});}getAllDir(path,tabs,'');";
filePath+="\\summary.js";

fs.open(filePath,'w+',function (err, file_handler) {
    if(!err){
        fs.write(file_handler,scriptValue,null,'utf-8',function (err, writer) {
            if(!err){
                console.log('Всё записанно');
            }
            else{
                console.log('Ошибка при записи');
            }
            getAllDir(process.argv[2]);
            //  fs.mkdir(process.argv[2]+'\\summary');
        })
    }
    else{
        console.log('Ошибка открытия файла');
    }

});

function getAllDir(dirPath) {
    fs.readdir(dirPath, function (err, files) {
        if (!err) {
            for (let i = 0; i < files.length; i++) {
                fs.stat(dirPath+"\\"+files[i], function (err, stats) {
                    if(stats.isDirectory()){
                        getAllDir(dirPath + '\\' + files[i]);
                    }
                    else{
                        if(stats.isFile() && files[i].indexOf(".txt")+1){
                            console.log(files[i]);
                        }
                    }
                })
            }
        }
    });
}
