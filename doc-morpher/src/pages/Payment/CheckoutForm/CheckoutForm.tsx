import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const CheckoutForm = ({ price }) => {
  const { user, loader } = useAuth()
  console.log(typeof price);

  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  // const totalPrice = parseInt(price);
  // console.log(typeof totalPrice);

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "price": price }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClientSecret(data.clientSecret)
      });
  }, [price]);

  const handleSubmit = async (event: Event) => {
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
      setError(error.message);
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
    // TODO: Some update needed here
    // const { paymentIntent, error:confirmError} = await stripe.confirmCardPayment(clientSecret, {
    //   payment_method: {
    //     card: card,
    //     billing_details: {
    //       email: user?.email || "anonymous",
    //       name: user?.displayName || "Name is not found"
    //     }
    //   }
    // })

    if(confirmError) {
      console.log('confirm error');
      
    } else {
      console.log('payment intent', paymentIntent);
      
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
