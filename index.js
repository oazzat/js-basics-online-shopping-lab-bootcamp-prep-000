var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var obj = {itemName: item, itemPrice: 0}
 obj.itemPrice = Math.floor(Math.random()*100)
 cart.push(obj)
 return `${item} has been added to your cart.`
}

function viewCart() {
  if(cart.length<1){
    return "Your shopping cart is empty."
  }
  var sentence = `In your cart, you have `
  
  for(var i=0;i<cart.length; i++){
    if((i+1) === cart.length){
      sentence = sentence + " and " + cart[i].itemName + " at $" + cart[i].itemPrice + "."
    }
    else{
    
    sentence = sentence + cart[i].itemName + " at $" + cart[i].itemPrice + ", " 
    }
  }
  return sentence
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
