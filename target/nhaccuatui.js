const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.nhaccuatui.com/bai-hat/top-20.html');
    //Get all link
    const songs = await page.evaluate(() => {
        let items = document.querySelectorAll('.name_song');
        let links = [];
        items.forEach(item => {
            links.push({
                title: item.innerText,
                url: item.getAttribute('href')
            });
        });
        return links;
    });

    //Get detail
    for (let song of songs) {
        await page.goto(song.url);
        let lyric = await page.evaluate(() => {
            return document.getElementsByClassName('pd_lyric trans')[0].innerHTML.replace(/\<br\>/g, '');
        });
        await fs.writeFile(`data/${song.title}.txt`, lyric, (err) => {
            if(err) throw err;
            console.log('saved: ' + song.title);
        });
    }
    await browser.close();
})();
