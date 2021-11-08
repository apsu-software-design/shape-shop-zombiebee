"use strict";
exports.__esModule = true;
exports.totalPriceView = void 0;
var totalPriceView = /** @class */ (function () {
    function totalPriceView(model) {
        this.model = model;
    }
    totalPriceView.prototype.getModel = function () {
        return this.model;
    };
    totalPriceView.prototype.getView = function () {
        var total = 0.0;
        for (var i = 0; i < this.getModel().getShoppingCart().length; i++) {
            total += this.getModel().getShoppingCart()[i].getPrice() * this.getModel().getQuantityCart()[i];
        }
        return "Shopping Cart Total: " + total;
    };
    return totalPriceView;
}());
exports.totalPriceView = totalPriceView;
