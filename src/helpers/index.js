export const roundToTwo = num => {
  return +(Math.round(num + "e+2") + "e-2");
};

export const convertEuroToPLN = (amount, euroRate) => {
  return amount * euroRate;
};

export const countDecimals = value => {
  if (value.toString().indexOf(".") > -1)
    return value.toString().split(".")[1].length || 0;
  return 0;
};
