//function which we use in checkout.js to format Currency from cents to dolars
export function formatCurrency(priceCents) {
  return (priceCents / 100).toFixed(2);
}