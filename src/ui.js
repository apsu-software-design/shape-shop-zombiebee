"use strict";
//User Interface for The Shopping Cart 
//@author James Church
exports.__esModule = true;
exports.start = void 0;
var readlineSync = require("readline-sync"); //for easier repeated prompts
var products_1 = require("./products");
var model_1 = require("./model");
var productRemovalView_1 = require("./productRemovalView");
var shoppingCartView_1 = require("./shoppingCartView");
var totalPriceView_1 = require("./totalPriceView");
// Hey look. It's a global variable. This is totally cool, right?
// let shopping_cart: Product[] = [];
// let quantity_cart: number[] = [];
/**
 * Function to run the UI
 */
function start() {
    showMainMenu(new model_1.Model());
}
exports.start = start;
/**
 * The main menu. Will show until the user exits
 */
function showMainMenu(model) {
    while (true) { //run until we exit
        console.log("Welcome to the Shape Store! We offer the best shapes! Pick an option:\n  1. Add an item to the cart.\n  2. Remove an item to the cart.\n  3. View the items in the cart.\n  4. View the price of all items.\n  5. Quit.");
        var response = readlineSync.question('> ');
        if (response === '5' || response.slice(0, 2).toLowerCase() === ':q') {
            break; //stop looping, thus leaving method
        }
        switch (response) { //handle each response
            case '1':
                addItemToCart(model);
                break;
            case '2':
                removeItemFromCart(model);
                break;
            case '3':
                viewItemsInCart(model);
                break;
            case '4':
                viewCartTotal(model);
                break;
            default: console.log('Invalid option!');
        }
        console.log(''); //extra empty line for revisiting
    }
}
function addItemToCart(model) {
    console.log("\n");
    letUserSelectItem(model);
    letUserSelectQuantity(model);
}
function letUserSelectItem(model) {
    console.log("Here you can select your shape. Pick an option:\n  1. Buy a Triangle!\n  2. Buy a Square!\n  3. Buy a Pentagon!\n  4. Go back. Don't buy anything.");
    var response = readlineSync.question('> ');
    switch (response) { //handle each response
        case '1':
            model.addProduct(new products_1.Product("Triangle", 3.5, "It's got three sides!"));
            break;
        case '2':
            model.addProduct(new products_1.Product("Square", 4.5, "It's got four sides!"));
            break;
        case '3':
            model.addProduct(new products_1.Product("Pentagon", 5.5, "It's got five sides!"));
            break;
        default: console.log('Invalid option!');
    }
    console.log(''); //extra empty line for revisiting
}
function letUserSelectQuantity(model) {
    console.log("How many of this shape would you like to purchase?");
    var response = readlineSync.question('> ');
    model.addQuantity(parseInt(response));
    console.log(''); //extra empty line for revisiting
}
function removeItemFromCart(model) {
    console.log("Select an item to be removed from the cart.");
    console.log(new productRemovalView_1.productRemovalView(model).getView());
    // for (let i = 0; i < model.getShoppingCart().length; i++) {
    //     console.log(i+": "+model.getShoppingCart()[i].getName());
    // }
    var response = readlineSync.question('> ');
    var toRemove = parseInt(response);
    model.getShoppingCart().splice(toRemove, 1);
    model.getQuantityCart().splice(toRemove, 1);
    console.log(''); //extra empty line for revisiting
}
function viewItemsInCart(model) {
    console.log(new shoppingCartView_1.shoppingCartView(model).getView());
    // for (let i = 0; i < model.getShoppingCart().length; i++) {
    //     console.log("");
    //     console.log("       Name: "+shopping_cart[i].getName());
    //     console.log("      Price: "+shopping_cart[i].getPrice());
    //     console.log("Description: "+shopping_cart[i].getDescription());
    //     console.log("   Quantity: "+quantity_cart[i]);
    // }
}
function viewCartTotal(model) {
    console.log(new totalPriceView_1.totalPriceView(model).getView());
    // let total: number = 0;
    // for (let i = 0; i < shopping_cart.length; i++) {
    //     total += shopping_cart[i].getPrice() * quantity_cart[i];
    // }
    // console.log("Shopping Cart Total: "+total);
}
