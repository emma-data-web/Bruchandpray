import React from "react";

const PaymentFailure = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">

      <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-md w-full">

        <div className="text-red-500 text-7xl mb-4">
          ❌
        </div>

        <h1 className="text-3xl font-bold text-red-700 mb-2">
          Payment Unsuccessful
        </h1>

        <p className="text-gray-700 mb-1">
          Your payment was unsuccessful.
        </p>

        <p className="text-gray-500 mb-6">
          Please try again or use a different payment method.
        </p>

        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition">
          Try Again
        </button>

      </div>

    </div>
  );
};

export default PaymentFailure;