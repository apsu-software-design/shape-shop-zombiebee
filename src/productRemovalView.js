"use strict";
exports.__esModule = true;
exports.productRemovalView = void 0;
var productRemovalView = /** @class */ (function () {
    function productRemovalView(model) {
        this.model = model;
    }
    productRemovalView.prototype.getModel = function () {
        return this.model;
    };
    productRemovalView.prototype.getView = function () {
        var productString = "";
        for (var i = 0; i < this.getModel().getShoppingCart().length; i++) {
            productString += i + ": " + this.getModel().getShoppingCart()[i].getName();
            productString += "\n";
        }
        return productString;
    };
    return productRemovalView;
}());
exports.productRemovalView = productRemovalView;
