const{test, expect} =require('@playwright/test')
/*
test('checkbox checking unchecking',async ({page})=>{

   await page.goto('https://bonigarcia.dev/selenium-webdriver-java/web-form.html')

    await page.locator('#my-check-2').click

    //await page.locator('#my-check-2').check();

    await page.waitForTimeout(5000)
    
})
    */

test('checkbox test',async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator("//input[@type='checkbox' and @id='sunday']").check();

   const tues= await page.locator("//input[@type='checkbox' and @id='tuesday']").check();

   //expect (await page.tues).toBeChecked();  //     Error: toBeChecked can be only used with Locator object, was called with undefined
    expect(await page.locator("//input[@type='checkbox' and @id='tuesday']")).toBeChecked();
        
    //Unchecking 
    await page.locator("//input[@type='checkbox' and @id='sunday']").uncheck();

   const status= expect(await page.locator("//input[@type='checkbox' and @id='sunday']").isChecked()).toBeFalsy

    const status2= expect(await page.locator("//input[@type='checkbox' and @id='sunday']").isChecked()).toBeTruthy

    const checkboxes_arr=[
                    "//input[@type='checkbox' and @id='monday']",
                    "//input[@type='checkbox' and @id='thursday']",
                    "//input[@type='checkbox' and @id='friday']"

    ]

    for(const checkbox of checkboxes_arr)  //select multiple checkbox
    {
        await page.locator(checkbox).check()
    }

        await page.waitForTimeout(5000)


    for(const checkbox of checkboxes_arr)  //uncheck  multiple checkbox which are checked
    {
        if(await page.locator(checkbox).isChecked())
        {
        await page.locator(checkbox).uncheck()
        }
    }
    

    await page.waitForTimeout(5000)

})

