import { useNavigate } from 'react-router-dom';
import Layout from '../component/layout';

const PaymentSuccess = () => {
  const navigate = useNavigate();


  return (
    <Layout>
      <div className="bg-rgb(254, 253,255) min-h-screen w-full overflow-x-hidden font-sans text-[#2e2c2b] flex items-center justify-center px-6 pt-30 pb-24">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-3xl p-12 md:p-16 border-2 border-green-200 shadow-lg">
            {/* Success Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            {/* Success Message */}
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-black text-[#2e2c2b] mb-4">
                Payment Successful!
              </h1>
              <p className="text-lg text-[#2e2c2b]/70 leading-relaxed">
                Thank you for your purchase. Your tickets have been confirmed and a confirmation email will be sent shortly.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/')}
                className="flex-1 bg-[#2e2c2b] text-white lg:py-4 py-2 rounded-full font-bold tracking-widest hover:bg-[#d84136] transition-all text-sm"
              >
                BACK TO HOME
              </button>
              <button
                onClick={() => navigate('/')}
                className="flex-1 border-2 border-[#d84136] text-[#d84136] lg:py-4 py-2 rounded-full font-bold tracking-widest hover:bg-[#d84136] hover:text-white transition-all text-xs"
              >
                PURCHASE MORE TICKETS
              </button>
            </div>
          </div>

          {/* Support Footer */}
          <div className="text-center mt-8 text-[#2e2c2b]/70">
            <p className="text-sm mb-2">
              Questions or issues?{' '}
              <a href="mailto:support@brunchandpray.com" className="text-[#d84136] font-bold hover:underline">
                Contact support
              </a>
            </p>
            <p className="text-xs opacity-60">
              Please save your order details for your records
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentSuccess;
