// payment.service.ts
import { Injectable } from '@angular/core';
import { loadStripe, Stripe } from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private stripePromise = loadStripe('pk_test_51PECtbRpjT8p9PLVgwOGmOXGTB0GsN5jEnHZXXouaU1uwAF657UFWaVbuVK28y7ko1fIXQLukw28Oz2KJnzALxRj00zEzD2I8v'); // Replace with your Stripe publishable key

  async loadStripe(): Promise<Stripe | null> {
    return this.stripePromise;
  }

  async createCheckoutSession(items: any[]): Promise<void> {
    const stripe = await this.stripePromise;
    if (!stripe) {
      throw new Error('Stripe.js failed to load.');
    }

    // Format the request payload to match backend expectations
    const formattedItems = items.map(item => ({
      CustomerId: 1, // Replace with actual customer ID
      ProductName: item.Titel, // Assuming item has a Titel property
      ProductPrice: item.Pris, // Assuming item has a Pris property
      Quantity: item.AntalPaLager // Assuming item has a AntalPaLager property
    }));


    console.log(formattedItems)

    // Make a call to your backend to create a checkout session
    const response = await fetch('https://localhost:7097/Payment/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ items: formattedItems })
    });

    const { sessionId } = await response.json();

    // Redirect to checkout
    const { error } = await stripe.redirectToCheckout({ sessionId });

    if (error) {
      console.error('Error redirecting to checkout:', error);
    }
  }
}
