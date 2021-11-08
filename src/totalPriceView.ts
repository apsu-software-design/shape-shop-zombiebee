import { Model } from "./model";

export class totalPriceView{
    model : Model;

    constructor(model : Model){
        this.model = model;
    }

    getModel() : Model{
        return this.model;
    }

    getView() : String{
        let total : number = 0.0;

        for (let i = 0; i < this.getModel().getShoppingCart().length; i++) {
            total += this.getModel().getShoppingCart()[i].getPrice() * this.getModel().getQuantityCart()[i];
        }

        return "Shopping Cart Total: "+ total;
    }
}