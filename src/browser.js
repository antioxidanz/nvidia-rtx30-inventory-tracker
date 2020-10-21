const puppeteer = require('puppeteer');

// Async function to launch browser instance from puppeteer
async function startBrowser(){
    let browser;
    try {
        console.log("Opening the browser......");
        browser = await puppeteer.launch({
            headless: true,
            args: ["--disable-setuid-sandbox"],
            'ignoreHTTPSErrors': true
        });
        
    } catch (error) {
        console.log("Could not create a browser instance => : ", error);
    }
    return browser;
}

module.exports = {
    startBrowser
};