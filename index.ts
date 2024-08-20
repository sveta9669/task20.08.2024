// import {commandLineArgs} from 'command-line-args'

// const definition = [
//     { name: 'path', alias: 'p', type: String, defaultValue: "/node_modules" },
// ]

// const option = commandLineArgs(definition);

// const path:string = option.path;

// console.log(path);

import * as fs from 'node:fs';
const appPath = process.cwd();
// const fs1 = fs.readFile(appPath+'/node_modules/.bin/mime',"utf-8",(err, data)=>{


// const fs1 = fs.readdir(appPath, function (err, files) {
//     if (err) {
//         console.log(err)
//     } else {
//         if (!files.length) {
//             console.log(files.length)
//         }
//     }
// });


function isEmpty(path) {
    return fs.readdirSync(path).length === 0;
}
    console.log(isEmpty(appPath+"/test"))

    
// const fs2 = fs.readFile(appPath + '/index.ts', "utf-8", (err, data) => {

//     console.log(data)
// });