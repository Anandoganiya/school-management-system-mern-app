function calculate(grandTotal, couponDiscountPercentage, taxRate) {
  let basePrice = Math.floor(grandTotal - grandTotal * (taxRate / 100));
  let couponDiscount = Math.floor(
    basePrice - basePrice * (couponDiscountPercentage / 100)
  );
  let taxAmount = Math.floor(grandTotal - basePrice);
  let couponDiscountAmount = Math.floor(basePrice - couponDiscount);
  let subTotal = basePrice + taxAmount + couponDiscountAmount;
  let dis = {};
  dis["basePrice"] = basePrice;
  dis["grandTotal"] = grandTotal;
  dis["couponDiscountPercentage"] = couponDiscountPercentage;
  dis["couponDiscountAmount"] = couponDiscountAmount;
  dis["taxRate"] = taxRate;
  dis["taxAmount"] = taxAmount;
  dis["subTotal"] = subTotal;
  console.log(dis);
}

calculate(1079, 10, 18);
