//User Interface for The Shopping Cart 
//@author James Church

import readlineSync = require('readline-sync'); //for easier repeated prompts
import {Product} from './products';
import { Model } from './model';
import {productRemovalView} from './productRemovalView'
import { shoppingCartView } from './shoppingCartView';
import { totalPriceView } from './totalPriceView';

// Hey look. It's a global variable. This is totally cool, right?
// let shopping_cart: Product[] = [];
// let quantity_cart: number[] = [];

/**
 * Function to run the UI
 */
export function start() {
  showMainMenu(new Model());
}

/**
 * The main menu. Will show until the user exits
 */
function showMainMenu(model : Model) {
  while(true){ //run until we exit
    console.log(`Welcome to the Shape Store! We offer the best shapes! Pick an option:
  1. Add an item to the cart.
  2. Remove an item to the cart.
  3. View the items in the cart.
  4. View the price of all items.
  5. Quit.`);

    let response = readlineSync.question('> ')
    if(response === '5' || response.slice(0,2).toLowerCase() === ':q'){
      break; //stop looping, thus leaving method
    }

    switch(response) { //handle each response
      case '1': addItemToCart(model); break;
      case '2': removeItemFromCart(model); break;
      case '3': viewItemsInCart(model); break;
      case '4': viewCartTotal(model); break;
      default: console.log('Invalid option!');
    }
    console.log(''); //extra empty line for revisiting
  }
}

function addItemToCart(model : Model) {
  console.log("\n");
  letUserSelectItem(model);
  letUserSelectQuantity(model);
}

function letUserSelectItem(model : Model) {
  console.log(`Here you can select your shape. Pick an option:
  1. Buy a Triangle!
  2. Buy a Square!
  3. Buy a Pentagon!
  4. Go back. Don't buy anything.`);

    let response = readlineSync.question('> ')

    switch(response) { //handle each response
      case '1': model.addProduct(new Product("Triangle", 3.5, "It's got three sides!")); break;
      case '2': model.addProduct(new Product("Square", 4.5, "It's got four sides!")); break;
      case '3': model.addProduct(new Product("Pentagon", 5.5, "It's got five sides!")); break;
      default: console.log('Invalid option!');
    }
    console.log(''); //extra empty line for revisiting
}

function letUserSelectQuantity(model : Model) {
    console.log(`How many of this shape would you like to purchase?`);

    let response = readlineSync.question('> ')
    model.addQuantity(parseInt(response));
    console.log(''); //extra empty line for revisiting
}

function removeItemFromCart(model : Model) {
    console.log(`Select an item to be removed from the cart.`);

    console.log(new productRemovalView(model).getView());
    // for (let i = 0; i < model.getShoppingCart().length; i++) {
    //     console.log(i+": "+model.getShoppingCart()[i].getName());
    // }

    let response = readlineSync.question('> ')
    let toRemove = parseInt(response);

    model.getShoppingCart().splice(toRemove, 1);
    model.getQuantityCart().splice(toRemove, 1);

    console.log(''); //extra empty line for revisiting
}

function viewItemsInCart(model : Model) {

  console.log(new shoppingCartView(model).getView());
    // for (let i = 0; i < model.getShoppingCart().length; i++) {
    //     console.log("");
    //     console.log("       Name: "+shopping_cart[i].getName());
    //     console.log("      Price: "+shopping_cart[i].getPrice());
    //     console.log("Description: "+shopping_cart[i].getDescription());
    //     console.log("   Quantity: "+quantity_cart[i]);
    // }
}

function viewCartTotal(model : Model) {
  console.log(new totalPriceView(model).getView());
    // let total: number = 0;
    // for (let i = 0; i < shopping_cart.length; i++) {
    //     total += shopping_cart[i].getPrice() * quantity_cart[i];
    // }
    // console.log("Shopping Cart Total: "+total);
}
