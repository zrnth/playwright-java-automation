const { test, expect } = require('@playwright/test');





//given 6 users from website
const users = [
  'standard_user',
  'locked_out_user',
  'problem_user',
  'performance_glitch_user',
  'error_user',
  'visual_user'
];




//given pass
const password = 'secret_sauce';




// loop for all 6 users
// for automation check i kept .5 sec delay to check each steps are working according to the ques or not, so 500

for (const username of users) {

  test(`Login -> Add product -> Verify cart -> Logout for ${username}`, async ({ page }) => {
    console.log(`\n--- Starting test for: ${username} ---`);




    //web login pge
    await page.goto('https://www.saucedemo.com/');
    await page.waitForTimeout(500);




    //trying all6 users credentials
    await page.fill('#user-name', username);
    await page.waitForTimeout(500);
    await page.fill('#password', password);
    await page.waitForTimeout(500);
    await page.click('#login-button');
    await page.waitForTimeout(500);



    //one lockedout user that doesn't work, so to handle that
    if (username === 'locked_out_user') {
      const errorMessage = await page.locator('[data-test="error"]').innerText();
      console.log(`User is locked out: ${errorMessage}`);
      await page.waitForTimeout(500);
      return;
    }




    //ques says that "one product", as no product name was mentioned, so trying with the first one from the 6 products

    const firstProduct = page.locator('.inventory_item').first();
    const productName = await firstProduct.locator('.inventory_item_name').innerText();




    //1st one to the cart
    await firstProduct.locator('button:has-text("Add to cart")').click();
    await page.waitForTimeout(500);



    //verify product name from cart
    await page.click('.shopping_cart_link');
    await page.waitForTimeout(500);



    const cartProducts = await page.locator('.inventory_item_name').allTextContents();
    if (cartProducts.includes(productName)) {
      console.log(`Verified product in cart: ${productName}`);
    } else {
      throw new Error(`Product ${productName} not found in cart for user ${username}`);
    }
    await page.waitForTimeout(500);





    //Logout
    await page.click('#react-burger-menu-btn'); //going to menu
    await page.waitForTimeout(500);
    await page.waitForSelector('#logout_sidebar_link'); //logout
    await page.click('#logout_sidebar_link');
    await page.waitForTimeout(500);



    
    console.log(`Test completed successfully for ${username}`);
  });
}
