const { Builder, By, Key, until } = require('selenium-webdriver');

(async function createProduct() {
  // Initialize the WebDriver
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigate to the product creation page
    await driver.get('http://localhost:4200/create-product'); // Adjust URL as needed

    // Fill in the form fields
    await driver.findElement(By.name('Titel')).sendKeys('New Product Title');
    await driver.sleep(1000);
    await driver.findElement(By.name('Beskrivelse')).sendKeys('This is a description of the new product.');
    await driver.sleep(1000);
    await driver.findElement(By.name('Pris')).sendKeys('123');

    await driver.sleep(1000);
    await driver.findElement(By.name('AntalPaLager')).sendKeys('50');
    await driver.sleep(1000);
    await driver.findElement(By.name('Indhold')).sendKeys('Product content details.');
    await driver.sleep(1000);
    await driver.findElement(By.name('ImageUrl')).sendKeys('assets/images/lkproduct1.jpg');
    await driver.sleep(1000);

    // Submit the form
    await driver.findElement(By.css('button[type="submit"]')).click();

    // Wait for success message
    let successMessage = await driver.wait(until.elementLocated(By.xpath("//*[contains(text(), 'Product created successfully')]")), 10000);

    // Assert the success message is displayed
    let displayed = await successMessage.isDisplayed();
    console.log('Product creation test passed:', displayed);
  } catch (error) {
    console.error('Product creation test failed:', error);
  } finally {
    // Quit the driver
    await driver.quit();
  }
})();
