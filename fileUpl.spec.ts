import test, { expect } from "@playwright/test";
import path from 'path'
test("Test file upload",async({page})=>{
    //Navigate to URL
    await page.goto('https://the-internet.herokuapp.com/upload')
     console.log(path.join(__dirname))
     //file download using event listener
    const [upload] = await Promise.all([page.waitForEvent('filechooser'),page.locator(`#drag-drop-upload`).click()])
    await upload.setFiles(path.join(__dirname,'../data/sample.jpeg'))
    await expect(page.locator(`(//div[@class='dz-filename']//span)[1]`)).toContainText('sample')


})