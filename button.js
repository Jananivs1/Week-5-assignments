import { WebComponents } from "./webComponent";
class Button extends WebComponents {
    click() {
        console.log("Button class: The button in the web page is clicked");
    }
    testComponent() {
    }
}
const obj = new Button();
obj.click();
