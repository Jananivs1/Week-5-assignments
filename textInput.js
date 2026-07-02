import { WebComponents } from "./webComponent.js";
class TextInput extends WebComponents {
    value = "";
    enterText(text) {
        console.log("The entered text is " + text);
    }
}
const obj1 = new TextInput();
obj1.enterText("sample");
