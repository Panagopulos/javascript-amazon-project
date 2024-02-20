//saves just the id which will then give us acces to the
//rest of the information but we need to use products.js
//Allso get the save from localStorage of the cart if there
//is nothing it shows the product inserted manually
export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart) {
    cart = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
    }, {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1
    }];
}


// Saves the cart insige local storage I then use it inside
//"addToCart()" and "removeProduct()"
function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}
//Function which
//Iterate through cart and checks if there is already
//an MatchingItem if yes save adds just int +=1 
//if no adds an item.productId into matchingItem
//for the first time. thats how we prevents to have 10
//products separted as quantity but we will have one 
// count of an quantity.
export function addToCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
      if(productId === cartItem.productId) {
          matchingItem = cartItem;

      }
  });
  //DOM for <select> and also product.id
  // We have also productId so it recognizes which product
  //are we working with
  const selector = document.querySelector(`.js-quantity-selector-${productId}`);
  const quantity = Number(selector.value);


  if(matchingItem) {
      matchingItem.quantity += quantity;
  } else {
      cart.push({
          productId,    //we used shorthand method here.
          quantity
      });
  }

  saveToStorage();
}

export function calculateCartQuantity() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity
    });

    return cartQuantity;
}

export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;

    saveToStorage();
}