export class WebComponents {
    selector;
    constructor() {
        this.selector = "xpath selector";
        console.log(this.selector);
    }
    click() {
        console.log("Webcomponents baseclass: The web element is clicked");
    }
    focus() {
        console.log("Webcomponents baseclass: The web element is focussed");
    }
}
