import {useNavigate } from 'react-router-dom';
import Layout from '../component/layout';

const PaymentFailure = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="bg-[#f1ece8] min-h-screen w-full overflow-x-hidden font-sans text-[#2e2c2b] flex items-center justify-center px-6 pt-30 pb-24">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-3xl p-12 md:p-16 border-2 border-red-200 shadow-lg">
            {/* Error Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>

            {/* Error Message */}
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-black text-[#2e2c2b] mb-4">
                Payment Failed
              </h1>
              <p className="text-lg text-[#2e2c2b]/70 leading-relaxed">
                Unfortunately, your payment could not be processed. Please review the details below and try again.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/')}
                className="flex-1 bg-[#d84136] text-white lg:py-4 py-2 rounded-full font-bold tracking-widest hover:bg-[#2e2c2b] transition-all text-xs"
              >
                TRY AGAIN
              </button>
              <button
                onClick={() => navigate('/')}
                className="flex-1 border-2 border-[#2e2c2b] text-[#2e2c2b] lg:py-4 py-2 rounded-full font-bold tracking-widest hover:bg-[#2e2c2b] hover:text-white transition-all text-xs"
              >
                BACK TO HOME
              </button>
            </div>
          </div>

          {/* Support Footer */}
          <div className="text-center mt-8 text-[#2e2c2b]/70">
            <p className="text-sm mb-2">
              Still having trouble?{' '}
              <a href="mailto:support@brunchandpray.com" className="text-[#d84136] font-bold hover:underline">
                Contact our support team
              </a>
            </p>
            <p className="text-xs opacity-60">
              We are here to help resolve any payment issues
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentFailure;
