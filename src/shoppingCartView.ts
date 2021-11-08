//	For all versions of this class, the constructor should take the most recent state of the model object.
//	There should be a method called “getView()” which returns a string object of the current state.

import { Model } from "./model";

export class shoppingCartView{
    model : Model;

    constructor(model : Model){
        this.model = model;
    }

    getModel() : Model{
        return this.model;
    }

    getView() : String{
        let cartString : String = "";

        for (let i = 0; i < this.getModel().getShoppingCart().length; i++) {
            cartString += "       Name: " + this.getModel().getShoppingCart()[i].getName() + "\n";
            cartString += "      Price: " + this.getModel().getShoppingCart()[i].getPrice() + "\n";
            cartString += "Description: " + this.getModel().getShoppingCart()[i].getDescription() + "\n";
            cartString += "   Quantity: " + this.getModel().getQuantityCart()[i] + "\n";
        }

        return cartString;
    }

}