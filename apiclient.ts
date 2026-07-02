class APIClient{
    sendRequest(options?:{endpoint?:string;requestBody?:string;requestStatus?:boolean}):void{
        console.log(options)
    }
    
}
const obje = new APIClient()
obje.sendRequest({endpoint:"sample end point"})
obje.sendRequest({endpoint:"sample end point",requestBody:"sample req body",requestStatus: true})

