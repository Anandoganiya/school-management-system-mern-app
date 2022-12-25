const total = 1079;
const taxRate = 0.18;
const couponDiscountPercentage = 0.1;

const basePrice = Math.floor(total / (1 + taxRate));
const couponDiscountAmount = Math.floor(basePrice * couponDiscountPercentage);
const subtotal = Math.floor(basePrice - couponDiscountAmount);
const taxAmount = Math.floor(subtotal * taxRate);

console.log({
  basePrice: basePrice,
  couponDiscountPercentage: 10,
  couponDiscountAmount: couponDiscountAmount,
  subtotal: subtotal,
  taxRate: 18,
  taxAmount: taxAmount,
  grandTotal: 1079,
});
