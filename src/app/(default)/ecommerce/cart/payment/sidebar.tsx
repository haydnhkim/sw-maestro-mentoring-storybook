'use client';

import type { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    fetch('/api/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // @ts-ignore
        cardNumber: e.target.cardNumber.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        router.push(`/ecommerce/cart/confirm/${res.paymentId}`);
      });
  };

  return (
    <div>
      <div className="lg:sticky lg:top-16 bg-slate-50 dark:bg-slate-800/20 lg:overflow-x-hidden lg:overflow-y-auto no-scrollbar lg:shrink-0 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700 lg:w-[320px] xl:w-[352px] 2xl:w-[calc(352px+80px)] lg:h-[calc(100dvh-64px)]">
        <div className="py-8 px-4 lg:px-8 2xl:px-12">
          <div className="max-w-sm mx-auto lg:max-w-none">
            <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">
              Review & Pay
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Order summary */}
                <div>
                  <div className="text-slate-800 dark:text-slate-100 font-semibold mb-2">
                    Order Summary
                  </div>
                  <ul className="mb-4">
                    <li className="text-sm w-full flex justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                      <div>Subtotal</div>
                      <div className="font-medium text-slate-800 dark:text-slate-100">
                        $205
                      </div>
                    </li>
                    <li className="text-sm w-full flex justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                      <div>Total due (including taxes)</div>
                      <div className="font-medium text-emerald-600">$253</div>
                    </li>
                  </ul>
                </div>

                {/* Payment Details */}
                <div>
                  <div className="text-slate-800 dark:text-slate-100 font-semibold mb-4">
                    Payment Details
                  </div>
                  <div className="space-y-4">
                    {/* Card Number */}
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="card-nr"
                      >
                        Card Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="card-nr"
                        name="cardNumber"
                        className="form-input w-full"
                        type="text"
                        placeholder="1234 1234 1234 1234"
                        required
                      />
                    </div>
                    {/* Expiry and CVC */}
                    <div className="flex space-x-4">
                      <div className="flex-1">
                        <label
                          className="block text-sm font-medium mb-1"
                          htmlFor="card-expiry"
                        >
                          Expiry Date <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="card-expiry"
                          className="form-input w-full"
                          type="text"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          className="block text-sm font-medium mb-1"
                          htmlFor="card-cvc"
                        >
                          CVC <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="card-cvc"
                          className="form-input w-full"
                          type="text"
                          placeholder="CVC"
                        />
                      </div>
                    </div>
                    {/* Name on Card */}
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="card-name"
                      >
                        Name on Card <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="card-name"
                        className="form-input w-full"
                        type="text"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Details */}
                <div>
                  <div className="text-slate-800 dark:text-slate-100 font-semibold mb-4">
                    Additional Details
                  </div>
                  <div className="space-y-4">
                    {/* Email */}
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="card-email"
                      >
                        Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="card-email"
                        className="form-input w-full"
                        type="email"
                        placeholder="john@company.com"
                      />
                    </div>
                    {/* Country */}
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="card-country"
                      >
                        Country <span className="text-rose-500">*</span>
                      </label>
                      <select id="card-country" className="form-select w-full">
                        <option>Italy</option>
                        <option>USA</option>
                        <option>United Kingdom</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="mb-4">
                    <button
                      type="submit"
                      className="btn w-full bg-indigo-500 hover:bg-indigo-600 text-white"
                    >
                      Pay $253.00
                    </button>
                  </div>
                  <div className="text-xs text-slate-500 italic text-center">
                    You'll be charged $253, including $48 for VAT in Italy
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
