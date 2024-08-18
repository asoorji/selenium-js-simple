const { Builder, By, Key, until } = require('selenium-webdriver');

async function runTest() {
    // Initialize the Chrome WebDriver
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://demo.playwright.dev/todomvc/#/');

        let searchBox = await  driver.findElement(By.xpath("//input[@placeholder='What needs to be done?']"));
        await searchBox.sendKeys('Code', Key.RETURN);
        await searchBox.sendKeys('Talk a walk', Key.RETURN);
        await searchBox.sendKeys('Medidate', Key.RETURN);

        await driver.findElement(By.xpath("//li[2]//div[1]//input[1]")).click()
    } finally {
        // await driver.quit();
    }
}

runTest();
