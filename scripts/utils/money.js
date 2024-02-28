//function which we use in checkout.js to format Currency from cents to dolars
export function formatCurrency(priceCents) {
  return (Math.round(priceCents) / 100).toFixed(2);
}

export default  formatCurrency;