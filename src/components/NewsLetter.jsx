"use client";

import { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log(`Subscribed with email: ${email}`);
  };
  
  return (
    <div className="bg-gray-100 py-[120px] rounded-lg shadow-lg">
      <div className="container flex items-center justify-center flex-col">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-4">
          Stay up-to-date with the latest news and updates by subscribing to our
          newsletter.
        </p>

        <div className="flex items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow w-[300px] border p-4 rounded-l-md focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-6 py-4 rounded-r-md"
            onClick={handleSubscribe}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
