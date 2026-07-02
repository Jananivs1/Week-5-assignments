export class WebComponents{
    selector:string;
    constructor(){
        this.selector="xpath selector"       
        console.log(this.selector)
    }
    click():void{
        console.log("Webcomponents baseclass: The web element is clicked")
    }
    focus():void{
        console.log("Webcomponents baseclass: The web element is focussed")
    }
}