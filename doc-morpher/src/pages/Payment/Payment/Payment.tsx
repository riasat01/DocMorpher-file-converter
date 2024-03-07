import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  const {price} = useParams();
  const priceInt: number = typeof price === "string" ? parseInt(price): 0;
  // console.log(typeof price);
  
  
  
  return (
    <div>
      <h2 className="text-3xl text-center font-bold">Payment</h2>
      <div className="w-full md:w-1/2 mx-auto h-1/2 border mt-8">
        <Elements stripe={stripePromise}>
          <CheckoutForm price={priceInt} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
