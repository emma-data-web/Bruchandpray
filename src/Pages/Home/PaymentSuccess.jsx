import React from "react";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">

      <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-md w-full">

        <div className="text-green-500 text-7xl mb-4">
          ✔️
        </div>

        <h1 className="text-3xl font-bold text-green-700 mb-2">
          Payment Successful
        </h1>

        <p className="text-gray-700 mb-1">
          Your payment was successful.
        </p>

        <p className="text-gray-500 mb-6">
          Thank you for your purchase!
        </p>

        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition">
          Go to Home
        </button>

      </div>

    </div>
  );
};

export default PaymentSuccess;