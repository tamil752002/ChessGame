"use client";
import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
     

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] text-center">
        <h2 className="text-4xl font-bold text-gray-800 md:text-5xl">
          Play Chess, Improve Skills, <br /> & Compete Globally!
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Join Fox Chess and challenge players worldwide.
        </p>
        <Link
          href="/signup"
          className="px-6 py-3 mt-6 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800">Why Choose Fox Chess?</h3>
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
            <div className="p-4 border rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-blue-600">AI-Powered Matches</h4>
              <p className="mt-2 text-gray-600">Challenge smart AI and improve your game.</p>
            </div>
            <div className="p-4 border rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-blue-600">Live Tournaments</h4>
              <p className="mt-2 text-gray-600">Compete in real-time with top players.</p>
            </div>
            <div className="p-4 border rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-blue-600">Leaderboard</h4>
              <p className="mt-2 text-gray-600">Rank up and show off your chess skills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 text-center bg-gray-200">
        <p className="text-gray-700">© 2025 Fox Chess. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Page;
