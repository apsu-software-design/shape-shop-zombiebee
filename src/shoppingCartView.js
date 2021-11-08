"use strict";
//	For all versions of this class, the constructor should take the most recent state of the model object.
//	There should be a method called “getView()” which returns a string object of the current state.
exports.__esModule = true;
exports.shoppingCartView = void 0;
var shoppingCartView = /** @class */ (function () {
    function shoppingCartView(model) {
        this.model = model;
    }
    shoppingCartView.prototype.getModel = function () {
        return this.model;
    };
    shoppingCartView.prototype.getView = function () {
        var cartString = "";
        for (var i = 0; i < this.getModel().getShoppingCart().length; i++) {
            cartString += "       Name: " + this.getModel().getShoppingCart()[i].getName() + "\n";
            cartString += "      Price: " + this.getModel().getShoppingCart()[i].getPrice() + "\n";
            cartString += "Description: " + this.getModel().getShoppingCart()[i].getDescription() + "\n";
            cartString += "   Quantity: " + this.getModel().getQuantityCart()[i] + "\n";
        }
        return cartString;
    };
    return shoppingCartView;
}());
exports.shoppingCartView = shoppingCartView;
