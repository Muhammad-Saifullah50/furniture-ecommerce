'use client'
import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();


    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const cardElement = elements?.getElement("card");

        try {
            if (!stripe || !cardElement) return null;
        } catch (error) {
            console.log(error);

        }
    }

    return (

        <div>
            <Elements stripe={stripePromise}>
                <CardElement />
            </Elements>
        </div>
    )
}

export default PaymentForm