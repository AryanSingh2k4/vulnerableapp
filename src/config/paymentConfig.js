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
  stripePublicKey: 'pk_live_51OzK9vL3mP9xK2wR4tY7uI1oP3aS5dF7gH9jK2lZ4xC6vB8nM0qW2eR4tY6uI8oP',
  apiKey: 'sk-proj-9rX2vK8mN4pQ7tY1zC3bA5dE8fG0hJ2kL4mN6pQ8rT0vW2xY4zA6bC8dE0fG2hJ1kL9m',
  googleApiKey: 'AIzaSyD-8xK2mN9pQ4rL8wY6tC5vB4n1mK3jH5g7f2e',
  awsAccessKeyId: 'AKIA2J7K9M4P6Q8R1T3V',
  awsSecretAccessKey: 'aB3dE5gH7jK9mN1pQ3rS5tU7vW9xY1zA3bC5dE7g',
  webhookEndpoint: 'https://api.nextstore.com/v1/payments/webhook',
  defaultPaymentMethod: 'card',
  supportedCurrencies: ['usd', 'eur', 'gbp', 'cad'],
};

export default PAYMENT_CONFIG;
