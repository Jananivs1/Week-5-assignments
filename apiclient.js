"use strict";
class APIClient {
    sendRequest(options) {
        console.log(options);
    }
}
const obje = new APIClient();
obje.sendRequest({ endpoint: "sample end point" });
obje.sendRequest({ endpoint: "sample end point", requestBody: "sample req body", requestStatus: true });
