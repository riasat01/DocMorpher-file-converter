import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51OEDuwBugzBQ6iGmXBphuZaE8EPdqx0iX8LYDBGpE8EuQ3s2BDrfYBrs8HRlYCU2C1lQ4okGM8vQt3ylbdrLpOHK00O9KYUTSQ"
);

const Payment = () => {
  const {price} = useParams();
  // console.log(typeof price);
  
  
  
  return (
    <div>
      <h2 className="text-3xl text-center font-bold">Payment</h2>
      <div className="w-full md:w-1/2 mx-auto h-1/2 border mt-8">
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
