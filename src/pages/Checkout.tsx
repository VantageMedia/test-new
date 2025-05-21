import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const plan = searchParams.get('plan') || 'starter';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with Squarespace
    console.log('Form submitted:', formData);
  };

  const getPlanDetails = () => {
    switch (plan) {
      case 'expansion':
        return {
          name: 'Expansion',
          price: '$2,999',
          features: ['10 Pages', '5 Subpages', 'Shopify Integration', 'Advanced SEO']
        };
      case 'premier':
        return {
          name: 'Premier',
          price: '$4,999',
          features: ['15 Pages', '10 Subpages', 'Full E-commerce', 'Priority Support']
        };
      default:
        return {
          name: 'Starter',
          price: '$1,999',
          features: ['5 Pages', '3 Subpages', 'Basic SEO', 'Email Support']
        };
    }
  };

  const planDetails = getPlanDetails();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Trust Bar */}
        <div className="flex justify-center space-x-8 mb-12">
          <div className="flex items-center">
            <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="ml-2 text-sm text-gray-600">100% Secure Checkout</span>
          </div>
          <div className="flex items-center">
            <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="ml-2 text-sm text-gray-600">30-Day Money Back</span>
          </div>
          <div className="flex items-center">
            <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="ml-2 text-sm text-gray-600">SSL Protected</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
            <div className="border-b border-gray-200 pb-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Selected Plan:</span>
                <span className="font-semibold">{planDetails.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Price:</span>
                <span className="text-2xl font-bold text-indigo-600">{planDetails.price}</span>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">What's Included:</h3>
              {planDetails.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Checkout Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Your Order</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700">Monthly Budget</label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>

              {/* Payment Method Selection */}
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Method</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="credit-card"
                      name="payment-method"
                      value="credit-card"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                      defaultChecked
                    />
                    <label htmlFor="credit-card" className="ml-3 block text-sm font-medium text-gray-700">
                      Credit Card
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="paypal"
                      name="payment-method"
                      value="paypal"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <label htmlFor="paypal" className="ml-3 block text-sm font-medium text-gray-700">
                      PayPal
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
                >
                  Complete Purchase - {planDetails.price}
                </button>
              </div>

              {/* Security Notice */}
              <p className="text-center text-sm text-gray-500 mt-4">
                Your information is secure and encrypted. We never store your credit card details.
              </p>
            </form>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex justify-center space-x-8">
          <img src="/visa.svg" alt="Visa" className="h-8" />
          <img src="/mastercard.svg" alt="Mastercard" className="h-8" />
          <img src="/amex.svg" alt="American Express" className="h-8" />
          <img src="/paypal.svg" alt="PayPal" className="h-8" />
        </div>
      </div>
    </div>
  );
};

export default Checkout; 