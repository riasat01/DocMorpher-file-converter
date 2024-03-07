import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { FormEvent, useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../custom-hooks/use-axios-secure/useAxiosSecure";
import useAuth from "../../../custom-hooks/use-auth/useAuth";


const CheckoutForm = ({ price }: { price: number | undefined }) => {
  const { user } = useAuth();
  // console.log(typeof price);

  const [error, setError] = useState("");
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  // const [clientSecret, setClientSecret] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  // const totalPrice = parseInt(price);
  // console.log(typeof totalPrice);

  useEffect(() => {
    axiosSecure.post('/create-payment-intent',{price})
    .then(res => {
      console.log(res?.data?.clientSecret);
      setClientSecret(res?.data?.clientSecret);
    })
  }, [axiosSecure, price])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    // setLoader(true);

    // use your card element with other stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error.message);
      setError(error.message || "");
    } else {
      console.log("payment method", paymentMethod);
      setError("");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your payment is successful!!!",
        showConfirmButton: false,
        timer: 1500
      });
    }

    // confirm payment method
      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "Name is not found"
          }
        }
      })

      if (confirmError) {
        console.log('confirm error');
        // (event.target as any).reset();
      } else {
        console.log('payment intent', paymentIntent);
        axiosSecure.put(`/user/${user?.email}`,{price})
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
        // (event.target as any).reset();
      }
  };
  return (
    <div className="p-5">
      <p className="text-xl text-center font-semibold">Your payment amout is: ${price}</p>
      <form className="p-6" onSubmit={handleSubmit}>
        <CardElement />
        <button
          className="btn btn-info my-6"
          type="submit"
          disabled={!stripe || !elements}
        >
          Pay
        </button>
        <p className="text-red-600">{error}</p>
      </form>
    </div>
  );
};

export default CheckoutForm;
