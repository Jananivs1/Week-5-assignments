import test, { expect } from "@playwright/test"

test("Create individual-Salesforce application",async({page,context})=>{
    // Test Steps:
    // Login to https://login.salesforce.com
    await page.goto("https://login.salesforce.com/")
    //Fill credentials
    await page.locator(`//input[@id='username']`).fill("dilipkumar.rajendran@testleaf.com")
    await page.locator(`//input[@id='password']`).fill("TestLeaf@2025")
    //click login
    await page.locator(`//input[@id='Login']`).click()
    //click salesforce help
    await page.locator(`//div[@class='oneHelpAndTrainingExperience']//button`).click()
    //switch to window and click confirm
    const [windows]=await Promise.all([context.waitForEvent('page'),page.locator(`(//span[text()='Salesforce Help'])[2]`).click()])
    const tabs=windows.context().pages()
    const currTab=tabs[1]
    currTab.locator(`//button[text()='Confirm']`).click()
     await page.waitForTimeout(10000)
    //verify title and URL
    const title=currTab.title()
    const url=currTab.url()
    if(await title==="Sign Up for Free Salesforce Trailblazer Account - Single-Use Code" &&
        url.includes("tbid.digital.salesforce.com/")
    ){
        console.log("Title & URL verified")

    }else{
        console.log("Title/URL doesnt match")
    }

    
})