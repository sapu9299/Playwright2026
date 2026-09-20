const{test, expect} = require('@playwright/test')
/*
test('handling dropdown', async({page})=>{
    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/web-form.html')


    //get all available options

  // const drop_values= await page.locator("select[name='my-select']  option").allInnerTexts();
            //console.log (drop_values)     
            // OR

    const dropdown= await page.locator("select[name='my-select']")
    const avail_val = await dropdown.locator('option').allInnerTexts();
    console.log(avail_val);

   //get default selected data

  const select_val=  await dropdown.inputValue();
  console.log("selected value is ", select_val)

  // select value from dropdown

  await dropdown.selectOption({label: 'Three'});
  await page.waitForTimeout(2000)
  await dropdown.selectOption('One')
  await page.waitForTimeout(2000)
  await dropdown.selectOption({index:2})

  await page.waitForTimeout(2000)

  })
*/
//Test without select and option tag available
test('without select tag', async({page})=>{

    await page.goto('https://bonigarcia.dev/selenium-webdriver-java/dropdown-menu.html')

    await page.locator('#my-dropdown-1').click({ button: 'left' });
     const drop_1= page.locator('li').filter({ hasText: 'Another action' }).first();
         await drop_1.click();
         const value1= await drop_1.textContent()
         console.log(value1)

    await page.locator('#my-dropdown-2').click({ button: 'right' });
     const drop_2= await page.locator("//ul[@id='context-menu-2']//li").filter({ hasText: 'Something else here' }).first();
         await drop_2.click();
         const value2= await drop_2.textContent()
         console.log(value2)

    await page.locator('#my-dropdown-3').dblclick({ button: 'left' });
     const drop_3= await page.locator("//ul[@id='context-menu-3']//li").filter({ hasText: 'Separated link' }).first();
         await drop_3.click();
         const value3= await drop_3.textContent()
         console.log(value3)


         await page.waitForTimeout(2000)
})   







