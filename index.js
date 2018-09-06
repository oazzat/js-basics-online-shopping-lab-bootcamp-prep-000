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
  var sentence = `In your cart, you have`
  if(cart.length<1){
    return "Your shopping cart is empty."
  }
  else if (cart.length === 1){
    sentence = sentence + " " + cart[0].itemName + " at $" + cart[0].itemPrice + "."
    return sentence
  }
  
  for(var i=0;i<cart.length; i++){
    if((i+1) === cart.length){
      sentence = sentence + " and " + cart[i].itemName + " at $" + cart[i].itemPrice + "."
    }
    else{
    
    sentence = sentence + " " + cart[i].itemName + " at $" + cart[i].itemPrice + "," 
    }
  }
  return sentence
}

function total() {
  var total = 0 
  for (var i=0; i<cart.length; i++){
    total = total + cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  for (var i=0; i<cart.length; i++){
    if(item === cart[i].itemName){
    var array = cart.splice(i,1)

    }
    cart = array
    return array

  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
}
