"use client";
import { loadStripe } from '@stripe/stripe-js';
import { Button } from '@/components/Button'

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

export function CheckoutButton({ priceId, featured = false }) {
  const handleClick = async () => {
    const stripe = await stripePromise;
    await stripe.redirectToCheckout({
      lineItems: [{ price: priceId, quantity: 1 }],
      mode: 'payment',
      successUrl: window.location.origin + '/success',
      cancelUrl: window.location.origin + '/',
    });
  };

  return (

    <Button
      variant={featured ? 'solid' : 'outline'}
      color="white"
      className="mt-8"
      onClick={handleClick}
    >
      Get Started
    </Button>
  );
}