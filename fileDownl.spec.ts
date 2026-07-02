import test, { expect } from "@playwright/test";
import fs from 'fs';
import path from 'path';
test("File download", async({page})=>{
    //Navigate to URL
    page.goto("https://the-internet.herokuapp.com/download")
    //File download using event listener
    const[temp]=await Promise.all([page.waitForEvent('download'),page.locator(`//a[text()='sample-upload.txt']`).click()])
    const fileName=path.join('__dirname','../data',temp.suggestedFilename())
    await temp.saveAs(fileName)
    await expect(fs.existsSync(fileName)).toBeTruthy()

})