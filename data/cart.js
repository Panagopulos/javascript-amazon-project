export const cart = [];

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
}