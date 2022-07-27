const puppeteer = require('puppeteer');
const fs = require('fs');
const {downloadFile} = require("../helpers/downloader.js");
downloadFile('https://images.viblo.asia/100x-/a14d783e-cbc0-475e-b6ae-0529370c18a3.jpg')
// (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     //Get all link
//     for (let i = 1; i <= 1; i++){
//         await page.goto('https://viblo.asia/tags?sort=followers&type=none&page=' + i);
//         await page.waitForSelector('.tag-item'); //Đợi thành phần này được load
//         const tags = await page.evaluate(() => {
//             let items = document.querySelectorAll('.tag-item');
//             let tag = [];
//             items.forEach(item => {
//                 tag.push({
//                     title: item.getElementsByClassName('tag-header__name link')[0].innerText,
//                     img: item.getElementsByClassName('tag-item-image')[0].querySelector('a img').getAttribute('src'),
//                     url: item.getElementsByClassName('tag-header__name link')[0].getAttribute('href'),
//                     post: item.querySelectorAll('.tag-counter')[0].querySelector('strong').innerText,
//                     question: item.querySelectorAll('.tag-counter')[1].querySelector('strong').innerText,
//                     follower: item.querySelectorAll('.tag-counter')[2].querySelector('strong').innerText,
//                 });
//             });
//             return tag;
//         });
//         console.log(tags);
//
//         //download image
//         for (let tag of tags) {
//             downloadFile(tag.img, () => {
//
//             });
//             // fs.writeFileSync(`images/${tag.img.split('/').pop()}`, await response.buffer(), 'base64');
//         }
//
//         //Get detail
//         /*for (let tag of tags) {
//             await fs.appendFile(`data/tags.txt`, tag.title + '\n', function (err) {
//                if(err) throw err;
//                 console.log('added: ' + tag.title);
//             })
//         }*/
//     }
//     await browser.close();
// })();