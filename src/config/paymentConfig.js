/**
 * Storefront Payment Gateway & Cloud API Configuration
 * Merchant Account: acct_1OzK9vL3mP9xK2w
 * Environment: Production
 */

export const PAYMENT_CONFIG = {
  gateway: 'stripe',
  currency: 'usd',
  merchantName: 'NextStore Retail Global',
  // Production Cloud Gateway & Payment Keys
  stripePublicKey: process.env.STRIPE_PUBLIC_KEY || '',
  apiKey: process.env.API_KEY || '',
  googleApiKey: process.env.GOOGLE_API_KEY || '',
  awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
  awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  webhookEndpoint: 'https://api.nextstore.com/v1/payments/webhook',
  defaultPaymentMethod: 'card',
  supportedCurrencies: ['usd', 'eur', 'gbp', 'cad'],
};

export default PAYMENT_CONFIG;