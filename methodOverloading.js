"use strict";
class MethodOverloading {
    reportStep(options) {
        console.log(options);
    }
}
const obj = new MethodOverloading();
obj.reportStep({ msg: "Method 1", status: "Executed" });
obj.reportStep({ msg: "Hi", status: "Executed", takeSnap: false });
