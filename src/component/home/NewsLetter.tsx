"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your newsletter subscription logic here
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-[var(--primary-brand)] to-[var(--contrast-dark)]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Stay Updated with Latest Tech
        </h2>
        <p className="text-[var(--secondary-accent)] text-lg mb-8">
          Subscribe to our newsletter for exclusive deals, new arrivals, and
          robotics insights
        </p>

        {subscribed ? (
          <div className="bg-green-500 text-white px-6 py-4 rounded-lg inline-block">
            ✓ Successfully subscribed! Check your email.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-6 py-4 rounded-lg text-[var(--text-primary)] border-2 border-[var(--secondary-accent)] focus:outline-none focus:border-[var(--buttons-highlight)]"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-[var(--buttons-highlight)] text-white rounded-lg font-semibold hover:bg-[var(--buttons-highlight)]/90 transition-colors whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
        )}

        <p className="text-[var(--secondary-accent)] text-sm mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
