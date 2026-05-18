import { useState } from 'react';
import axios from 'axios';
import Layout from '../component/layout';
import { toast, SleekToast } from 'sleek-toast';

const events = [
  {
    id: 1,
    title: 'Mother is Gold',
    date: 'May 2, 2026',
    location: 'Rancho Cucamonga, CA',
    description: 'A beautiful brunch experience honouring mothers, daughters and sisters',
  },
];

const ticketItem = {
  id: 'general-ticket',
  type: 'Mission',
  price: 35,
  note: "Brunch & Pray exists to gather women for God’s glory. What began as a prompting from God in 2018 has grown into a vibrant community of women seeking a deeper relationship with Christ and meaningful connection with other faith-filled women. Our mission is to uplift, empower, and inspire women through thoughtfully curated gatherings, creative experiences, authentic community, and prayer. Through fellowship, the arts, and intentional conversations, we strive to remind women that a life rooted in God can be joyful, practical, beautiful, and full of purpose.Brunch & Pray is more than an event— it is a space where women can grow spiritually, build genuine relationships, and be encouraged to walk boldly in their God-given calling",
};

function CheckoutModal({ selectedTicket, onClose }) {
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleCheckout = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('https://doctor-comform-website.onrender.com/tickets/buy-ticket', {
        email,
        quantity,
        item_id: String(selectedTicket.id),
        type: selectedTicket.type,
      });

      if (response.status == 200) {
        console.log('Checkout initiated:', response.data);
      }

      setSuccess(true);

      setTimeout(() => {
        if (response.data.checkout_url) {
          window.location.href = response.data.checkout_url;
        }
      }, 1200);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Payment failed. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-[#2e2c2b]">{selectedTicket.type}</h3>
          <button
            onClick={onClose}
            className="text-2xl text-[#2e2c2b]/40 hover:text-[#2e2c2b]"
            disabled={loading}
          >
            ✕
          </button>
        </div>

        {success ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">✓</div>
            <h4 className="text-xl font-bold text-[#d84136] mb-2">Checkout Started</h4>
            <p className="text-[#2e2c2b]/70">Redirecting to payment...</p>
          </div>
        ) : (
          <>
            <p className="text-3xl font-bold text-[#d84136] mb-2">${selectedTicket.price}</p>
            <p className="text-sm text-[#2e2c2b]/60 mb-6">per ticket × {quantity} ticket(s)</p>

            <form onSubmit={handleCheckout} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[#2e2c2b] mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                  className="w-full px-4 py-2 border border-[#2e2c2b]/20 rounded-lg focus:outline-none focus:border-[#d84136] disabled:opacity-50"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2e2c2b] mb-2">Quantity</label>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  disabled={loading}
                  className="w-full px-4 py-2 border border-[#2e2c2b]/20 rounded-lg focus:outline-none focus:border-[#d84136] disabled:opacity-50"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} ticket{num > 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                  {error}
                </div>
              )}

              <div className="p-4 rounded-lg my-4">
                <p className="text-sm text-[#2e2c2b]">
                  <span className="font-semibold">Total:</span> ${(selectedTicket?.price * quantity).toFixed(2)}
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#d84136] text-white py-3 rounded-full font-bold tracking-widest hover:bg-[#2e2c2b] transition-all disabled:opacity-50"
              >
                {loading ? 'Processing...' : 'CHECKOUT'}
              </button>

              <p className="text-xs text-[#2e2c2b]/50 text-center mt-4">
                You will be redirected to complete your payment securely.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function CheckoutForm() {
  const [selectedTicket, setSelectedTicket] = useState(null);

  return (
    <>
      <section className="px-6">
        <div className="max-w-6xl mx-auto">

          <div>
            <img src="/logo-white.jpeg" className='w-[70%] mx-auto' />
          </div>
          <div className="text-center mb-16">
            <p className="text-lg text-[#2e2c2b]/70 max-w-2xl mx-auto leading-relaxed">
              Bringing woman together to grow in faith, purpose, and practical Christain living.
            </p>
          </div>

          <div className="rounded-3xl border border-[#2e2c2b]/10 p-8 bg-white shadow-xl mb-16">
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#d84136] mb-2">{ticketItem.type}</h3>
                <p className="text-sm uppercase tracking-[0.3em] text-[#2e2c2b]/60">{ticketItem.note}</p>
              </div>
              <p className="text-3xl font-black text-[#2e2c2b]">${ticketItem.price}</p>
            </div>
            <p className="text-sm text-[#2e2c2b]/70">
              Enter the number of tickets you want to purchase, then complete checkout in the popup.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 mb-16 border border-[#2e2c2b]/10 flex justify-between lg:flex-row flex-col gap-6 shadow-xl">
            <div className="grid md:grid-cols-3 gap-8">
              {events.map((event) => (
                <div key={event.id}>
                  <h3 className="text-2xl font-bold text-[#d84136] mb-4">{event.title}</h3>
                  <div className="space-y-4 text-[#2e2c2b]/70">
                    <p>
                      <span className="font-semibold text-[#2e2c2b]">Date:</span> {event.date}
                    </p>
                    <p>
                      <span className="font-semibold text-[#2e2c2b]">Location:</span> {event.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setSelectedTicket(ticketItem)}
              className="bg-[#d84136] text-white py-3 px-6 rounded-xl cursor-pointer font-bold hover:bg-[#2e2c2b] hover:text-white transition-all whitespace-nowrap"
            >
              Get Tickets
            </button>
          </div>

          

          <div className="bg-[#2e2c2b] rounded-3xl p-12 text-[#dcd3ca]">
            <h2 className="text-4xl font-bold mb-12 text-center text-[#d84136]">WHY ATTEND?</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Prayer Changes Everything</h3>
                <p className="leading-relaxed opacity-80">
                  Experience the transformative power of communal prayer and discover how faith can reshape your life and purpose.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Sisterhood & Empowerment</h3>
                <p className="leading-relaxed opacity-80">
                  Connect with like-minded women in a safe, uplifting space designed to strengthen your spiritual journey and personal growth.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Practical Christianity</h3>
                <p className="leading-relaxed opacity-80">
                  Learn how to live out your faith intentionally with practical wisdom that translates your beliefs into daily action.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center text-[#2e2c2b]/70">
            <p className="text-sm mb-4">
              Have questions?{' '}
              <a href="mailto:info@brunchandpray.com" className="text-[#d84136] font-bold hover:underline">
                Contact us
              </a>
            </p>
            <p className="text-xs opacity-60">
              All ticket sales are final. Please review our refund policy before purchasing.
            </p>
          </div>
        </div>
      </section>

      {selectedTicket && <CheckoutModal selectedTicket={selectedTicket} onClose={() => setSelectedTicket(null)} />}
    </>
  );
}

const GetTickets = () => {
  return (
    <Layout>
      <div className="bg-rgb(255,253,255) w-full overflow-x-hidden font-sans text-[#2e2c2b]">
        <SleekToast />
        <CheckoutForm />
      </div>
    </Layout>
  );
};

export default GetTickets;
