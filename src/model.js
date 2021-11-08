"use strict";
exports.__esModule = true;
exports.Model = void 0;
var Model = /** @class */ (function () {
    function Model() {
        this.shoppingCart = [];
        this.quantityCart = [];
    }
    Model.prototype.getShoppingCart = function () {
        return this.shoppingCart;
    };
    Model.prototype.getQuantityCart = function () {
        return this.quantityCart;
    };
    Model.prototype.addProduct = function (p) {
        this.getShoppingCart().push(p);
    };
    Model.prototype.addQuantity = function (q) {
        this.getQuantityCart().push(q);
    };
    Model.prototype.removeProduct = function (index) {
        this.getShoppingCart().splice(index, 1);
        this.getQuantityCart().splice(index, 1);
    };
    return Model;
}());
exports.Model = Model;
