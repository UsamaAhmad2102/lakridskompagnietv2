const { Builder, By, until } = require('selenium-webdriver');

(async function testAddToCartAndRemove() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // Navigate to the products page
    await driver.get('http://localhost:4200/products');

    // Wait for the product cards to load
    await driver.wait(until.elementLocated(By.css('.product-card')), 10000);

    // Find the specific product card by product title (adjust the title accordingly)
    let productTitle = '“SJØDDAD NAD” – ESPRESSO'; // Adjust to match the actual product title
    let productCard = await driver.findElement(By.xpath(`//div[contains(@class, 'product-card') and .//h2[text()="${productTitle}"]]`));

    // Find and click the "Læg i kurv" button within the specific product card
    let addToCartButton = await productCard.findElement(By.css('.add-to-cart'));
    await addToCartButton.click();

    // Pause to allow the cart count to update
    await driver.sleep(2000);

    // Wait for the cart count to update (adjust the selector as needed)
    await driver.wait(until.elementLocated(By.css('.cart-count')), 10000);

    // Verify the cart count
    let cartCount = await driver.findElement(By.css('.cart-count')).getText();
    if (cartCount !== '1') {
      throw new Error(`Expected cart count to be 1, but was ${cartCount}`);
    }

    // Pause before clicking the cart icon
    await driver.sleep(2000);

    // Add explicit wait for the cart icon to be present
    await driver.wait(until.elementLocated(By.css('.cart-basket')), 10000);

    // Navigate to the cart page
    let cartButton = await driver.findElement(By.css('.cart-basket')); // Adjust the selector as necessary
    await cartButton.click();

    // Pause to allow the cart page to load
    await driver.sleep(2000);

    // Wait for the cart items to load
    await driver.wait(until.elementLocated(By.css('.cart-item')), 10000);

    // Verify the product is in the cart
    let cartItemTitle = await driver.findElement(By.css('.cart-item h3')).getText();
    if (cartItemTitle !== productTitle) { // Adjust to match the product title
      throw new Error(`Expected cart item title to be "${productTitle}", but was "${cartItemTitle}"`);
    }

    // Pause before removing the product
    await driver.sleep(2000);

    // Remove the product from the cart
    let removeButton = await driver.findElement(By.css('.cart-item .remove-button'));
    await removeButton.click();

    // Pause to allow the cart to update
    await driver.sleep(2000);

    // Wait for the cart to update
    await driver.wait(until.stalenessOf(removeButton), 10000);

    // Verify the cart is empty
    let cartItems = await driver.findElements(By.css('.cart-item'));
    if (cartItems.length !== 0) {
      throw new Error(`Expected cart to be empty, but found ${cartItems.length} items`);
    }

    // Alternative verification: Ensure the cart count is updated to 0
    let updatedCartCount = await driver.findElement(By.css('.cart-count')).getText();
    if (updatedCartCount !== '0') {
      throw new Error(`Expected cart count to be 0, but was ${updatedCartCount}`);
    }

    console.log('Test passed: Product was added and removed from the cart successfully.');
  } catch (err) {
    console.error('Test failed:', err);
  } finally {
    // Close the browser
    await driver.quit();
  }
})();
