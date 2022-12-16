// const imgFile = require();
const fs = require('fs');

let imgArr = [];

module.exports.initialize = ()=>{
    return new Promise((resolve, reject)=>{
        fs.readFile('./resources/json/baby_shower.json', (err, data)=>{
            if(err) reject('Cannot Load Images');
            imgArr = JSON.parse(data);
            resolve();
        })
    });
}

module.exports.getAllImgs = ()=>{
    return new Promise((resolve, reject)=>{
        if(imgArr.length > 0) resolve(imgArr);
        reject('No image files');
    });
}