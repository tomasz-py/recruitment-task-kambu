export const roundToTwo = num => {
  return +(Math.round(num + "e+2") + "e-2");
};

export const convertEuroToPLN = (amount, euroRate) => {
  return amount * euroRate;
};
