import fetch from "node-fetch";
import https from 'https';
import fs from 'fs';

const downloadFile = (url, destination) => new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destination);

    https.get(url, response => {
        response.pipe(file);

        file.on('finish', () => {
            file.close(resolve(true));
        });
    }).on('error', error => {
        fs.unlink(destination);

        reject(error.message);
    });
});

const saveImageToDisk = (url, filename) =>
{
    fetch(url)
      .then(res => {
          const dest = fs.createWriteStream(filename);
          res.body.pipe(dest)
      })
      .catch((err) => {
          console.log(err)
      })
}

export {
    downloadFile,
    saveImageToDisk,
}
