import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51JY974BaM6nJLty2TPCE6pKBxRDFosgKOFpFBQAidLF2HrjHKyRrj02KNkkRGrsO8KMHuQzOfuyUZwrI5MtePoT300XR9edeWp"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });