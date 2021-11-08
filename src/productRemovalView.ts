import { Model } from "./model";

export class productRemovalView{
    model : Model;

    constructor(model : Model){
        this.model = model;
    }

    getModel() : Model{
        return this.model;
    }

    getView() : String{
        let productString : String = "";

        for (let i = 0; i < this.getModel().getShoppingCart().length; i++) {
            productString += i + ": " + this.getModel().getShoppingCart()[i].getName();
            productString += "\n";
        }
        
        return productString;
    }
}