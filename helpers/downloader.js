const https = require('https');
const fs = require('fs');
const path = require('path');

const downloadFile = (url, callback) => {
    const filename = path.basename(url);
    console.log(filename);
    return false;
    const req = https.get(url, res => {
        const fileStream = fs.createWriteStream(filename);
        res.pipe(fileStream);

        fileStream.on('error', err => {
            console.log(err);
        })

        fileStream.on('close', () => {
            callback(filename);
        })

        fileStream.on('finish', () => {
            fileStream.close();
            console.log('done!');
        })
    })

    req.on('error', err => {
        console.log(err);
    });
}
export {
    downloadFile
}