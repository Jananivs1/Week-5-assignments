import { WebComponents } from "./webComponent.js"

 class Button extends WebComponents{
    click():void{
        console.log("Button class: The button in the web page is clicked")
    }
    testComponent():void{
        
    }
}
const obj=new Button()
obj.click()