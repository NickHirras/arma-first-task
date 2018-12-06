const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('safari').build();
  try {
    await driver.get('http://localhost:3000/');
    await driver.findElement(By.name('title')).click();
    await driver.findElement(By.name('title')).sendKeys('testTitle123');
    await driver.findElement(By.name('header')).click();
    await driver.findElement(By.name('header')).sendKeys('testHeader123');
    await driver.findElement(By.name('body')).click();
    await driver.findElement(By.id('body')).sendKeys('testBody123');
    await driver.findElement(By.id('submit')).click();
    await driver.wait(until.titleIs('TESTTITLE123'), 5000);
    await driver.wait(until.elementTextIs(driver.findElement(By.id('headerFromPost')), 'TESTHEADER123'), 5000);
    await driver.wait(until.elementTextIs(driver.findElement(By.id('bodyFromPost')), 'TESTBODY123'), 5000);
  } finally {
    await driver.quit();
  }
})();
